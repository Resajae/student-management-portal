import { useEffect, useState } from "react";
import axios from "axios";
import StudentCard from "../components/StudentCard.jsx";

function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const filteredStudents = students
    .filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  return (
    <div className="container">
      <h1>Students</h1>

      <div className="controls-row">
        <input
          className="search-box"
          type="text"
          placeholder="Search student..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          className="sort-select"
          value={sortOrder}
          onChange={(event) => setSortOrder(event.target.value)}
        >
          <option value="asc">Name (A-Z)</option>
          <option value="desc">Name (Z-A)</option>
        </select>
      </div>

      {loading ? (
        <p>Loading students...</p>
      ) : (
        <div className="student-grid">
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )}

      {!loading && filteredStudents.length === 0 && (
        <p>No students found.</p>
      )}
    </div>
  );
}

export default Students;