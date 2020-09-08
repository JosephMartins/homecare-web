import React from 'react';
import {Link} from 'react-router-dom';

import Input from '../../components/Input';
import backIcon from '../../assets/images/icons/back.svg';


import './styles.css';
import logoImg from '../../assets/images/logo.svg'; 
;


function SignUp(){


  return (
    <div className="content">
      
      <div className="content-form">
        <div className="form">
          <form >
          <Link to="/">
            <img 
              className="arrow-back"
              src={backIcon} 
              alt="Back" 
            />
          </Link>
            
            <h1>Cadastro</h1>
            <p>Preencha os dados abaixo para começar</p>
            <Input name="nome"  placeholder="nome" />
            <Input name="sobrenome"  placeholder="Sobrenome"/>
            <Input name="email" type="password" placeholder="E-mail"/>
            <Input name="password" type="password" placeholder="Senha"/>
            
            <button className="button-signin" type="submit">Concluir cadastro</button>
          </form>
        </div>
      </div>

      <div className="content-banner"> 
        <div className="content-logo-text">
          <h1>HomeCare</h1>
          <div className="content-banner-text">
            <p>Segurança e Tranquilidade para você</p>
          </div>
        </div>
      </div>
    </div>
     
  )
}

export default SignUp;