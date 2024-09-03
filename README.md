# TodoList

Este es un proyecto de aplicación web de lista de tareas desarrollado con Django y React.

## Características

- Crear, leer, actualizar y eliminar tareas.
- Marcar tareas como completadas.

## Tecnologías

- Backend: Django
- Frontend: React
- Base de datos: MariaDB

## Instalación

### Requisitos previos

- Python 3.x
- Node.js y npm
- MariaDB

### Configuración del entorno de desarrollo

1. Clonar este repositorio:

   ```sh
   git clone https://github.com/JhandryChimbo/TodoList.git
   cd TodoList
   ```
2. Configurar el entorno virtual de Python:
   ```sh
   python -m venv todo
   source todo/bin/activate
   ```
3. Instalar las dependecias de backend
   ```sh
   pip install -r requirements.txt
   ```
4. Configurar la base de datos MySQL en settings.py.
5. Realizar las migraciones:
   ```sh
   python3 manage.py makemigrations
   python3 manage.py migrate
   ```
6. Iniciar el servidor de desarrollo de Django
   ```sh
   python3 manage.py runserver
   ```
7. Instalar las dependencias de frontend
   ```sh
   cd frontend
   npm install
   ```
8. Iniciar el servidor de desarrollo de React
   ```sh
   npm start
   ```
9. Abre el navegador y acceder a http://localhost:3000.
