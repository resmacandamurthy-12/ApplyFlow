import "./App.css";
import Hero from "./components/Hero";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Hero
            title="ApplyFlow"
            description="Track every internship. Manage every opportunity."
            buttonLabel="Get Started"
          />
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
