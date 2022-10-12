# Entregable Knex

Para poder correr este programa se necesita un setup mas robusto que el pasado ya que tenemos dos DB's corriendo en el mismo proyecto.

Este proyecto se divide en 2 carpetas, client y Server. Server es la parte del back end y client es la parte de Front.

El front esta hecho en React sin TS, el back con lo visto en clase.

## Puertos

Como ocupo BD se ocuparan multiples puertos, aqui los listo

- 3000 (React, Front)
- 8080 (Server de Express, para CRUD con MariaDB, tambien aqui esta SQLITE3)
- 3306 (MariaDB montado con Docker para mayor facilidad)
- 3001 (Socket.io Server, ese server maneja toda la logica de los sockets)

### Como correr Front.

Tienes que moverte a la carpeta "Client" y correr

```
npm i
```

Ya que se instalen las dependencias puedes correr el programa con

```
npm start
```

Quick Note, no te va a correr si no tienes el back corriendo al 100%

### Como correr Back

Estos pasos los puedes ver dentro de la carpeta server, tambien hay un README.md ahi
