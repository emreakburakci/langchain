import React from 'react';

const TodoUICode = () => {
  return (
    <div>
      <h1>Todo UI</h1>
      <ul>
        {todoItems.map((item, index) => (<li key={index}>{item.name}</li>))}
      </ul>
    </div>
  );

const TodoNotificationCode = () => {
  return (
    <div>
      <h1>Todo Notification</h1>
      <p>Alert users when a task is due or completed!</p>
    </div>
  );

export { TodoUICode, TodoNotificationCode };
