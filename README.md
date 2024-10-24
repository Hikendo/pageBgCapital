  Page B&G Capital - Proyecto Angular

Page B&G Capital - Proyecto Angular
===================================

Este proyecto está construido con [Angular](https://angular.io/). Sigue las instrucciones a continuación para instalar dependencias y ejecutar la aplicación.

Puedes ver una versión publicada en [PgBGCapital](https://hikendo.github.io/pageBgCapital/).

Requisitos previos
------------------

Asegúrate de tener instalados los siguientes requisitos:

*   **Node.js** (versión 14.x o superior): [Descargar Node.js](https://nodejs.org)
*   **Angular CLI** (versión 14 o superior): Si no lo tienes instalado, ejecuta:

    npm install -g @angular/cli

Instalación
-----------

### 1\. Clonar el repositorio

Primero, clona el repositorio del proyecto en tu máquina local:

    git clone <URL_DEL_REPOSITORIO>

### 2\. Entrar a la carpeta del proyecto

Accede a la carpeta `pageBGCapital`:

    cd pageBGCapital

### 3\. Instalar dependencias

Instala las dependencias del proyecto ejecutando el siguiente comando dentro de la carpeta del proyecto:

    npm install

Esto descargará todas las dependencias necesarias para que el proyecto funcione.

Ejecución del Proyecto
----------------------

Una vez que hayas instalado las dependencias, puedes ejecutar el proyecto con el siguiente comando:

    ng serve

O alternativamente:

    npx ng serve

O también:

    npm start

Esto iniciará un servidor de desarrollo. Abre tu navegador y navega a [http://localhost:4200/](http://localhost:4200/) para ver la aplicación en funcionamiento.

Opciones adicionales
--------------------

### Compilación en producción

Si deseas construir el proyecto para producción, ejecuta:

    ng build --prod
### Mostrar en githubPages

    ng build --output-path ../docs --base-href /pageBgCapital/ 

Se debe mover el contenido de la carpeta Browser a la carpeta Docs

### Linter

Para ejecutar el linter y verificar el código, usa el siguiente comando:

    ng lint

Estructura del Proyecto
-----------------------

    
    pageBGCapital/
    ├── src/                      # Código fuente del proyecto
    ├── angular.json              # Configuración de Angular
    ├── package.json              # Dependencias del proyecto
    ├── README.md                 # Este archivo
    └── src/app/app.routes.ts     # Rutas registradas
        

Notas adicionales
-----------------

*   Asegúrate de que Node.js y npm estén correctamente instalados y en sus versiones recomendadas.
*   Si tienes problemas con permisos, puedes intentar ejecutar los comandos con `sudo` (en sistemas basados en Unix).

Soporte
-------

Si tienes alguna pregunta o encuentras problemas, no dudes en crear un "issue" en el repositorio o contactarnos directamente.