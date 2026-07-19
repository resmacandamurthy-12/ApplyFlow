# Development Log

---

## Sprint 1 - Day 1 (13 July 2026)

### Completed

- Installed Node.js
- Installed Git
- Installed PostgreSQL and pgAdmin
- Created GitHub repository (ApplyFlow)
- Cloned repository to local machine
- Opened project in VS Code

### Problems Faced

- PostgreSQL `psql` was not recognized.
- Initial Git clone failed due to an incorrect repository URL.

### Learned

- How to clone a GitHub repository.
- Difference between a local repository and a remote repository.
- Basic development environment setup.

### Next Goal

- Initialize React client.
- Initialize Express server.

---

## Sprint 1 - Day 2 (14 July 2026)

### Completed

- Created React project using Vite
- Understood the React project structure
- Ran the development server using `npm run dev`
- Learned about `localhost` and Vite
- Explored `App.jsx` and `main.jsx`
- Built a simple ApplyFlow landing page
- Configured Prettier as the default formatter
- Enabled Format on Save

### Problems Faced

- Confused about the purpose of React and Vite initially.
- Needed clarification on how HMR works.

### Learned

- What React is and why it is used.
- What Vite is and how it simplifies React development.
- Difference between React and Vite.
- Meaning of HMR (Hot Module Replacement).
- Basic JSX structure.
- How imports work in React (CSS, images, and JavaScript).
- Difference between `App.jsx` and `main.jsx`.
- Basic React development workflow.

### Next Goal

- Clean the Vite starter project.
- Learn React components.
- Create the first reusable component (`Hero.jsx`).
- Start writing custom CSS for ApplyFlow.

---

## Sprint 1 - Day 3 (15 July 2026)

### Completed

- Created the first reusable React component (`Hero`).
- Organized component-specific styling using `Hero.css`.
- Learned and implemented React Props.
- Added event handling using `onClick`.
- Learned and implemented `useState`.
- Built a simple counter using state.
- Implemented conditional rendering for the button text.
- Practiced React debugging by fixing a missing CSS import.

### Problems Faced

- Forgot to import `Hero.css`, causing styles not to apply.
- Incorrectly imported `useState` (`import useState from "react"` instead of `import { useState } from "react"`).
- Initially forgot that React state resets after a browser refresh.

### Learned

- Components are reusable building blocks of a React application.
- Props allow a parent component to pass data to a child component.
- `useState` stores data that can change during the application's runtime.
- Updating state automatically re-renders the UI.
- `onClick` connects user interactions to JavaScript functions.
- Conditional rendering allows the UI to display different content based on state.
- A React component can manage multiple independent state variables.
- Component-specific CSS keeps the project organized and maintainable.

### Next Goal

- Complete the remaining React essentials.
- Learn React Router.
- Build the Login page UI.
- Learn Forms and Controlled Components.
- Finish React frontend setup.

---

# Sprint 1 - Day 4 (16 July 2026)

## ✅ Completed

- Installed React Router (`react-router-dom`).
- Configured `BrowserRouter` in `main.jsx`.
- Implemented routing using `Routes` and `Route`.
- Created the Login page component.
- Implemented navigation from the Hero page to the Login page using `useNavigate()`.
- Designed and styled a professional Landing page.
- Designed and styled a professional Login page.
- Established a consistent color palette and UI theme for ApplyFlow.

## ⚠️ Problems Faced

- Misspelled `BrowserRouter` as `BrouserRouter`, causing the application to display a blank screen.
- Initially found React Router concepts (`BrowserRouter`, `Routes`, and `Route`) confusing.

## 📚 Learned

- What React Router is and why it is used.
- Purpose of `BrowserRouter`, `Routes`, and `Route`.
- How client-side routing works in React.
- How `useNavigate()` enables programmatic navigation.
- Importance of organizing React applications using separate `components` and `pages` folders.
- Building consistent UI using reusable styling and a shared color palette.

## 🎯 Next Goal

- Learn Forms and Controlled Components.
- Implement `useState` with form inputs.
- Learn `onChange` and `preventDefault()`.
- Complete the React frontend setup.
- Begin Express.js backend setup.

---

## Sprint 1 - Day 5 (18 July 2026)

### Completed

- Created the `server` folder for the backend.
- Initialized the Node.js project using `npm init`.
- Configured the project to use ES Modules.
- Installed Express.
- Created the `server.js` entry file.
- Imported Express into the project.
- Created the Express application using `const app = express()`.
- Started the backend server using `app.listen()`.
- Learned how ports work and ran the server on port `5000`.
- Created the first Express route using `app.get()`.
- Sent the first response using `res.send()`.
- Successfully tested the backend by accessing `http://localhost:5000`.

### Problems Faced

- Decided between CommonJS and ES Modules before choosing ES Modules.
- Initially confused about the purpose of `res.render()` and when it should be used.
- Needed clarification on the roles of `req` and `res`.

### Learned

- Express is a backend framework for Node.js.
- `express()` creates an Express application instance.
- `app` is the Express application object used to configure the backend.
- `app.listen()` starts the server and listens for incoming requests.
- A port is a communication endpoint through which applications exchange data.
- `app.get()` creates a route that handles GET requests.
- `req` represents the incoming request from the client.
- `res` is used to send a response back to the client.
- `res.send()` sends plain text or HTML to the client.
- Browsers send a GET request when a URL is opened.

### Next Goal

- Connect React frontend with the Express backend.
- Learn `useEffect()` and `fetch()`.
- Configure CORS for frontend-backend communication.
- Display backend data on the Hero page.
- Understand `res.json()` and JSON responses.
