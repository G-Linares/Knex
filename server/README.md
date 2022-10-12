# Maria DB

## Requerimientos

- Docker
- Docker Compose
- Admin tool para SQL (Yo uso Heidi pero si quieres puedes usar XAMPP)
- Node JS

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
- Despues iniciar front, y listo :D
