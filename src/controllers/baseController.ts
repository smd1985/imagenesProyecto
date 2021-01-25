import { Request, Response } from 'express';

//controlador base o controlador raiz
class BaseController {

    public base(req: Request, res: Response) {
        res.json({text: 'aplicacion de imagenes' });
    }

}

export const baseController = new BaseController; 