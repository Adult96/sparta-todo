import React from 'react';

export default function TodoItem({ item, setTodo }) {
  return (
    <>
      <p className='itemTitle'>{item.title}</p>
      <p className='itemComment'>{item.comment}</p>
      <div className='itemBtn'>
        <button
          className='deleteBtn'
          onClick={() => setTodo({ type: 'delete', id: item.id })}
        >
          삭제하기
        </button>
        <button
          className='completeBtn'
          onClick={() => setTodo({ type: 'complete', item })}
        >
          {item.isDone ? '취소' : '완료'}
        </button>
      </div>
    </>
  );
}
