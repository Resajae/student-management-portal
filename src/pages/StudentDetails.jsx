import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function StudentDetails() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setStudent(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="container"><p>Loading student...</p></div>;
  }

  if (!student) {
    return <div className="container"><h2>Student not found.</h2></div>;
  }

  return (
    <div className="container">
      <h1>Student Details</h1>

      <div className="details-card">
        <h2>{student.name}</h2>
        <p><strong>Username:</strong> {student.username}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
        <p><strong>Website:</strong> {student.website}</p>

        <h3>Address</h3>
        <p>{student.address.street}, {student.address.suite}</p>
        <p>{student.address.city}, {student.address.zipcode}</p>

        <h3>Company</h3>
        <p><strong>Name:</strong> {student.company.name}</p>
        <p><strong>Business:</strong> {student.company.catchPhrase}</p>

        <Link to="/students" className="button">Back to Students</Link>
      </div>
    </div>
  );
}

export default StudentDetails;