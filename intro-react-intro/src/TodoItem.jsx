
import React from 'react';

const TodoItem = ({ todo, onToggleTodo }) => {
  const handleToggle = () => {
    onToggleTodo(todo.id);
  };

  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span>{todo.text}</span>
    </div>
  );
};

export default TodoItem;
