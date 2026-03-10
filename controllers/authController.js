// Importar la librería para encriptar contraseñas
import bcrypt from 'bcrypt'
import db from '../db.js'

// Controlador para el login
export const login = (req, res) => {
    // Destructurar el body recibido
    const { username, password } = req.body

    // Validar campos obligatorios
    if (!username || !password) {
        return res.status(400).json({
            code: 400,
            message: "El usuario y contraseña son obligatorios"
        })
    }

    // Validar username
    if (typeof username !== 'string' || username.length > 100) {
        return res.status(400).json({
            code: 400,
            message: "El usuario debe ser texto y máximo 100 caracteres"
        })
    }

    // Validar password
    if (typeof password !== 'string' || password.length < 1) {
        return res.status(400).json({
            code: 400,
            message: "La contraseña es obligatoria"
        })
    }

    // Consulta SQL para obtener el usuario
    const sql = 'SELECT id, username, password, full_name, role FROM users WHERE username = ?'

    db.query(sql, [username], async (err, results) => {
        // Si ocurre un error en la consulta
        if (err) {
            console.error("Database query error:", err)
            return res.status(500).json({
                code: 500,
                message: "Error al consultar la base de datos"
            })
        }

        // Si no se encontró el usuario
        if (results.length === 0) {
            return res.status(401).json({
                code: 401,
                message: "Usuario o contraseña incorrectos"
            })
        }

        // Obtener el usuario
        const user = results[0]

        // Comparar la contraseña ingresada con la contraseña encriptada
        const passwordMatch = await bcrypt.compare(password, user.password)

        // Si la contraseña no coincide
        if (!passwordMatch) {
            return res.status(401).json({
                code: 401,
                message: "Usuario o contraseña incorrectos"
            })
        }

        // Si la autenticación fue exitosa
        res.status(200).json({
            code: 200,
            message: "Autenticación exitosa",
            data: {
                id: user.id,
                username: user.username,
                full_name: user.full_name,
                role: user.role
            }
        })
    })
}