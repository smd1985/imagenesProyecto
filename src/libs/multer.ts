import multer from 'multer'
import {v4 as uuidv4} from 'uuid'
import path from 'path'
import sharp from 'sharp'


//necesario para poder recibir imagenes
const storage = multer.diskStorage({
   

    destination:'output',
    filename:(req,file,cb) => {
        console.log("entro en multer"+JSON.stringify(file))
        var tam=[1080,800];
        // Promise.all([1080,800]).map()
        var img;

        //redimensiono con sharp recorriendo con map el array tam
        tam.map(x =>
            sharp(file.originalname).resize(x, x)
            
        )    

        //una vez redimesionados pasamos al guardado   y para que por cada imagen que llega generamos dos con las resoluciones solicitadas  
        tam.map(x =>
            cb(null, file.originalname + "-" +x + "-" +  uuidv4() + path.extname(file.originalname) )    
        )

    }

})




export default multer({storage});