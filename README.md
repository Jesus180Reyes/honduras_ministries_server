# Child Sponsor Server
Esta es una Backend server para el uso de Childs Sponsors

Sigue los pasos para levantar la aplicacion

### Paso 1
Crea el archivo `.env` para el uso de variables de entorno(Copia todas las variables de entorno en `example.env`)

### Paso 2
Correr el comando `docker compose up -d` para levantar la base de datos `MYSQL`
automaticamente se creara una carpeta llamada `mysql`(Favor no borrar esa carpeta)

### Paso 3
Levantar la aplicacion con el comando `npm start`
la aplicacion esta corriendo en el `localhost:8080`

### Paso 4
Ir a la ruta correspondiente `localhost:8080`

### Si sigues todos los pasos establecidos la aplicacion ya estara configurada sin ningun problema


## Rutas:
**Sponsor**


Para ver todos los sponsors existentes:
`localhost:8080/api/sponsors`


Para ver un sponsor especifico:
`localhost:8080/api/sponsors/:sponsorId`


**Child**

Para ver todos los Childs existentes:  
`localhost:8080/api/childs`


Para ver un child especifico:  
`localhost:8080/api/childs/:id`


Para ver un child por code:  
`localhost:8080/api/code/:code`


**Sponsored**


Para ver todos los sponsoreds existentes:
`localhost:8080/api/sponsoreds`


Para filtrar que patrocionios a dado un sponsor existente:
`localhost:8080/api/sponsoreds/:sponsorid`


