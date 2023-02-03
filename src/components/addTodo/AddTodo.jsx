import React, { useState } from 'react';

export default function AddTodo({ setTodo }) {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !comment) return;
    setTodo({ type: 'add', title, comment });
  };

  return (
    <form className='addTodo' onSubmit={handleSubmit}>
      <div>
        제목:
        <input
          className='title'
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        내용:
        <input
          className='comment'
          type='text'
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
      </div>
      <button className='add'>추가하기</button>
    </form>
  );
}
