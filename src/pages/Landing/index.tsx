import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'; 


import landingImg from '../../assets/family__monochromatic.svg';
import Header from '../../components/Header';

import briefIcon from '../../assets/icons/briefcase.svg';
import userIcon from '../../assets/icons/user.svg';

import api from '../../services/api';

import './styles.css';

function Landing(){
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(()=> {
    api.get('connections').then((response => {
      const {total} = response.data;

      setTotalConnections(total);
    }))
  }, []);


  return (
    <>

      <div id="page-landing">
      <Header />
        <div id="page-landing-content" className="container">
      
          <div className="logo-container">
            <h1>HomeCare</h1>
            <h2>Segurança e Tranquilidade para você.</h2>
          </div>
          <img 
            src={landingImg} 
            alt="Plataforma de estudos" 
            className="hero-image"
          />
        </div>
        <div id="section-down">
          <div className="container-buttons">
            <p>Seja bem-vindo. <span><br />O que deseja fazer?</span></p>
            <div className="buttons-container">
              <span className="total-connections" >
                Total de {totalConnections} conexões ja realizadas 
              </span>

              <div className="buttons-group">
                <Link to="/provider-form" className="study">
                  <img src={briefIcon} alt="Prestar"/>
                  Prestar
                </Link>
                <Link to="provider-list" className="give-classes">
                  <img src={userIcon} alt="Contratar"/>
                  Contratar
                </Link>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing;