const Alumnos = require('../modelos/Alumnos');

exports.getAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumnos.findAll();
        res.json(alumnos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener alumnos' });
    }
};

exports.getAlumnoById = async (req, res) => {
    const { idAlumno } = req.params; 
    try {
        const alumno = await Alumnos.findByPk(idAlumno); 
        if (!alumno) {
            return res.status(404).json({ error: 'Alumno no encontrado' });
        }
        res.json(alumno);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener alumno por ID' });
    }
};
