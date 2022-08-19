import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';

export const EmployeeLoginPage = () => {
    let navigate = useNavigate();
    const { configPublic } = useAuth();

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const [Error, setError] = useState('');

    const handleForm = async(e) => {
        e.preventDefault();
        try {
            const data = await axios.post('http://localhost:4000/api/auth/employee/login', { Email, Password }, configPublic);
            if(data) {
                localStorage.setItem('employeeToken', data.data.token)
                setTimeout(() => {
                    navigate('/employee/home');
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
        <label htmlFor="Email">Correo</label>
        <input type="text" id="Email" name='Nombres' onChange={(e) => {setEmail(e.target.value)}} value={Email} />
        <hr />
        <label htmlFor="Email">Contraseña</label>
        <input type="password" id="Password" name='Password' onChange={(e) => {setPassword(e.target.value)}} value={Password} />
        <hr />  
        <button type='submit'>Enviar</button>
    </form>
    </>

  )
}
