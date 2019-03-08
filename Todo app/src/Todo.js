import React from 'react';

const Todo = ({ todos }) => {
  const todoList = todos.length ? todos.map (todo => {
    return(
       <div className='collection-item' key= {todo.id}>
       <span>{todo.item}</span>
       </div>
         )
  }) : (
      <p className="center"> Yay! I dont have anything to do! </p>
    )
    return (
      <div className='todos collection'>
      {todoList}
      </div>

    )
}

export default Todo;
