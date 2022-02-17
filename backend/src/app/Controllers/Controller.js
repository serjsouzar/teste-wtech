import { json } from "express/lib/response";
import Empresas from "../Models/Empresas";

class UserController{ 

/*
Rota post para teste insomnia

  cadastroDeEmpresas(req, res){
    const newEmpresa = req.body
    
    empresas.push(newEmpresa);

    return res.json({message: "Empresa cadastrada com sucesso"})
  }
*/

/*
Rota get para teste insomnia
 
listagemDeEmpresas(req, res){
    return res.json(empresas)
  }
*/

/**
 * Metodo store() determinado os dados p/ armazenamento
 */

  async store(req, res){
    
    const {name, doc, about, active, site } = req.body;
    const dados = {name, doc, about, active, site};



    /**
     * Inserção no banco de dados
     */
    
    await Empresas.create(dados, (err) => {
      if(err)
        return res.status(400).json({
          error: true,
          message: "Erro ao tentar inserir a Empresa no banco."
        })

        else

        return res.status(200).json({
          error: false,
          message: "Empresa cadastrada com sucesso."
      })
    })
  }

}

export default new UserController();