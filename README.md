# HorarioCE

Generador de horarios para los diferentes centros de la Universidad de Guadalajara. 
Proyecto final para la materia Tolerancia a fallas. ![Presentacion](https://docs.google.com/presentation/d/1EpCzauYLrTI60g1CNTu8Ew7u-ouMJYCQMdA949FRx9o/edit?usp=sharing "Presentacion")

#### Acerca de
Horario CE es una aplicacion que consigue en tiempo real la oferta de las materias de los diferentes centros universitarios y dado un set de preferencias del usuario es capaz de generar una gran cantidad de combinaciones de horarios disponibles que se ajusten a las preferencias seleccionadas.

Este proyecto es construido con diferentes frameworks y liberias, por parte del backend es utilizado: Node, Expresss y MongoDB, mientras que en el frontend se ha utilizado: React y MaterialUI. 
Ademas, este proyecto fue creado utilizando docker para contener la aplicacion en un ambiente controlado.

#### Pasos de instalación:

Clonar el repositorio e ir a la carpeta del proyecto

`git clone https://github.com/ErickJoestar/HorarioCE.git`

`cd HorarioCE`

Realizar una copia de las variables de entorno que están dentro del archivo para el backend y el frontend

`cp backend/.env.template backend/.env`

`cp frontend/.env.template frontend/.env`

Dentro de la carpeta del proyecto correr el comando

`docker-compose up -d --build`


Una vez terminado el proceso se mostraran los contenedores en docker desktop.
![docker](https://github.com/ErickJoestar/HorarioCE/blob/main/assets/docker-desktop.png?raw=true "Docker")

La api se encuentra en [localhost:8000](http://localhost:8000)

La aplicacion web se encuentra en [localhost:8001](http://localhost:8001)

![app](https://github.com/ErickJoestar/HorarioCE/blob/main/assets/web-app-1.png?raw=true "Web app. First image")
![app](https://github.com/ErickJoestar/HorarioCE/blob/main/assets/web-app-2.png?raw=true "Web app. First image")
![app](https://github.com/ErickJoestar/HorarioCE/blob/main/assets/web-app-3.png?raw=true "Web app. First image")

#### Datos técnicos:

- HTML 5
- CSS
- JavaScript
- React
- Node
- Express
- MongoDB