package com.cesde.backend.repository;

import com.cesde.backend.entity.Curso;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

public interface CursoRepository extends JpaRepository<Curso, Long> {

    List<Curso> findByPrecioBetween(BigDecimal precioMin, BigDecimal precioMax);

    List<Curso> findByDuracion(int duracion);

    List<Curso> findByFechaInicioBetween(LocalDateTime inicio, LocalDateTime fin);

    List<Curso> findByNombreContainingIgnoreCase(String nombre);
}
