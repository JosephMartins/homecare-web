import React, {useState, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';
import {useHistory} from 'react-router-dom';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../services/api';

function TeacherForm(){
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
    <div id="page-teacher-form" className="container">
      <PageHeader 
      link='landing'
      title="Seja responsável com seus clientes."
      pageTitle="Prestar Serviço"
      description="O primeiro passo é preencher esse formulario de inscrição"
      >
      </PageHeader>

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <div className="form-group-image-input">
              <span>
                <img src="https://scontent.fbsb8-1.fna.fbcdn.net/v/t1.0-9/12295283_1484892031819954_843304737671089864_n.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=dAVwHwRtPeUAX-zrDbN&_nc_ht=scontent.fbsb8-1.fna&oh=b3362562da947d6a2457a91f55c7278e&oe=5F7D6E8E" alt="Joseph Martins"/>
                <p>Joseph Martins</p>
              </span>
              <Input 
                name="whatsapp" 
                label="WhatsApp" 
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

export default TeacherForm;