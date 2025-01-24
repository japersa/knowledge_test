import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Courses from './components/Courses';
import AddCourse from './components/AddCourse';
import EditCourse from './components/EditCourse';

const App = () => {
  return (
    <Router>
      <div className="container">
        <h1 className="text-center mt-4">Gestión de Cursos</h1>
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/add" element={<AddCourse />} />
          <Route path="/edit/:id" element={<EditCourse />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
