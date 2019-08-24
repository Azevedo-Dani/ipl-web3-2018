import React from 'react';
import TodoAppComponent from './todo_app_component'
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

  render() {
    return (
        <TodoAppComponent items= { this.state.items}
        handleSubmit = {this.handleSubmit} 
        handleChange = {this.handleChange} 
        text = {this.state.text}/>
    );
  }
}

export default TodoApp;
