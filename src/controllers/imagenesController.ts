//importamos request y response
import { Request, Response } from 'express';

//importamos el archivo donde tenemos definido y exportado el pool para proceder a hacer las consultas
import pool from '../database';

//controlador de imagenes
class ImagenesController {


    //endpoint que devuelve el la imagen con el id que recibe
    public async devolverImagen(req: Request, res: Response): Promise<any> {
              
        const { taskId } = req.params;
        
        const imagen = await pool.query('SELECT * FROM imagenes WHERE id = ?', [taskId]);
        
        if (imagen.length > 0) {
            return res.json(imagen[0]);
        }
        res.status(404).json({ text: "Esta imagen no existe en la base de datos" });
    }

    //endpoint que crea imagenes en la base de datos
    public async crearImagenes(req: Request, res: Response): Promise<void> {
        var object = {"nombre":req.body.nombre,"imagen":req.file.path}; 
        const result = await pool.query('INSERT INTO imagenes set ?', [object]);
        res.json({ message: 'Imagenes guardadas correctamente!!' });
    }

}

const imagenesController = new ImagenesController;
export default imagenesController;