import './assets/App.css';
import moon from './assets/images/icon-moon.svg';

import React, {useState} from 'react';
import NewItem from './NewItem';
import TodoItem from './TodoItem';
import ControlPanel from './ControlPanel';

function App() {
  const [todoList, setTodoList] = useState([
    {id: Math.random() * 1000, name: 'item1', complete: false},
    {id: Math.random() * 1000, name: 'item2', complete: false}
  ]);

  const [listType, setListType] = useState('all');


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

  function handleListChange(listName) {
    setListType(listName)
  }

  const renderedList = (type) => {
    switch (type) {
      case 'all':
        return (todoList.map(item =>
          <TodoItem key={item.id} {...item} completeItem={completeItem}/>
        ));

        case 'active':
          const activeItems = todoList.filter(item => !item.complete)
          return (activeItems.map(item =>
            <TodoItem key={item.id} {...item} completeItem={completeItem}/>
          ));

        case 'complete':
          const completedItems = todoList.filter(item => item.complete)
          return (completedItems.map(item =>
            <TodoItem key={item.id} {...item} completeItem={completeItem}/>
          ));
      default:
        break;
    }
  }


  return (
    <div className="App">
      <div className="banner"></div>
      <main className="main-container">
        <h1 className="title">TODO</h1>
        <span className="icon"><img src={moon} alt="moon"/></span>

        <NewItem handleNewItem={handleNewItem} />

        <div className="list-container">
          <ul className="TodoList">
            {renderedList(listType)}
          </ul>

          <ControlPanel
            itemsLeft={todoList.filter(item => item.complete === false).length}
            listType={listType}
            handleListChange={handleListChange}
          />
        </div>

      </main>
    </div>
  );
}

export default App;
