import './assets/NewItem.css';
import React, {useState} from 'react';

const NewItem = ({handleNewItem}) => {
  const [inputVal, setInputVal] = useState('');

  function handleClearInput() {
    setInputVal('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputVal) {
      handleNewItem(inputVal);
      setInputVal('');
    }
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <button
        type="button"
        className={`clear-input ${inputVal && 'active'}`}
        onClick={handleClearInput}
      >
        {inputVal && <i className="x-icon fas fa-times"></i>}
      </button>
      <input
        className="new-todo"
        placeholder="Create a new todo..."
        onChange={e => setInputVal(e.target.value)}
        value={inputVal}
      />
    </form>
  );
};

export default NewItem;
