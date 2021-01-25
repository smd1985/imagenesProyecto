import express, { Router } from 'express';

import imagenesController from '../controllers/imagenesController';

import multer from '../libs/multer'




//clase que contiene todas las rutas de la aplicacion
class ImagenesRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.post('/task', multer.single('imagen'), imagenesController.crearImagenes)
       
        this.router.get('/task/:taskId',imagenesController.devolverImagen )
    }

}

export default new ImagenesRoutes().router;

