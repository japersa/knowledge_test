package com.cesde.backend.controller;

import com.cesde.backend.entity.Curso;
import com.cesde.backend.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/cursos")
public class CursoController {

    @Autowired
    private CursoRepository cursoRepository;

    @GetMapping
    public List<Curso> listarCursos() {
        return cursoRepository.findAll();
    }

    @PostMapping
    public Curso agregarCurso(@RequestBody Curso curso) {
        return cursoRepository.save(curso);
    }

    @GetMapping("/filtro/precio")
    public List<Curso> filtrarPorPrecio(@RequestParam BigDecimal precioMin, @RequestParam BigDecimal precioMax) {
        return cursoRepository.findByPrecioBetween(precioMin, precioMax);
    }

    @GetMapping("/filtro/duracion")
    public List<Curso> filtrarPorDuracion(@RequestParam int duracion) {
        return cursoRepository.findByDuracion(duracion);
    }

    @GetMapping("/filtro/fecha")
    public List<Curso> filtrarPorRangoDeFechas(@RequestParam String inicio, @RequestParam String fin) {
        LocalDateTime fechaInicio = LocalDateTime.parse(inicio);
        LocalDateTime fechaFin = LocalDateTime.parse(fin);
        return cursoRepository.findByFechaInicioBetween(fechaInicio, fechaFin);
    }

    @GetMapping("/filtro/nombre")
    public List<Curso> buscarPorNombre(@RequestParam String nombre) {
        return cursoRepository.findByNombreContainingIgnoreCase(nombre);
    }
}
