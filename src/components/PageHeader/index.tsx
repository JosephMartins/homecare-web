import React from 'react';

import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import emoji from '../../assets/Emoji.svg';

import './styles.css';

interface PageHeaderProps{
  title: string;
  pageTitle: string;
  description?: string;
  link:string;
}

const  PageHeader: React.FC<PageHeaderProps> = ({title, children, description, pageTitle, link}) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to={link}> 
          <img src={backIcon} alt="Voltar"/>
        </Link>
        <p>{pageTitle}</p>
        <p>HomeCare</p>
      </div>

      <div className="header-content">
        <div className="header-content-group-text-left">
          <strong>{title}</strong>
          {description && <p>{description}</p>}

          {children}
        </div>
        <div className="header-content-group-text-right">
          <img src={emoji} alt="Voltar"/>
          <p>Prepare-se!<br></br> vai ser o máximo</p>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;