# ACTUALIZAR UN CAMPO INCREMENTALMENTE EN TODOS LOS DOCUMENTOS DE UNA COLECCION

```js
// Obtener el número total de documentos en la colección
var totalDocuments = db.miColeccion.count();

// Crear una lista de operaciones de actualización
var bulkUpdateOperations = [];

// Inicializar un contador
var counter = 1;

// Iterar sobre todos los documentos en la colección
db.miColeccion.find().forEach(function(documento) {
    // Construir la operación de actualización para este documento
    var updateOperation = {
        updateOne: {
            filter: { _id: documento._id }, // Filtrar por el _id del documento
            update: { $set: { nuevoCampo: counter++ } } // Incrementar el contador y establecer el nuevo valor
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
