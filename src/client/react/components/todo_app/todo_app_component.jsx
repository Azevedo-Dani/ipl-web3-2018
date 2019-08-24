import React from 'react';
import TodoList from './todo_list';
import TodoForm from './todo_form';
const TodoAppCompenent = ({
  items, handleSubmit, handleChange, text
}) => {
  return (
    <div>
      <h3>TODO</h3>
      <TodoList items={items} />
      <TodoForm items= {items}
        handleSubmit = {handleSubmit} 
        handleChange ={handleChange} 
        text = {text}/>
    </div>
  );
}
/*class TodoAppCompenent extends React.Component {
  render() {
    
  }
}*/

export default TodoAppCompenent;
