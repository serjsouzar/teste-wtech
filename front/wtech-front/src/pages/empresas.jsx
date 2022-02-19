import React, { useState, useEffect } from 'react';
import '../App.css';
import Axios from 'axios';
import CadastrarEmpresa from '../components/cadastrarEmpresa';
import ListaEmpresa from '../components/listaEmpresas';

//hooks capturando valores em tempo real
export default function Empresas() {
  const [values, setValues] = useState(
    {
      name: "",
      doc: "",
      about: "",
      active: false,
      site: "",
    }
  );
  const [msg, setMsg] = useState();
  const [listaEmpresas, setListaEmpresas] = useState([]); 
  
  useEffect(() => {
    getListaEmpresas()
  },[])  
  
  //Setando dados para o cadastro de empresa  
  function adicionandoValores(value){
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value
    }))
  }

  function validacao(){
    if (!values.name || !values.doc || !values.about) {
      return false;
    }
    return true;
  }

  //Função toggleCheckbox para inverter o valor booleano do campo active
  function toggleCheckbox() {
    setValues((prevValue) => ({
      ...prevValue,
      active: !prevValue.active
    }))
  }

  //botão cadastrar para passar os dados setados da empresa
  function botaoCadastroEmpresa(){

    if (validacao()) {
      cadastro();
    } else {
      setMsg("Erro ao cadastrar empresa. Preencha os campos obrigatorios");
    }
  }

   function cadastro(){
    Axios.post("http://localhost:3333/empresas", {
      name: values.name,
      doc: values.doc,
      about: values.about,
      active: values.active,
      site: values.site
    },
    {
      header: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response);
      setMsg("Empresa cadastrada com sucesso");
      setValues({
        name: "",
        doc: "",
        about: "",
        active: false,
        site: "",
      })
      getListaEmpresas();
    })
  }

function getListaEmpresas(){
  Axios.get("http://localhost:3333/empresas",
  {
    header: {
      'Content-Type': 'application/json'
    }
  }).then((result) => {
    setListaEmpresas(result.data.empresas)
  })
}

  return (
    <>
      <CadastrarEmpresa
        values={values}
        handleChanges={adicionandoValores}
        toggleCheckbox={toggleCheckbox}
        handleButtonCadastroEmpresa={botaoCadastroEmpresa}
        msg={msg}
      />
      <ListaEmpresa 
        data={listaEmpresas}
      />
    </>
  );
}
