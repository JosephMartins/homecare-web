import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import ProviderItem, {Teacher} from '../../components/ProviderItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


import './styles.css';



function ProviderList(){
  const [teachers, setTeachers]  = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent){
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })

    setTeachers(response.data);

  }

  return(
    <div id="page-provider-list" className="container">
      <PageHeader title="Estes são os cuidadores disponíveis." pageTitle="Prestadores" link="landing">
        <form action="" id="search-providers" onSubmit={searchTeachers}>
        <Select
          name="subject" 
          label="Serviço"  
          value={subject}
          onChange={(e) => {setSubject(e.target.value)}}
          options={[
            {value: 'Baba', label: 'Babá' },
            {value: 'Cuidador', label: 'Cuidador' },
          ]}
        />
        <Select
          name="week_day" 
          label="Dia da semana"
          value={week_day}
          onChange={(e) => {setWeekDay(e.target.value)}}  
          options={[
            {value: '0', label: 'Domingo' },
            {value: '1', label: 'Segunda-feira' },
            {value: '2', label: 'Terça-feira' },
            {value: '3', label: 'Quarta-feira' },
            {value: '4', label: 'Quinta-feira' },
            {value: '5', label: 'Sexta-feira' },
            {value: '6', label: 'Sabado' },
          ]}
        />
          <Input 
            type="time" 
            name="time"  
            label="Hora" 
            value={time}
            onChange={(e) => {
              setTime(e.target.value)
            }}
          />

          <button type="submit">Buscar</button>
          
            
        </form>
      </PageHeader>

      <main>

        {teachers.map((teacher:Teacher) => {
          return <ProviderItem key={teacher.id} teacher={teacher} />;
        })}

        <article className="provider-item">
          <header>
            <img src="https://lh3.googleusercontent.com/ogw/ADGmqu-LHgY3rxJ1FFrUDN1Y0CvhLbjmYbkJMNqWyCe1=s83-c-mo" alt="Jose Martins"/>
            <div>
              <strong>Jose Martins</strong>
              <span>Teste</span>
            </div>
          </header>

          <p>
              asdasdasdasdasdasdasdasdasdasd
              asdasdasdasdasdasdasdasdasdasddasdasd
              asdasdasdasdasdasdasdasdasdasddasdasddsa
              das
              dasdsad
              sadsadsadasdsa
              dasdasd
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 18,00</strong>
            </p>
            <a target="_blank"  href={`https://wa.me/`} type="button">
              <img src={whatsappIcon} alt="Icone whatsapp"/>
              Entrar em contato
            </a>            
          </footer>
      </article>
      </main>
    </div>
  )
}

export default ProviderList;