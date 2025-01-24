# Cesde Courses API

API para gestionar cursos y docentes de Cesde. Incluye funcionalidades de creación, listado y filtros avanzados.

## **Requisitos**
- **Java** (JDK 17+)
- **Maven** (3.6.3+)
- **MySQL** (8.0+)

## **Configuración**
1. Crea la base de datos:
   ```sql
   CREATE DATABASE cesde_courses;
   ```
2. Configura la conexión en `src/main/resources/application.yml`:
   ```yaml
   spring:
     datasource:
       url: jdbc:mysql://localhost:3306/cesde_courses
       username: root
       password: yourpassword
   ```

3. Compila y ejecuta:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

## **Endpoints**

### **Cursos**
- **Listar cursos**: `GET /api/cursos`
- **Agregar curso**: `POST /api/cursos`
- **Filtrar por precio**: `GET /api/cursos/filtro/precio?precioMin=&precioMax=`
- **Filtrar por duración**: `GET /api/cursos/filtro/duracion?duracion=`
- **Filtrar por rango de fechas**: `GET /api/cursos/filtro/fecha?inicio=&fin=`
- **Buscar por nombre**: `GET /api/cursos/filtro/nombre?nombre=`

### **Docentes**
- **Agregar docente**: `POST /api/docentes`

