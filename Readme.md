# Backend de Haciendola

¡Bienvenido al backend de la aplicación de Haciendola! Este backend está diseñado para gestionar la lógica de negocio y la interacción con la base de datos.

## Guía para iniciar el proyecto

Aquí están los comandos que necesitas para iniciar tu proyecto. Asegúrate de tener instalado Node.js y NPM en tu sistema antes de ejecutar estos comandos.

1. ## Clonar el Repositorio: Clona este repositorio en tu máquina local:
git clone https://github.com/Ariel-0810/api_haciendola.git

2. ## Navegar al Directorio: Accede al directorio del backend: cd api_haciendola

3. ## Instalar Dependencias: Instala las dependencias del proyecto con npm:

```bash
# Instala las dependencias del proyecto
npm install

# Inicia el servidor de desarrollo
npm start
```

Sigue estos pasos en orden. Primero, npm install instalará todas las dependencias necesarias para tu proyecto. Finalmente, npm start iniciará el servidor de desarrollo, permitiéndote ver y probar tu proyecto en un entorno local.

## Estructura del Proyecto

Este proyecto utiliza una arquitectura de capas para desarrollar un backend usando Node.js, Express y base de datos de tipo Relacional PostgreSQL con motor Sequelize. A continuación se describe la estructura de las carpetas del proyecto:

- 📂 `api_haciendola`: Carpeta principal que contiene todas las Funciones.
  - 📄 `index.js`: Archivo principal que es la entrada de todas Functiones.
    - 📂 `controllers`: Contiene los controladores que se encargan de enviar la respuesta al cliente.
      - 📄 `auth.js`: Controlador para las operaciones relacionadas con la Autenticacion y Logueo de usuarios .
      - 📄 `createProduct.js`: Controlador para las operaciones relacionadas con la creacion de Productos.
      - 📄 `createUser.js`: Controlador para las operaciones relacionadas con la creacion de Usuarios.
      - 📄 `deleteProduct.js`: Controlador para las operaciones relacionadas con la eliminacion de Productos de la base de datos.
      - 📄 `deleteUser.js`: Controlador para las operaciones relacionadas con la eliminacion de Usuarios de la base de datos.
      - 📄 `getProducts.js`: Controlador para las operaciones relacionadas con la busqueda de todos los productos o buscar por Titulo.
      - 📄 `getProductsId.js`: Controlador para las operaciones relacionadas con la busqueda de Productos por su ID.
      - 📄 `getUserId.js`: Controlador para las operaciones relacionadas con la busqueda de Usuario por su ID.
      - 📄 `getUserName.js`: Controlador para las operaciones relacionadas con la busqueda de todos los Usuarios o buscar por su nombre.
      - 📄 `updateProduct.js`: Controlador para las operaciones relacionadas con la modificacion de un Producto.
    - 📂 `models`: Contiene las interfaces de cada una de las entidades.
      - 📄 `Products.js`: Interfaz para los Productos.
      - 📄 `Users.js`: Interfaz para las Usuarios.
    - 📂 `routes`: Contiene las rutas de las Cloud Functions.
      - 📄 `index.js`: Importa todas las Rutas para tener una sola entrada para estas.
      - 📄 `auth.js`: Ruta relacionada con la Autenticacion y Logueo de usuarios.
      - 📄 `createProduct.js`: Ruta relacionada con la creacion de Productos.
      - 📄 `createUser.js`: Ruta relacionada con la creacion de Usuarios.
      - 📄 `deleteProduct.js`: Ruta relacionada con la eliminacion de Productos de la base de datos.
      - 📄 `deleteUser.js`: Ruta relacionada con la eliminacion de Usuario de la base de datos.
      - 📄 `getProducts.js`: Ruta relacionada con la busqueda de Productos.
      - 📄 `getProductsId.js`: Ruta relacionada con la busqueda de Productos por su ID.
      - 📄 `getUserId.js`: Ruta relacionada con la busqueda de Usuarios por su ID.
      - 📄 `getUserName.js`: Ruta relacionada con la busqueda de todos los Usuarios o buscar por nombre.
      - 📄 `updateProduct.js`: Ruta relacionada con la modificacion de un Producto.

Cada carpeta y archivo tiene un propósito específico y juntos forman la estructura completa del proyecto.

# Descripción detallada

- 📂 `controllers`: Contiene los controladores que se encargan de manejar las solicitudes entrantes y enviar respuestas a los clientes. Cada controlador se encarga de una entidad específica y contiene funciones para manejar las operaciones CRUD (Crear, Leer, Actualizar, Borrar) para esa entidad.

- 📂 `routes`: Contiene las rutas de las Funciones. Cada archivo en esta carpeta define las rutas o endpoints para una entidad específica y asocia cada ruta con una función del controlador correspondiente.

- 📂 `models`: Contiene las interfaces de cada una de las entidades. Las interfaces definen la estructura de los datos para cada entidad, especificando los campos y sus tipos.

## El backend de Haciendola utiliza las siguientes dependencias importantes:

- `bcrypt`: Se utiliza para el cifrado seguro de contraseñas de usuario antes de almacenarlas en la base de datos. Esto garantiza que las contraseñas estén protegidas incluso si la base de datos es comprometida.

- `jsonwebtoken`: Se utiliza para la generación de tokens de autenticación JWT (JSON Web Tokens). Estos tokens se utilizan para autenticar a los usuarios en las solicitudes que requieren acceso a recursos protegidos.


