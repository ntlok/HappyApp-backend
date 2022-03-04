import { Router } from 'express';
import Orphanage from '../controllers/OrphanagesController';
import multer from 'multer';
import multerConfig from '../config/upload'

const upload = multer(multerConfig)

const orphanagesRoutes = Router();

orphanagesRoutes.get('/orphanages', Orphanage.index );
orphanagesRoutes.get('/orphanages/:id', Orphanage.show );
orphanagesRoutes.post('/orphanages', upload.array('images'), Orphanage.handle );

export default orphanagesRoutes;