'use client';

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/ko';

const CommentList = () => {
  const [repleList, setRepleList] = useState([]);
  const [editIndex, setEditIndex] = useState('');
  const [modifyCont, setModifyCont] = useState('');
  const [modifyPass, setModifyPass] = useState('');
  const [deleteIndex, setDeleteIndex] = useState('');
  const [deletePass, setDeletePass] = useState('');

  // modal
  const [modalIndex, setModalIndex] = useState('');
  const [modalFlag, setModalFlag] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setModalFlag(false));

  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, [ref, handler]);
  }

  // list
  const fetchRepleList = () => {
    axios
      .get('/api/reple/list')
      .then((response) => {
        if (response.data.success) {
          const reversedList = [...response.data.repleList].reverse();
          setRepleList(reversedList);
        }
      })
      .catch((err) => console.error('❌ [ERROR] 댓글 목록 불러오기 실패:', err));
  };

  // 댓글 목록 초기 로드
  useEffect(() => {
    fetchRepleList();
  }, []);

  // 작성일, 수정일
  const SetTime = (a, b) => {
    if (a !== b) {
      return moment(b).format('YYYY년 MMMM Do') + '(수정)';
    } else {
      return moment(a).format('YYYY년 MMMM Do');
    }
  };

  // 수정
  const SubmitHandler = async (e, index) => {
    e.preventDefault();

    if (modifyPass !== repleList[index].password) {
      return alert('비밀번호가 일치하지 않습니다.');
    }

    try {
      const body = {
        content: modifyCont,
        repleNum: repleList[index].repleNum,
        repleId: repleList[index]._id,
      };

      const response = await axios.patch('/api/reple/modify', body);

      if (response.data.success) {
        alert('댓글이 수정되었습니다.');
        setEditIndex(null);
        fetchRepleList(); // 최신 목록 갱신
      } else {
        alert('댓글 수정에 실패했습니다.');
      }
    } catch (err) {
      console.error('❌ [ERROR] 댓글 수정 실패:', err);
      alert('서버 오류가 발생했습니다.');
    }
  };

  // 삭제
  const DeleteHandler = async (e, index) => {
    e.preventDefault();

    if (deletePass !== repleList[index].password) {
      return alert('비밀번호가 일치하지 않습니다.');
    }

    try {
      const body = { repleId: repleList[index]._id };

      const response = await axios.delete('/api/reple/delete', { data: body });

      if (response.data.success) {
        alert('댓글이 삭제되었습니다.');
        setDeleteIndex(null);
        fetchRepleList(); // 최신 목록 갱신
      } else {
        alert('댓글 삭제에 실패했습니다.');
      }
    } catch (err) {
      console.error('❌ [ERROR] 댓글 삭제 실패:', err);
      alert('서버 오류가 발생했습니다.');
    }
  };

  return (
    <>
      <ul className="repleList" data-lenis-prevent-wheel>
        {repleList.map((reple, index) => {
          if (editIndex === index) {
            return (
              <li className="reple" key={index}>
                <form className="modifyForm">
                  <label htmlFor="modifyCont" className="blind"></label>
                  <input
                    type="text"
                    name="modifyCont"
                    id="modifyCont"
                    value={modifyCont}
                    onChange={(e) => {
                      setModifyCont(e.currentTarget.value);
                    }}
                  />
                  <div className="modfiyBottom">
                    <label htmlFor="modifyPass" className="blind"></label>
                    <input
                      type="password"
                      name="modifyPass"
                      id="modifyPass"
                      placeholder="비밀번호를 입력하세요."
                      onChange={(e) => {
                        setModifyPass(e.currentTarget.value);
                      }}
                    />
                    <div className="modifyForm__btn">
                      <button
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          setEditIndex(null);
                          SubmitHandler(e, index);
                        }}
                      >
                        수정
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setEditIndex(null);
                        }}
                      >
                        취소
                      </button>
                    </div>
                  </div>
                </form>
              </li>
            );
          } else if (deleteIndex === index) {
            return (
              <li className="reple" key={index}>
                <p className="cont">{reple.content}</p>
                <form className="modifyForm">
                  <div className="modfiyBottom">
                    <label htmlFor="modifyPass" className="blind"></label>
                    <input
                      type="password"
                      name="modifyPass"
                      id="modifyPass"
                      placeholder="비밀번호를 입력하세요."
                      onChange={(e) => {
                        setDeletePass(e.currentTarget.value);
                      }}
                    />
                    <div className="modifyForm__btn">
                      <button
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          setDeleteIndex(null);
                          DeleteHandler(e, index);
                        }}
                      >
                        삭제
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setDeleteIndex(null);
                        }}
                      >
                        취소
                      </button>
                    </div>
                  </div>
                </form>
              </li>
            );
          } else {
            return (
              <li className="reple" key={index}>
                <p className="cont">{reple.content}</p>
                <div className="author">
                  {reple.author}{' '}
                  <span className="date">{SetTime(reple.createdAt, reple.updatedAt)}</span>
                  <span
                    className="edit"
                    onClick={() => {
                      setModalFlag(true);
                      setModalIndex(index);
                    }}
                  >
                    · · ·
                  </span>
                  {modalIndex === index && (
                    <>
                      {modalFlag && (
                        <div className="modal" ref={ref}>
                          <p
                            onClick={() => {
                              setModalFlag(false);
                              setDeleteIndex(index);
                            }}
                          >
                            삭제
                          </p>

                          <p
                            onClick={() => {
                              setModalFlag(false);
                              setEditIndex(index);
                              setModifyCont(reple.content);
                            }}
                          >
                            수정
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default CommentList;
