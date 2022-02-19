import React from "react";

export default function ListaEmpresa(props){
  return ( props.data &&
    <div style={{textAlign:"center"}} className="register--container">
      <h1 className="register--title">Empresas Cadastradas</h1>
        {
        props.data.map((empresa) => {
        return <div style={{marginTop: "10px"}}key={empresa._id}>
        <strong>Nome: </strong>{empresa.name} -   
        <strong> CNPJ: </strong>{empresa.doc} -  
        <strong> Sobre: </strong>{empresa.about} - 
        <strong> Site: </strong>{empresa.site || "Não informado"} 
        </div>  
        })
      }
    </div>
  )

}