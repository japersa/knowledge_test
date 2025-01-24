package com.cesde.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Docente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    @Column(unique = true, nullable = false)
    private String documento;

    @Column(unique = true, nullable = false)
    private String correo;
}
