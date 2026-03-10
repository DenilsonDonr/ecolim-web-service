// Importar Express
import express from 'express'

// Importar controlador de autenticación
import { login } from '../controllers/authController.js'

// Crear router
const router = express.Router()

// Ruta POST para login
// POST /auth/login
router.post('/login', login)

// Exportar router
export default router