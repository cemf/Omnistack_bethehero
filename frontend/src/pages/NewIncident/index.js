import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom'
import { FiArrowLeft} from 'react-icons/fi';
// import { FiTrash2} from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function NewIncident(){
    const[titulo,setTitulo] = useState('');
    const[descricao,setDescricao] = useState('');
    const[valor,setValor] = useState('');
    
    const history = useHistory()
    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            titulo,
            descricao,
            valor,
        };
        try{
            
           await api.post('incidents',data,{
               headers:{
                   Authorization: ongId,
               }
           }) 
           history.push('/profile');

        }catch(err){
            alert('erro ao cadastrar caso, tente novamente')
        }

    }

    return(
    <div className="new-incident-container">
        <div className="content">
        <section>
            <img src={logoImg} alt="be the hero"/>
            <h1>Cadastrar novo caso</h1>
            <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>

            <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02141"/>    
                        Voltar para Home
                    </Link>

        </section>   
        <form onSubmit={handleNewIncident}>
            <input 
                placeholder="Titulo do caso"
                value={titulo}
                onChange={e => setTitulo(e.target.value)}/>
            <textarea 
                placeholder="Descriçao"
                value={descricao}
                onChange={e => setDescricao(e.target.value)}  
            />
  
          <input 
                placeholder="Valor em reais"
                value={valor}
                onChange={e => setValor(e.target.value)}/>
            <button className="button" type="submit"> Cadastrar</button>
        </form>
        </div> 
    </div>
 );
}