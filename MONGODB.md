# ACTUALIZAR UN CAMPO INCREMENTALMENTE EN TODOS LOS DOCUMENTOS DE UNA COLECCION

```js
// Obtener el número total de documentos en la colección
var totalDocuments = db.miColeccion.count();

// Crear una lista de operaciones de actualización
var bulkUpdateOperations = [];

// Inicializar un contador
var c = 0;

// Iterar sobre todos los documentos en la colección
db.miColeccion.find().forEach(function(documento) {
    // Construir la operación de actualización para este documento
    var updateOperation = {
        updateOne: {
            filter: { _id: documento._id }, // Filtrar por el _id del documento
            update: { $set: { nuevoCampo: c++ } } // Incrementar el contador y establecer el nuevo valor
        }
    };
    
    // Agregar la operación de actualización a la lista
    bulkUpdateOperations.push(updateOperation);
});

// Ejecutar las operaciones de actualización en lote
db.miColeccion.bulkWrite(bulkUpdateOperations);
```


# ELIMINAR LOS CAMPOS DE TODOS LOS DOCUMENTOS DE UNA COLECCION A LA VEZ

```js 
// Eliminar el campo "campoAEliminar" en todos los documentos de la colección
db.miColeccion.updateMany({}, { $unset: { campoAEliminar: "" } });
```

# CONEXION A BBDD USANDO TYPESCRIPT Y MONGOOSE

```ts
import mongoose, { Connection } from 'mongoose';

// URL de conexión a la base de datos
const uri = process.env.MONGODB_URI; // urL de la conn a la bd

// Opciones de conexión a la base de datos
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Variable para almacenar la conexión
let connection: Connection;

// Función para conectar a la base de datos
async function connectToDatabase(): Promise<Connection> {
  try {
    // Conectar a la base de datos
    connection = await mongoose.connect(uri, options);

    console.log('Conectado a la base de datos');

    // Retornar la conexión
    return connection;
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    throw error;
  }
}

// Función para cerrar la conexión a la base de datos
async function closeDatabaseConnection(): Promise<void> {
  try {
    if (connection) {
      // Cerrar la conexión a la base de datos
      await connection.close();
      console.log('Conexión a la base de datos cerrada');
    }
  } catch (error) {
    console.error('Error al cerrar la conexión a la base de datos:', error);
    throw error;
  }
}

// Ejemplo de uso
async function main() {
  // Conectar a la base de datos
  await connectToDatabase();

  // Realizar operaciones en la base de datos...

  // Cuando hayas terminado de usar la base de datos, cierra la conexión
  await closeDatabaseConnection();
}

// Llamar a la función principal
main().catch(console.error);
```