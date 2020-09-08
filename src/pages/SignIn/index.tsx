import React from 'react';



import Input from '../../components/Input';
import {Link} from 'react-router-dom'; 


import './styles.css';

import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';



const SignIn = () => {


  return (
    <div className="content">
      <div className="content-banner"> 
        <div className="content-logo-text">
          <h1>HomeCare</h1>
          <div className="content-banner-text">
            <p>Segurança e Tranquilidade para você</p>
          </div>
        </div>
      </div>


      <div className="content-form">
        <div className="form">
          <form >
            <h1>Fazer login</h1>
            <Input name="email"  placeholder="E-mail" />
            <Input name="password" type="password" placeholder="Senha"/>
            
            <div className="form-group-down">
              <div className="checkbox-group-label">
               <input type="checkbox" />
               <label>Lembrar me</label>
              </div>

              <Link to="forgot-password">Esqueci minha senha</Link>

            </div>

            <button className="button-signin" type="submit">Entrar</button>

          </form>
          <div className="content-footer">
            <div className="group-footer-text">
              <p>Não tem conta?</p>
              <Link to="/signup">Cadastre-se</Link>
            </div>
              <p>
                É de graça 
                <img src={purpleHeartIcon} alt="Coração roxo"/>
              </p>
          </div>
          
        </div>

        
      </div>
    </div>
     
  )
}

export default SignIn;