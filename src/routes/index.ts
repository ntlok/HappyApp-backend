import { Router } from 'express';
import orphanagesRoutes from './orphanages.routes';

const routes = Router();
routes.use(orphanagesRoutes);

export default routes;