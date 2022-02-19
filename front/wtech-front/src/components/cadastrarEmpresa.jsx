import React from "react"
export default function CadastrarEmpresa(props) {

  return (<div className="app--container">
    <div className='register--container'>
      <h1 className="register--title">Teste WTech - Cadastro de Empresa</h1>
      <input
        type="text"
        name="name"
        value={props.values.name}
        placeholder="Nome"
        className="register--input"
        onChange={props.handleChanges}
      />
      <input
        type="text"
        value={props.values.doc}
        name="doc"
        placeholder="CNPJ"
        className="register--input"
        onChange={props.handleChanges}
      />
      <input
        type="text"
        value={props.values.about}
        name="about"
        placeholder="Sobre"
        className="register--input"
        onChange={props.handleChanges}
      />

      <input
        type="text"
        value={props.values.site}
        name="site"
        placeholder="Site"
        className="register--input"
        onChange={props.handleChanges}
      />

      <div className='textCheckbox'>Empresa ativa?</div>
      <input
        type="checkbox"
        checked={props.values.active}
        name="active"
        className="register--input"
        onChange={props.toggleCheckbox}
      />

      <button className="register--button"
        onClick={props.handleButtonCadastroEmpresa}
      >
        Cadastrar
      </button>
      <h2 className="popUpMsg">{props.msg}</h2>
    </div>
  </div>)
}