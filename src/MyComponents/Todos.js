import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export const Todos = ({ todos, onDelete, onToggle, onClearCompleted }) => {
  const doneCount = todos.filter((t) => t.done).length;

  return (
    <div className="container todo-card mb-5">
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
        <h3 className="h5 mb-0">Todos List</h3>
        {todos.length > 0 && (
          <div className="d-flex align-items-center gap-2">
            <span className="badge text-bg-secondary">
              {doneCount} of {todos.length} done
            </span>
            {doneCount > 0 && (
              <button className="btn btn-sm btn-outline-secondary" onClick={onClearCompleted}>
                Clear completed
              </button>
            )}
          </div>
        )}
      </div>
      {todos.length === 0 ? (
        <p className="text-muted">No todos yet. Add one above to get started.</p>
      ) : (
        <ul className="list-group shadow-sm">
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.sno} onDelete={onDelete} onToggle={onToggle} />
          ))}
        </ul>
      )}
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
};
