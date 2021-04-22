import './assets/App.css';
import moon from './assets/images/icon-moon.svg';

import React, {useState} from 'react';
import NewItem from './NewItem';
import TodoItem from './TodoItem';

function App() {
  const [todoList, setTodoList] = useState([
    {id: Math.random() * 1000, name: 'item1', complete: false},
    {id: Math.random() * 1000, name: 'item2', complete: false}
  ]);


  function handleNewItem(item) {
    setTodoList(todoList => [...todoList, {id: Math.random() * 1000, name: item, complete: false}]);
  }

  function completeItem(id) {

    setTodoList(todoList =>
      todoList.map(item => {
        if (item.id === id) {
          const newStatus = !item.complete;
          return {...item, complete: newStatus};
        }
        return item;
      })
    );
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
              <TodoItem key={item.id} {...item} completeItem={completeItem}/>
            ))
          }
        </ul>
      </main>
    </div>
  );
}

export default App;
