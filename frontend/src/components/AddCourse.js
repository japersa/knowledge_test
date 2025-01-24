import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddCourse = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    duration: '',
    price: '',
    startDate: '',
    teacherId: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/courses', formData).then(() => {
      navigate('/');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nombre del Curso</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Descripción</label>
        <input
          type="text"
          className="form-control"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Duración (semanas)</label>
        <input
          type="number"
          className="form-control"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Precio</label>
        <input
          type="number"
          step="0.01"
          className="form-control"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Fecha de Inicio</label>
        <input
          type="datetime-local"
          className="form-control"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">ID del Docente</label>
        <input
          type="number"
          className="form-control"
          name="teacherId"
          value={formData.teacherId}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-success">
        Guardar Curso
      </button>
    </form>
  );
};

export default AddCourse;
