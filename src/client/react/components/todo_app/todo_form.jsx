import React from 'react';
const TodoForm = ({
    handleSubmit, handleChange, text, items
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">What needs to be done?</label>
            <input id="new-todo" onChange={handleChange} value={text} />
            <button>Add #{items.length + 1}</button>
        </form>
    )
}

export default TodoForm