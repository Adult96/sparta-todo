import React, { useState } from 'react';

export default function AddTodo() {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !comment) return;
  };

  const handleTitle = e => {
    setTitle(e.target.value);
  };

  const handleComment = e => {
    setComment(e.target.value);
  };

  return (
    <form className='addTodo' onSubmit={handleSubmit}>
      <div>
        제목:
        <input
          className='title'
          type='text'
          value={title}
          onChange={handleTitle}
        />
        내용:
        <input
          className='comment'
          type='text'
          value={comment}
          onChange={handleComment}
        />
      </div>
      <button className='add'>추가하기</button>
    </form>
  );
}
