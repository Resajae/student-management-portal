import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      `Student Added!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`
    );

    navigate("/students");
  };

  return (
    <div className="container">
      <h1>Add Student</h1>

      <form onSubmit={handleSubmit} className="student-form">
        <label>Student Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter student name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          required
        />

        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          required
        />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;