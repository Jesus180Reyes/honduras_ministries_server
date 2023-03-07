# Child Sponsor Server
Esta es una Backend server para el uso de Childs Sponsors

Sigue los pasos para levantar la aplicacion

### Paso 1
Ejecuta el comando en la terminal `npm install` o `npm i` para instalar las dependencias del proyecto.
esto generara una carpeta llamada `node_modules`

### Paso 2
Crea el archivo `.env` para el uso de variables de entorno(Copia todas las variables de entorno en `example.env`)

### Paso 3
Correr el comando `docker compose up -d` para levantar la base de datos `MYSQL`
automaticamente se creara una carpeta llamada `mysql`(Favor no borrar esa carpeta)

### Paso 4
Levantar la aplicacion con el comando `npm start`
la aplicacion esta corriendo en el `localhost:8080`

### Paso 5
Ir a la ruta correspondiente `localhost:8080`

### Si sigues todos los pasos establecidos la aplicacion ya estara configurada sin ningun problema


## Rutas:
**Sponsor**


Para ver todos los sponsors existentes:
`localhost:8080/api/sponsors`


Para ver un sponsor especifico:
`localhost:8080/api/sponsors/:sponsorId`


Para ver un sponsor especifico por email:
`localhost:8080/api/sponsors/email/:email` 

Para eliminar un sponsor especifico `DELETE`:
`localhost:8080/api/sponsors/:id`


Para crear un Sponsor nuevo `POST`:
`localhost:8080/api/sponsors`

**Child**

Para ver todos los Childs existentes:  
`localhost:8080/api/childs`


Para ver un child especifico:  
`localhost:8080/api/childs/:id`


Para ver un child por code:  
`localhost:8080/api/childs/code/:code`


Para crear un child `POST`:
`localhost:8080/api/childs`



Para borrar un Child Especifico `DELETE`:
`localhost:8080/api/childs/:id`


**Sponsored**


Para ver todos los sponsoreds existentes:
`localhost:8080/api/sponsoreds`


Para filtrar que patrocionios a dado un sponsor existente:
`localhost:8080/api/sponsoreds/:sponsorid`

Para crear un nuevo Sponsored:
`localhost:8080/api/sponsoreds`


