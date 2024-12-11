const Usuarios = require('../modelos/Usuarios');

exports.getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuarios.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
};


exports.getUsuarioById = async (req, res) => {
    const { idUsuario, clave } = req.body;

    if (!idUsuario || !clave) {
        return res.status(400).json({ error: 'Usuario y clave son requeridos' });
    }

    try {
        const usuario = await Usuarios.findOne({
            where: {
                idUsuario,
                clave,
            },
        });

        if (!usuario) {
            return res.status(404).json({ error: 'Usuario o clave incorrectos' });
        }

        res.json(usuario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al buscar el usuario' });
    }
};
