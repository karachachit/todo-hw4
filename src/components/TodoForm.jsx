import React, { useState } from "react";
import Todoitem from "./Todoitem";

const TodoForm = () => {
  const [text, setText] = useState('');
  const [todo, setTodo] = useState([]);

  const inputChangeHandler = (e) => {
    setText(e.target.value);
  };

  const addTodoHandler = () => {
    if (text.trim() !== "") {
      setTodo([...todo, text]);
      setText("");
    }
  };
  return (
    <div className="box">
      <h2 className="h2">TODO-LIST</h2>
      <div className="box-input">
        <input
          type="text"
          placeholder="Enter new todo..."
          onChange={inputChangeHandler}
          value={text}
        />
        <button onClick={addTodoHandler}>ADD</button>
      </div>
      <Todoitem todos={todo} setTodo={setTodo} />
    </div>
  );
};

export default TodoForm;
