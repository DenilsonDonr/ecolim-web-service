// Importar las librerías necesarias
import express from 'express'          // Framework para crear el servidor
import bodyparser from 'body-parser'   // Interactuar con JSON
import authRoutes from './routes/auth.js'    // Rutas de autenticación

// Crear la aplicación de Express
const app = express()

// Permitir que el servidor pueda recibir datos en formato JSON
app.use(bodyparser.json())

// Rutas
// POST /auth/login
app.use('/auth', authRoutes)

// Ruta raíz para verificar que el servidor está funcionando
app.get('/', (req, res) => {
    res.status(200).json({
        code: 200,
        message: "API ECOLIM funcionando correctamente 🚀"
    })
})

// Puerto donde se ejecutará el servidor
const PORT = 3005

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en: http://127.0.0.1:${PORT}`)
})