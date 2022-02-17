import express from 'express';
import routes from './routes';
require('./config/connection');

class App{
  constructor(){
    this.app = express();
    this.app.use(express.json())

    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(express.json());

    this.app.use((request, response, next) => {
      response.header('Access-Controll-Allow-Origin','*');
      response.header('Access-Controll-Allow-Method','GET, POST');
      response.header('Access-Controll-Allow-Headers','Access, Content-type, Authorization, Acept, Origin, X-Requested-With')
      
      next();
    })
  }

  routes(){
    this.app.use(routes);
  }
}

export default new App().app;