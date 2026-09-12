import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container home">
      <h1>Welcome to Student Management Portal</h1>
      <p>Manage, search, and view student information using React.</p>
      <Link className="button" to="/students">View Students</Link>
    </div>
  );
}

export default Home;