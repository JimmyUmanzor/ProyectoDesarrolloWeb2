drop database Proyectodaw2g3;
create database Proyectodaw2g3;
use Proyectodaw2g3;

-- Tabla Usuarios
CREATE TABLE Usuarios (
    idUsuario NVARCHAR(20) NOT NULL PRIMARY KEY,
    Clave NVARCHAR(20) NOT NULL,
    tipoUsuario NVARCHAR(10) NOT NULL
);

-- Tabla Alumnos
CREATE TABLE Alumnos (
    idUsuario NVARCHAR(20) NOT NULL,
    idAlumno NVARCHAR(20) NOT NULL PRIMARY KEY,
    nombreAlumno NVARCHAR(50) NOT NULL,
    gradoAlumno NVARCHAR(20) NOT NULL,
    seccionAlumno NVARCHAR(10) NOT NULL,
    CONSTRAINT FK_Alumnos_Usuarios FOREIGN KEY (idUsuario) REFERENCES Usuarios(idUsuario)
);

-- Tabla Actividades
CREATE TABLE Actividades (
	id INTEGER primary KEY auto_increment,
    idUsuario NVARCHAR(20) NOT NULL,
    idAlumno NVARCHAR(20) NOT NULL,
    fechaActividad DATETIME NOT NULL,
    descripcion NVARCHAR(1000) NOT NULL,
    tipoActividad NVARCHAR(20) NOT NULL CHECK (tipoActividad IN ('Tareas', 'Deméritos', 'Anuncios', 'Actividad de Campo', 'Examen', 'Reposiciones', 'Méritos')),
    CONSTRAINT FK_Actividades_Usuarios FOREIGN KEY (idUsuario) REFERENCES Usuarios(idUsuario),
    CONSTRAINT FK_Actividades_Alumnos FOREIGN KEY (idAlumno) REFERENCES Alumnos(idAlumno)
);

-- Tabla Maestros
CREATE TABLE Maestros (
    idMaestro NVARCHAR(20) NOT NULL PRIMARY KEY,
    nombreMaestro NVARCHAR(50) NOT NULL,
    gradoMaestro NVARCHAR(20) NOT NULL
);


-- Data Prueba ingresada:
INSERT INTO Usuarios (idUsuario, Clave, tipoUsuario) VALUES
('U001', 'clave123', 'Admin'),
('U002', 'clave456', 'Maestro'),
('U003', 'clave789', 'Padre');


INSERT INTO Alumnos (idUsuario, idAlumno, nombreAlumno, gradoAlumno, seccionAlumno) VALUES
('U003', 'A001', 'Juan Pérez', '10', 'A'),
('U003', 'A002', 'María López', '11', 'B'),
('U003', 'A003', 'Carlos Sánchez', '12', 'C');

INSERT INTO Actividades (idUsuario, idAlumno, fechaActividad, descripcion, tipoActividad) VALUES
('U003', 'A001', '2024-12-01 08:00:00', 'Tarea sobre álgebra', 'Tareas'),
('U003', 'A002', '2024-12-02 10:00:00', 'Examen de historia', 'Examen'),
('U003', 'A003', '2024-12-03 09:00:00', 'Actividad de campo en el parque', 'Actividad de Campo'),
('U003', 'A001', '2024-12-04 11:00:00', 'Demérito por mal comportamiento', 'Deméritos');

INSERT INTO Maestros (idMaestro, nombreMaestro, gradoMaestro) VALUES
('M001', 'Luis Ramírez', '10'),
('M002', 'Ana Gómez', '11'),
('M003', 'Sofía Umanzor', '12');

select * from usuarios;
select * from actividades;
select * from maestros;
select * from alumnos;
