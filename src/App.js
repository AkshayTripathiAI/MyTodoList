import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
// HashRouter keeps routes like #/about working on static hosts such as GitHub Pages,
// which cannot rewrite unknown paths to index.html.
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const STORAGE_KEY = "todos";

function loadTodos() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function App() {
  const [todos, setTodos] = useState(loadTodos);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, desc) => {
    setTodos((prev) => {
      const sno = prev.length === 0 ? 0 : Math.max(...prev.map((t) => t.sno)) + 1;
      return [...prev, { sno, title, desc, done: false }];
    });
  };

  const onDelete = (todo) => {
    setTodos((prev) => prev.filter((t) => t.sno !== todo.sno));
  };

  const onToggle = (todo) => {
    setTodos((prev) =>
      prev.map((t) => (t.sno === todo.sno ? { ...t, done: !t.done } : t))
    );
  };

  const onClearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.done));
  };

  return (
    <Router>
      <div className="app-shell">
        <Header title="My Todos List" />
        <main className="flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos
                    todos={todos}
                    onDelete={onDelete}
                    onToggle={onToggle}
                    onClearCompleted={onClearCompleted}
                  />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<About notFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
