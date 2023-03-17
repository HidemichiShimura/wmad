import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import "../styles/App.css";

function App() {
  return (
    <>
      <Router>
        <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>
    </>
  );
}

function Home() {
  return <div style={{ color: "orangered" }}>Home</div>;
}

function About() {
  return <div style={{ color: "aqua" }}>About</div>;
}

function Project() {
  return <div style={{ color: "limegreen" }}>Project</div>;
}

export default App;
