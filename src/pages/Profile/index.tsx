import React, {useState, FormEvent} from 'react';
import {useHistory, Link} from 'react-router-dom';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import backIcon from '../../assets/images/icons/back.svg';


import warningIcon from '../../assets/images/icons/warning.svg';
import imageBackground from '../../assets/images/Background.svg';

import './styles.css';
import api from '../../services/api';

function Profile(){
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);


  function addNewScheduleItem(){
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);

  }

  function setScheduleItemValue(position: number, field: string, value: string){
    const updatedSchedule = scheduleItems.map((scheduleItem, index) => {
      if(index === position){
        return {...scheduleItem, [field]: value}
      }

      return scheduleItem;
    })
    setScheduleItems(updatedSchedule);
  }

  function handleCreateClass(e: FormEvent){
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(()=> {
      alert('Cadastro realizado com sucesso!');
      
      history.push('/');
    }).catch(()=> {
      alert('Erro no caddastro!');
    })    
  }

  return(
    <div id="page-profile-form" className="container">
      <header className="page-header">

        <div className="top-bar-container">
          <Link to='landing'> 
            <img src={backIcon} alt="Voltar"/>
          </Link>
          <p>Meu Perfil</p>
          <p>HomeCare</p>
        </div>



        <div className="header-content">
          <img className="image-profile" src="https://scontent.fbsb8-1.fna.fbcdn.net/v/t1.0-9/12295283_1484892031819954_843304737671089864_n.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=dAVwHwRtPeUAX-zrDbN&_nc_ht=scontent.fbsb8-1.fna&oh=b3362562da947d6a2457a91f55c7278e&oe=5F7D6E8E" alt="Joseph Martins"/>
          <h3>Joseph Martins</h3>
          <h5>Cuidador</h5>
        </div>
      </header>

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

              <div className="input-name-last-name">
                <Input 
                  name="name" 
                  label="Nome" 
                  onChange={ (e) => { setWhatsapp(e.target.value) }} 
                />
                <Input 
                  name="lastname" 
                  label="Sobrenome" 
                  onChange={ (e) => { setWhatsapp(e.target.value) }} 
                />
              </div> 
              <div className="input-item">
                <Input 
                  name="email" 
                  label="E-Mail" 
                  value={whatsapp}
                  onChange={ (e) => { setWhatsapp(e.target.value) }} 
                />
                <Input 
                  name="whatsapp" 
                  label="Whatsapp" 
                  value={whatsapp} 
                  onChange={ (e) => { setWhatsapp(e.target.value) }} 
                />
              </div> 

            <Textarea 
              name="bio"
              label="Biografia" 
              value={bio} 
              onChange={ (e) => { setBio(e.target.value) }} 
            />

            
          </fieldset>

          <fieldset>

            <legend>Disponibilidade</legend>
              <Select 
              name="subject" 
              label="Serviço"  
              value={subject}
              onChange={(e) => { setSubject(e.target.value) }}
              options={[
                {value: 'baba', label: 'Babá' },
                {value: 'cuidador', label: 'Cuidador' },
              
              ]}
              />
              <Input 
                name="cost" 
                label="Custo da sua diária"  
                value={cost}
                onChange={(e) => { setCost(e.target.value) }}
              />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <>
                  <div key={scheduleItem.week_day} className="schedule-item">
                    <Select
                      name="week_day" 
                      label="Dia da semana"
                      value={scheduleItem.week_day}
                      onChange={e => setScheduleItemValue(index, 'week_day', e.target.value )}  
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
                      name="from"
                      label="Das"
                      type="time" 
                      value={scheduleItem.from}
                      onChange={e => setScheduleItemValue(index, 'from', e.target.value )}  
                    />
                    <Input 
                      name="to"
                      label="Até"
                      type="time"
                      value={scheduleItem.to}
                      onChange={e => setScheduleItemValue(index, 'to', e.target.value )}  
                    />
                  </div>
                  <div className="separator">Excluir Horário</div>
                </>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Imagem de aviso"/>
              Importante <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default Profile;