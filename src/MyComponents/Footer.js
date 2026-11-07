import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <p className="text-center mb-0">
        MyTodoList &copy; {new Date().getFullYear()} &middot; Your todos are saved in this browser.
      </p>
    </footer>
  );
};
