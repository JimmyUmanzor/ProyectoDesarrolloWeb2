const Actividades = require('../modelos/Actividades');

exports.getActividades = async (req, res) => {
    try {
        const actividades = await Actividades.findAll();
        res.json(actividades);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener actividades' });
    }
};


exports.getActividadById = async (req, res) => {
    const { idActividad } = req.params; 
    try {
        const actividad = await Actividades.findByPk(idActividad); 
        if (!actividad) {
            return res.status(404).json({ error: 'Actividad no encontrada' });
        }
        res.json(actividad);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener actividad por ID' });
    }
};

exports.crearActividad = async (req, res) => {
    const { idUsuario, idAlumno, fechaActividad, descripcion, tipoActividad } = req.body;
    try {
        const nuevaActividad = await Actividades.create({ idUsuario, idAlumno, fechaActividad, descripcion, tipoActividad });
        res.status(201).json(nuevaActividad);
    } catch (error) {
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
