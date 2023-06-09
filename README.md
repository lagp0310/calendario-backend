# Calendario Backend.

## Notas.

Antes de iniciar el proyecto, crear un archivo `.env` en la raíz del proyecto (a partir de `.env.example`). Ajustar en este nuevo archivo las variables de entorno necesarias (si se usa Docker, no es necesario ajustar ninguna variable, solo crear el archivo). **En caso de no usar Docker**, es necesario configurar las variables de entorno de la base de datos en el archivo `.env` (configurar las variables `DB_CONNECTION`, `PG_HOST`, `PG_PORT`, `PG_USER`, `PG_PASSWORD` y `PG_DB_NAME` según el entorno).

## Sin usar Docker.

En la raíz del proyecto, ejecutamos:

`npm install`

Una vez instaladas las dependencias, ejecutamos el proyecto en development con:

`npm run dev`

## Usando Docker.

En la raíz del proyecto, ejecutamos:

`docker-compose up --build -d`

Luego, nos conectamos al contenedor con:

`docker exec -it calendario_backend /bin/sh`

Instalamos las dependencias:

`npm i`

Instalamos el paquete para ajustar el timezone:

`apk add --no-cache tzdata`

Realizamos las migraciones e insertamos registros en la base de datos:

`node ace migration:refresh --seed`

Corremos el proyecto:

`npm run dev`

El backend estará corriendo en la dirección [http://localhost:3333](http://localhost:3333).

## Referencias.

- [Dockerizing Adonis](https://docs.adonisjs.com/cookbooks/dockerizing-adonis).
