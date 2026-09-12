import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Students from "./pages/Students.jsx";
import AddStudent from "./pages/AddStudent.jsx";
import StudentDetails from "./pages/StudentDetails.jsx";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2>Student Management Portal</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/students">Students</Link>
          <Link to="/add-student">Add Student</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/students/:id" element={<StudentDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;