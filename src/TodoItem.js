import './assets/TodoItem.css';
import React from 'react';

const TodoItem = ({id, name, complete, completeItem, deleteItem, lightTheme}) => {
  return (
    <li className={`TodoItem ${!lightTheme ? 'dark' : ''}`}>
      <button
        type="button"
        className={`cross-item ${complete && 'active'}`}
        onClick={() => completeItem(id) }
      >
        {complete && <i className="fas fa-check"></i>}
      </button>
      <p className={`content ${complete && 'complete'}`}>{name}</p>

      <button className="remove-item" onClick={() => deleteItem(id)}>
        <i className="fas fa-trash-alt fa-2x"></i>
      </button>
    </li>
  );
};

export default TodoItem;
