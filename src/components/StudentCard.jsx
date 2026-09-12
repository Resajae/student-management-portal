import { Link } from "react-router-dom";

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Phone:</strong> {student.phone}</p>
      <p><strong>City:</strong> {student.address.city}</p>
      <Link to={`/students/${student.id}`} className="button">
        View Details
      </Link>
    </div>
  );
}

export default StudentCard;