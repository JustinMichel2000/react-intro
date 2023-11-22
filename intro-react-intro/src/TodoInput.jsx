
import React, { useState } from 'react';

const TodoInput = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    onAddTodo(newTodo);
    setNewTodo('');
  };

  return (
    <div>
      <input type="text" value={newTodo} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
