import express from 'express';
import routes from './routes';
import cors from 'cors';
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
    this.app.use(cors());
    this.app.options('*', cors());
    
    this.app.use((request, response, next) => {
      response.header('Access-Control-Allow-Origin','*');
      response.header('Access-Controll-Allow-Methods','GET, POST');
      response.header('Access-Controll-Allow-Headers','Access, Content-type, Authorization, Acept, Origin, X-Requested-With')
      this.app.use(cors());
      next();
    })
  }

  routes(){
    this.app.use(routes);
  }
}

export default new App().app;