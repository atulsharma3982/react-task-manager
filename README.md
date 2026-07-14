# React Task Manager

A simple task management application built with React and Vite. Tasks are stored in the browser using Local Storage, allowing them to persist even after the page is refreshed.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- View completed or pending tasks using a filter
- Automatically save tasks to Local Storage
- Prevent empty task creation
- Keyboard support (press **Enter** to save/update)
- Responsive user interface

## Tech Stack

- React
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- React Icons

## Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/react-task-manager.git
```

Navigate to the project directory:

```bash
cd react-task-manager
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Project Structure

```
src/
├── components/
│   └── Navbar.jsx
├── App.jsx
├── App.css
└── main.jsx
```

## How It Works

Each task is stored as an object with the following properties:

```javascript
{
  id: "unique-id",
  data: "Task description",
  isComplete: false
}
```

The application uses:

- **useState** to manage the current input value, task list, filter state, and editing state.
- **useEffect** to load tasks from Local Storage when the application starts and automatically save changes.
- **useRef** to focus the input field when editing an existing task.

## Learning Objectives

This project demonstrates the following React concepts:

- Functional Components
- State Management with `useState`
- Side Effects with `useEffect`
- Refs using `useRef`
- CRUD Operations
- Conditional Rendering
- List Rendering
- Local Storage Persistence
- Event Handling

## License

This project is licensed under the MIT License.