import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';

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
            <form onSubmit={handleForm}>
                <label htmlFor="Username">Nombre de usuario</label>
                <input type="text" id="Username" name='Username' onChange={(e) => { setName(e.target.value) }} value={Name} />
                <hr />
                <label htmlFor="Email">Contraseña</label>
                <input type="password" id="Password" name='Password' onChange={(e) => { setPassword(e.target.value) }} value={Password} />
                <hr />
                <button type='submit'>Enviar</button>
            </form>
        </>

    )
}
