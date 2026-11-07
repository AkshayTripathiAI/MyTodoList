import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ({ todo, onDelete, onToggle }) => {
  const id = `todo-${todo.sno}`;
  return (
    <li className={`list-group-item todo-item${todo.done ? " done" : ""}`}>
      <input
        className="form-check-input"
        type="checkbox"
        id={id}
        checked={Boolean(todo.done)}
        onChange={() => onToggle(todo)}
        aria-label={`Mark "${todo.title}" as ${todo.done ? "not done" : "done"}`}
      />
      <label className="todo-text" htmlFor={id}>
        <h5>{todo.title}</h5>
        {todo.desc && <p>{todo.desc}</p>}
      </label>
      <button
        className="btn btn-sm btn-outline-danger"
        onClick={() => onDelete(todo)}
        aria-label={`Delete "${todo.title}"`}
      >
        Delete
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    sno: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    done: PropTypes.bool,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};
