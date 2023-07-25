import React, { useState } from "react";

const Todoitem = ({ todos, setTodo }) => {
  const [completed, setCompleted] = useState(false);

    const handleCheckboxChange = () => {
      setCompleted((prevCompleted) => !prevCompleted);
    };


  const deleteHandler = (index) => {
    const removetodo = todos.filter((_, i) => i !== index);
    setTodo(removetodo);
  };

  return (
    <div className="box-mix">
      {todos.map((todo, index) => (
        <div key={index} className="child-li">
            <div>
            <li className={completed ? "completed" : ""}>{todo}</li>
            </div>
          <div className="box-ui">
          <input
            className="input-checkbox"
            type="checkbox"
            id="checkbox"
            checked={completed}
            onChange={() => handleCheckboxChange(index)}
          />
          <button className="btn" onClick={() => deleteHandler(index)}>
            delete
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todoitem;
