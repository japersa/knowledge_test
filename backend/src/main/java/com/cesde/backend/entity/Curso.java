package com.cesde.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Data
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String descripcion;
    private Integer duracion;
    private BigDecimal precio;

    private LocalDateTime fechaInicio;

    @ManyToOne
    @JoinColumn(name = "docente_id")
    private Docente docente;
}
