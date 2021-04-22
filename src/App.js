import './assets/App.css';
import moon from './assets/images/icon-moon.svg';

import React, {useState} from 'react';
import NewItem from './NewItem';
import TodoItem from './TodoItem';

function App() {
  const [todoList, setTodoList] = useState(['item1', 'item2', 'item3']);

  function handleNewItem(item) {
    setTodoList(todoList => [...todoList, item]);
  }


  return (
    <div className="App">
      <div className="banner"></div>
      <main className="main-container">
        <h1 className="title">TODO</h1>
        <span className="icon"><img src={moon} alt="moon"/></span>

        <NewItem handleNewItem={handleNewItem} />

        <ul className="TodoList">
          {
            todoList.map(item => (
              <TodoItem key={Math.random() * 1000} item={item}/>
            ))
          }
        </ul>
      </main>
    </div>
  );
}

export default App;
