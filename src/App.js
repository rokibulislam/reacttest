import React, { useState } from 'react'
import TodoList from './components/Todos/TodoList'
import ButtonList from './components/Button/ButtonList'
import './App.css';

const App = () => {

  const [ todos, setTodos ] = useState([
      {
          id: 1,
          text: 'Todo One',
          done: true
      },

      {
          id: 2,
          text: 'Todo Two',
          done: false
      },

      {
        id: 3,
        text: 'Todo Three',
        done: true
      },

      {
        id: 4,
        text: 'Todo Four',
        done: false
      },

      {
        id: 5,
        text: 'Todo Five',
        done: true
      }
  ]);

  const handleClick = todo => {

      const mapTodos = todos.map(item => {
          if (item.id === todo.id) {
            return {
              ...item,
              done: true
            };
          }
          return item;
      });

      setTodos(mapTodos);
  }

  return (
    <div className="App">
        <ButtonList/>
        <TodoList items={todos} onItemClick={handleClick} />
    </div>
  );
}

export default App;
