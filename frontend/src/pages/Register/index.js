import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [whatsapp,setWhatsapp] = useState('');
    const [city,setCity] = useState('');
    const [uf,setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

       const data= {
           name,
           email,
           whatsapp,
           city,
           uf,
        } ;
        
        try{
            const response = await api.post('ongs',data);

            alert(`Seu ID de acesso : ${response.data.id} `);

            history.push('/');
        }catch(err){
            alert('Erro no cadastro, tente de novo')
        }
    }
    return (
        <div className="register-container">
           <div className="content">
            <section>
                <img src={logoImg} alt="be the hero"/>
                <h1>cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude a encontrarem casos da sua ONG. </p>

                <Link className="back-link" to="/">
                            <FiArrowLeft size={16} color="#E02141"/>    
                            Não tenho cadastro
                        </Link>

            </section>   
            <form onSubmit={handleRegister}>
                <input value={name}
                 onChange={e => setName(e.target.value)}
                 placeholder="nome da ONG"/>
                <input value={email} 
                onChange={e => setEmail(e.target.value)}
                type="email" placeholder="email"/>
                <input value={whatsapp}
                onChange={e => setWhatsapp(e.target.value)}
                placeholder="whatsapp"/>

                <div className="input-group">
                    <input value={city} 
                    onChange={e => setCity(e.target.value)}
                    placeholder="cidade"/>
                    <input value={uf}
                    onChange={e => setUf(e.target.value)}
                    placeholder="UF" style={{ width:80 }}/>        

                </div>
                <button className="button" type="submit"> Cadastrar</button>
            </form>
            </div> 
        </div>
    )
}