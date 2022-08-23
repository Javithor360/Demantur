import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { FooterAuth } from '../../../components'
import "../assets/scss/formsadmin.scss";

export const AdminLoginPage = () => {
    let navigate = useNavigate();
    const { configPublic } = useAuth();

    const [Name, setName] = useState('');
    const [Password, setPassword] = useState('');

    const [Error, setError] = useState('');

    const handleForm = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post('http://localhost:4000/api/auth/admin/login', { Name, Password }, configPublic);
            if (data) {
                localStorage.setItem('secretToken', data.data.token)
                setTimeout(() => {
                    navigate('/admin/home');
                }, 3000)
            }
            console.log(data);
        } catch (error) {
            setError(error.response.data.error);
        }
    }

    return (
        <>
            {Error !== '' && Error}
            <h1 className='titu'>Bienvenido al panel de administrador</h1><br/><br/><br/>
            <div className='banert'></div>
            <div className='formt'>
            <form onSubmit={handleForm}>
                <h2 className='subtitlet'>Inicio de sesión</h2>
                <div className='request'>
                <label className='label' htmlFor="Username">Nombre de usuario</label><br/>
                <input className='input' type="text" id="Username" name='Username' onChange={(e) => { setName(e.target.value) }} value={Name} />
                <br />
                <label className='label' htmlFor="Email">Contraseña</label><br/>
                <input className='input' type="password" id="Password" name='Password' onChange={(e) => { setPassword(e.target.value) }} value={Password} />
                <br />
                </div>
                <button type='submit' className='style-buttont'>Iniciar sesión</button>
            </form>
            </div>
            <FooterAuth />
        </>

    )
}
