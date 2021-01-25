Proyecto de prueba para candidatura empleo Zara.

Para el desarrollo he utilizado NodeJS con el framwork Express, adem�s de algunas otras librer�as como Multer,Sharp,Nodemon entre otras.

Para el correcto funcionamiento adem�s de tener la API es necesario crear una bbdd, dejo el script:

//SCRIPT//

CREATE DATABASE imagenes;

USE imagenes;

CREATE TABLE imagenes (
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(180),
    imagen VARCHAR(300),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

//FIN SCRIPT//

