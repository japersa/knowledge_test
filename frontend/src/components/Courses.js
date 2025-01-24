import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/courses').then((response) => {
      setCourses(response.data);
    });
  }, []);

  const deleteCourse = (id) => {
    axios.delete(`http://localhost:5000/courses/${id}`).then(() => {
      setCourses(courses.filter((course) => course.id !== id));
    });
  };

  return (
    <div>
      <Link to="/add" className="btn btn-primary mb-3">
        Agregar Curso
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Duración (semanas)</th>
            <th>Precio</th>
            <th>Inicio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{course.duration}</td>
              <td>${course.price}</td>
              <td>{new Date(course.startDate).toLocaleDateString()}</td>
              <td>
                <Link to={`/edit/${course.id}`} className="btn btn-warning btn-sm me-2">
                  Editar
                </Link>
                <button
                  onClick={() => deleteCourse(course.id)}
                  className="btn btn-danger btn-sm"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;
