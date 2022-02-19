import { json } from "express/lib/response";
import Empresas from "../Models/Empresas";

class UserController {
 
//Metodo .find() para efetuar a busca da listagem de empresas armazenadas no banco

  async listEmpresas(req, res) {

    try {
      const result = await Empresas.find({})
      return res.status(200).json({
        error: false,
        empresas: result
      })
    }
    catch (err) {
      return res.status(500).json({
        error: true,
        message: "Erro na solicitação."
      })
    }
  }


  /**
   * Metodo store() determinado os dados p/ armazenamento no banco
   */

  async store(req, res) {

    const { name, doc, about, active, site } = req.body;
    const dados = { name, doc, about, active, site };

    /**
     * Inserção no banco de dados
     */

    await Empresas.create(dados, (err) => {
      if (err)
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