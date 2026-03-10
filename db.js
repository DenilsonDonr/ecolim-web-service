// Importar la librería para conectar con MySQL
import mysql from 'mysql2'
import dotenv from 'dotenv'

// Cargar variables de entorno desde .env
dotenv.config()

// Configuración de conexión a la base de datos
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

// Intentar conectar a la base de datos
db.connect((error) => {
    // Si ocurre un error al conectar
    if (error) {
        console.error("Error al conectar con la base de datos:", error)
        return
    }
    // Si la conexión fue exitosa
    console.log("Conectado correctamente a la base de datos ws_ecolim")
})

// Exportar la conexión
export default db