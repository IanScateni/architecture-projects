import { Router } from "express";
import { AuthRoutes } from "./auth/routes";

export class AppRoutes {

  static get routes(): Router {

    const router = Router();

    // Definir rutas principales
    router.use('/api/auth', AuthRoutes.routes);
    /* router.use('api/user');
    router.use('api/auth');
    router.use('api/auth');
    router.use('api/auth'); */

    return router; 

  }

}