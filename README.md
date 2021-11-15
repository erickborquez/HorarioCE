# HorarioCE

Generador de horarios para los diferentes centros de la Universidad de Guadalajara. 
Proyecto final para la materia Tolerancia a fallas

#### Acerca de
Horario CE es una aplicacion que consigue en tiempo real la oferta de las materias de los diferentes centros universitarios y dado un set de preferencias del usuario es capaz de generar una gran cantidad de combinaciones de horarios disponibles que se ajusten a las preferencias seleccionadas.

Este proyecto es construido con diferentes frameworks y liberias, por parte del backend es utilizado: Node, Expresss y MongoDB, mientras que en el frontend se ha utilizado: React y MaterialUI. 
Ademas, este proyecto fue creado utilizando docker para contener la aplicacion en un ambiente controlado.

#### Pasos de instalación:

Clonar el repositorio e ir a la carpeta del proyecto

`git clone https://github.com/hiromi00/HorarioCE.git`

`cd HorarioCE`

Realizar una copia de las variables de entorno que están dentro del archivo para el backend y el frontend

`cp backend/.env.template backend/.env`

`cp frontend/.env.template frontend/.env`

Dentro de la carpeta del proyecto correr el comando

`docker-compose up -d --build`


Una vez terminado el proceso se mostraran los contenedores en docker desktop.
![docker](https://github.com/hiromi00/checkoutCE/blob/main/assets/containers.png?raw=true "Docker")

La api se encuentra en [localhost:8000](http://localhost:8000)

La aplicacion web se encuentra en [localhost:8001](http://localhost:8001)

![react](https://github.com/hiromi00/checkoutCE/blob/main/assets/frontendv1.png?raw=true"React")

#### Datos técnicos:

- HTML 5
- Node.js
- DB: MySQL
- React