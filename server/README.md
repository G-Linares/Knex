# Maria DB

## Requerimientos

- Docker
- Docker Compose
- Admin tool para SQL (Yo uso Heidi pero puedes ocupar Valentina, SQLstudio etc etc.)
- Node JS

### Por que docker

Decidí usar docker para que puedas correr la DB en cualquier entorno y en cualquier máquina, en este caso solo lo ocupo con el ejercicio de CRUD de agregar objetos,(Globo Terraqueo, Escuadra, etc. etc. )
Es muy fácil de correr y no deberías tener ningún problema al levantarlo.

# Como correr el programa

- Crear archivo ".env" en root asi como el example que puedes encontrar en el mismo lugar
- Despues correr
  ```
  docker-compose up -d
  ```
- Para verificar que este montado el contenedor,
  ```
  docker ps
  ```
- Si el proceso esta ahi, ya tienes la base de datos montada en puerto 3306 de maria DB.
- Si tienes MariaDB instalado seguro ya tienes contraseña de Root, intenta con esa, si no con la que se define en el .env, en el ejemplo es "dev"
- Despues, instalas dependencias con
  ```
  npm i
  ```
- E iniciar programa con
  ```
  npm start
  ```
- Al hacer esto en consola deberías verificar que el lema DB creada para ver que el esquema de tablas se haya costruido correctamente.
- Despues iniciar front, y listo :D
