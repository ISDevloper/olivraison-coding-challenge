import React from "react";

const TodoItem = React.memo((props) => (
  <li className={props.isComplete ? "completed" : null}>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={props.isComplete}
        onChange={() => props.handleToggle(props.id)}
      />
      <label>{props.name}</label>
      <button
        className="destroy"
        onClick={() => props.handleDelete(props.id)}
      />
    </div>
  </li>
));

// eslint-disable-next-line import/no-anonymous-default-export
export default React.memo((props) => (
  <ul className="todo-list">
    {props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        {...todo}
        handleDelete={props.handleDelete}
        handleToggle={props.handleToggle}
      />
    ))}
  </ul>
));
