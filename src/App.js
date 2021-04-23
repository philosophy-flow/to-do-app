import './assets/App.css';
import moon from './assets/images/icon-moon.svg';
import sun from './assets/images/icon-sun.svg';

import React, {useState, useEffect} from 'react';
import NewItem from './NewItem';
import TodoItem from './TodoItem';
import ControlPanel from './ControlPanel';

function App() {
  //handles color theme
  const [lightTheme, setLightTheme] = useState(true);

  // initial list pulled from localStorage or set to empty arr
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem('list')) || []
  );

  // listType controls what tasks are displayed (all, active, completed)
  const [listType, setListType] = useState('all');

  // updates localStorage every time the todo list is updated
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(todoList));
  }, [todoList]);



  // adds item object to todo list
  function handleNewItem(item) {
    setTodoList(todoList => [...todoList, {id: Math.random() * 1000, name: item, complete: false}]);
  }

  // handles when an item is marked as complete/incomplete
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

  // removes item from todo list
  function deleteItem(id) {
    setTodoList(todoList =>
      todoList.filter(item => item.id !== id));
  }

  // handles list change from control panel component
  function handleListChange(listName) {
    setListType(listName)
  }

  // removes all completed items from control panel component
  function clearAllCompleted() {
    setTodoList(todoList =>
      todoList.filter(item => !item.complete)
    );
  }


  // filters todo list depending on selected list type
  function renderedList (type) {
    switch (type) {
      case 'all':
        return (todoList.map(item =>
          <TodoItem key={item.id} {...item} completeItem={completeItem} deleteItem={deleteItem}/>
        ));

        case 'active':
          const activeItems = todoList.filter(item => !item.complete)
          return (activeItems.map(item =>
            <TodoItem key={item.id} {...item} completeItem={completeItem} deleteItem={deleteItem}/>
          ));

        case 'complete':
          const completedItems = todoList.filter(item => item.complete)
          return (completedItems.map(item =>
            <TodoItem key={item.id} {...item} completeItem={completeItem} deleteItem={deleteItem}/>
          ));
      default:
        break;
    }
  }



  return (
    <div className={`App ${!lightTheme && 'dark'}`}>
      <div className={`banner ${!lightTheme && 'dark'}`}></div>
      <main className="main-container">
        <h1 className="title">TODO</h1>
        <span className="icon">
          <button
            type="button"
            className="theme-btn"
            onClick={() => setLightTheme(!lightTheme)}>
            {
              lightTheme ?
                <img src={moon} alt="moon"/> : <img src={sun} alt="moon"/>
            }
          </button>
        </span>

        <NewItem handleNewItem={handleNewItem} lightTheme={lightTheme} />

        <div className="list-container">
          <ul className="TodoList">
            {renderedList(listType)}
          </ul>
          <ControlPanel
            itemsLeft={todoList.filter(item => item.complete === false).length}
            listType={listType}
            handleListChange={handleListChange}
            clearAllCompleted={clearAllCompleted}
            listVisibility={renderedList(listType).length > 0}
          />
        </div>

      </main>
    </div>
  );
}

export default App;
