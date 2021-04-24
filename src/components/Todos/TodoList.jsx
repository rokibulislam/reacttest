import React from 'react';
import "./TodoList.scss";
import Button from "../Button/Button";

const TodoList = ({ items, onItemClick }) => {
  
    const handleClick = (e, todo) => {
        e.preventDefault();
        if (!todo.done) {
            onItemClick(todo);
        }
    };

    return ( 
        <>
            <table className="todo-list">
                <caption>My Todos</caption>
                <tbody>
                {items.length > 0 ? items.map( todo => (
                    <tr className={ 'todo-item' + (!todo.done ? ' going' : ' done') } onClick={e => handleClick(e, todo)} key={todo.id}>
                        <td className="todo-text">{ todo.text }</td>
                        <td className={'todo-' + (!todo.done ? 'done' : 'going')}> 
                        { todo.done ? 'Done' : 'going' }  </td>
                    </tr>
                )) : <tr className="todo-not-found"> <td> No todo found </td> </tr>}
                </tbody>
            </table>
        </>
    );
}
 
export default TodoList;