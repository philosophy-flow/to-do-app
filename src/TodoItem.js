import './assets/TodoItem.css';
import React, {useState} from 'react';

const TodoItem = ({item}) => {
  const [complete, setComplete] = useState(false);

  return (
    <li className="TodoItem">
      <button
        type="button"
        className={`cross-item ${complete && 'active'}`}
        onClick={() => setComplete(!complete)}
      >
        {complete && <i class="fas fa-check"></i>}
      </button>
      <p className={`content ${complete && 'complete'}`}>{item}</p>
    </li>
  );
};

export default TodoItem;
