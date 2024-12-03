const Maestros = require('../modelos/Maestros');

exports.getMaestros = async (req, res) => {
    try {
        const maestros = await Maestros.findAll();
        res.json(maestros);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener maestros' });
    }
};


exports.getMaestroById = async (req, res) => {
    const { idMaestro } = req.params; 
    try {
        const maestro = await Maestros.findByPk(idMaestro); 
        if (!maestro) {
            return res.status(404).json({ error: 'Maestro no encontrado' });
        }
        res.json(maestro); 
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener maestro' });
    }
};
