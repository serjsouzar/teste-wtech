import {Router} from 'express';

import Controller from './app/Controllers/Controller';

const routes = new Router();

routes.post('/empresas', Controller.store)
//routes.get('/empresas', Controller.listagemDeEmpresas)

export default routes;