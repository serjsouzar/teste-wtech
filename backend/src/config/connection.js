import mongoose from "mongoose";

class Connection {
  constructor(){
    this.dataBaseConnectionMongoDB();
  }
  
  dataBaseConnectionMongoDB(){
     this.mongoDBConnection = mongoose.connect('mongodb://localhost/nodejs', {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       //useFindAndModify: false,
       //useCreateIndex: true
     })

     .then(() => {
       console.log("Conexão com o banco estabelecida com sucesso!")
     })

     .catch((error) => {
      console.log(`Erro ao estabelecer conexão com o banco: ${error}`)
     })
  }
}

export default new Connection();