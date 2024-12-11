const Actividades = require('../modelos/Actividades');

// Obtener todas las actividades
exports.getActividades = async (req, res) => {
    try {
        const actividades = await Actividades.findAll();
        if (actividades.length === 0) {
            return res.status(204).send(); // No hay contenido
        }
        res.json(actividades);
    } catch (error) {
        console.error('Error al obtener actividades:', error);
        res.status(500).json({ error: 'Error al obtener actividades' });
    }
};

// Obtener actividad por ID
exports.getActividadById = async (req, res) => {
    const { idActividad } = req.params;
    try {
        const actividad = await Actividades.findByPk(idActividad);
        if (!actividad) {
            return res.status(404).json({ error: 'Actividad no encontrada' });
        }
        res.json(actividad);
    } catch (error) {
        console.error('Error al obtener actividad por ID:', error);
        res.status(500).json({ error: 'Error al obtener actividad por ID' });
    }
};


exports.crearActividad = async (req, res) => {
    // Destructuración de los datos enviados en el cuerpo de la solicitud (req.body)
    const { idUsuario, idAlumno, fechaActividad, descripcion, tipoActividad } = req.body;

    // Verificar si los campos requeridos están presentes
    if (!idUsuario || !idAlumno || !fechaActividad || !descripcion || !tipoActividad) {
        return res.status(400).json({ error: 'Faltan datos requeridos' });
    }

    try {
        // Crear la nueva actividad en la base de datos
        const nuevaActividad = await Actividades.create({
            idUsuario,
            idAlumno,
            fechaActividad,
            descripcion,
            tipoActividad
        });

        // Devolver la respuesta con el código 201 y la actividad creada
        res.status(201).json(nuevaActividad);

    } catch (error) {
        // Si ocurre un error, devolverlo con el código 500
        console.error(error);
        res.status(500).json({ error: 'Error al crear actividad' });
    }
};


exports.modificarActividad = async (req, res) => {
    const { idActividad } = req.params;
    const { idUsuario, idAlumno, fechaActividad, descripcion, tipoActividad } = req.body;

    try {
        const actividad = await Actividades.findByPk(idActividad); 
        if (!actividad) {
            return res.status(404).json({ error: 'Actividad no encontrada' });
        }

        actividad.idUsuario = idUsuario !== undefined ? idUsuario : actividad.idUsuario;
        actividad.idAlumno = idAlumno !== undefined ? idAlumno : actividad.idAlumno;
        actividad.fechaActividad = fechaActividad !== undefined ? fechaActividad : actividad.fechaActividad;
        actividad.descripcion = descripcion !== undefined ? descripcion : actividad.descripcion;
        actividad.tipoActividad = tipoActividad !== undefined ? tipoActividad : actividad.tipoActividad;

        await actividad.save(); 
        res.json(actividad); 
    } catch (error) {
        res.status(500).json({ error: 'Error al modificar actividad' });
    }
};


exports.eliminarActividad = async (req, res) => {
    const { idActividad } = req.params;
    try {
        const actividad = await Actividades.findByPk(idActividad);
        if (!actividad) {
            return res.status(404).json({ error: 'Actividad no encontrada' });
        }
        await actividad.destroy();
        res.json({ mensaje: 'Actividad eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar actividad' });
    }
};







