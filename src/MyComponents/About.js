import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const About = ({ notFound = false }) => {
  return (
    <div className="container todo-card my-4">
      {notFound && (
        <div className="alert alert-warning">
          That page does not exist. <Link to="/">Back to your todos</Link>.
        </div>
      )}
      <h2 className="h4">About MyTodoList</h2>
      <p>
        MyTodoList is a small, no-sign-up todo app. Type a title (and an optional
        description), press <strong>Add Todo</strong>, and it appears in your list.
      </p>
      <h3 className="h6 mt-4">What you can do</h3>
      <ul>
        <li>Add todos with a title and an optional description.</li>
        <li>Tick the checkbox to mark a todo as done; tick it again to undo.</li>
        <li>Delete a single todo, or remove every finished one with <em>Clear completed</em>.</li>
        <li>See at a glance how many todos are done.</li>
      </ul>
      <h3 className="h6 mt-4">Where your data lives</h3>
      <p>
        Todos are stored in your browser&apos;s <code>localStorage</code>. Nothing is
        sent to a server, so your list stays on this device and in this browser.
        Clearing site data will remove it.
      </p>
      <h3 className="h6 mt-4">How it is built</h3>
      <p>
        The app is built with React 18 (Create React App), React Router for the
        Home and About pages, and Bootstrap 5 for styling. It was made as a
        practice project while learning React. The source code is on{" "}
        <a href="https://github.com/AkshayTripathiAI/MyTodoList" target="_blank" rel="noreferrer">
          GitHub
        </a>
        .
      </p>
      <Link to="/" className="btn btn-success mt-2">Go to my todos</Link>
    </div>
  );
};

About.propTypes = {
  notFound: PropTypes.bool,
};

export default About;
