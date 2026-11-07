import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const cleanTitle = title.trim();
    if (!cleanTitle) {
      setError("Please give your todo a title.");
      return;
    }
    addTodo(cleanTitle, desc.trim());
    setTitle("");
    setDesc("");
    setError("");
  };

  return (
    <div className="container todo-card my-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="h5 card-title">Add a Todo</h3>
          <form onSubmit={submit} noValidate>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`form-control${error ? " is-invalid" : ""}`}
                id="title"
                placeholder="e.g. Buy groceries"
                aria-describedby="title-error"
              />
              {error && <div id="title-error" className="invalid-feedback">{error}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Description <span className="text-muted">(optional)</span>
              </label>
              <input
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="form-control"
                id="desc"
                placeholder="e.g. Milk, eggs, bread"
              />
            </div>
            <button type="submit" className="btn btn-success">Add Todo</button>
          </form>
        </div>
      </div>
    </div>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
