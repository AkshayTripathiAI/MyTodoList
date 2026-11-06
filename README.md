# MyTodoList

A simple todo list web app built with React and Bootstrap, with todos saved in the browser's localStorage.

Built as a practice project while learning React.

**Live demo:** https://todolist-qbdw.onrender.com/

![Todo list screenshot](screenshots/todo-list.png)

## Features

- Add a todo with a title and description (both required).
- View all todos, with an empty-state message when there are none.
- Delete individual todos.
- Todos persist across page reloads via `localStorage`.
- Client-side routing between Home and a placeholder About page (React Router).

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

Other scripts: `npm run build` (production build into `build/`), `npm test` (Jest test runner).

## Project structure

```
src/
├── App.js              # Todo state, localStorage sync, routes
├── index.js            # Entry point
└── MyComponents/
    ├── Header.js       # Navbar
    ├── AddTodo.js      # Add-todo form
    ├── Todos.js        # Todo list
    ├── TodoItem.js     # Single todo with Delete button
    ├── About.js        # About page (placeholder text)
    └── Footer.js
```

## License

[MIT](LICENSE)
