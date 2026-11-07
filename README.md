# MyTodoList

A simple todo list web app built with React and Bootstrap, with todos saved in the browser's localStorage.

Built as a practice project while learning React.

**Live demo:** https://todolist-qbdw.onrender.com/

![Todo list screenshot](screenshots/todo-list.png)

## Features

- Add a todo with a title and an optional description (an inline message asks for a title if it is missing).
- Tick a todo's checkbox to mark it done (struck through); tick again to undo.
- A "x of y done" counter and a "Clear completed" button.
- Delete individual todos.
- Todos persist across page reloads via `localStorage`.
- Home and About pages with React Router (hash-based URLs such as `#/about`, so they work on static hosts like GitHub Pages).

## Tech stack

- React 18 (Create React App / `react-scripts`)
- React Router v6
- Bootstrap 5 (loaded from CDN in `public/index.html`)

## Getting started

Prerequisites: Node.js 16+ and npm.

```bash
git clone https://github.com/AkshayTripathiAI/MyTodoList.git
cd MyTodoList
npm install
npm start
```

Then open http://localhost:3000.

Other scripts: `npm run build` (production build into `build/`; `"homepage": "."` makes asset paths relative so the build works from any sub-path), `npm test` (Jest + React Testing Library tests in `src/App.test.js`).

## Project structure

```
src/
├── App.js              # Todo state, localStorage sync, routes
├── App.test.js         # Add / complete / delete tests
├── index.js            # Entry point
└── MyComponents/
    ├── Header.js       # Navbar
    ├── AddTodo.js      # Add-todo form
    ├── Todos.js        # Todo list
    ├── TodoItem.js     # Single todo with checkbox and Delete button
    ├── About.js        # About page
    └── Footer.js
```

## License

[MIT](LICENSE)
