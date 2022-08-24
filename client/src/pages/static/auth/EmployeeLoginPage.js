import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import { FooterAuth } from '../../../components'
import { useAuth } from '../../../context/AuthContext';
import "../assets/scss/employeelogin.scss";
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
    <h1 className='titlex'>Bienvenido al panel de empleado</h1>
    <div className='banerts'></div>
    <div className='content-formt'>
    <form onSubmit={handleForm}>
        <div className='form-info'>
       <div className='request'>
       <label className='labelt' htmlFor="Email">Correo</label> <br />
        <input className='inputs' type="text" id="Email" name='Nombres' onChange={(e) => {setEmail(e.target.value)}} value={Email} />
        <br />
        <label className='labelt' htmlFor="Email">Contraseña</label> <br />
        <input className='inputs' type="password" id="Password" name='Password' onChange={(e) => {setPassword(e.target.value)}} value={Password} />
        <br />  
       </div>
        <button className='buttonx' type='submit'>Enviar</button>
        </div>
    </form>
    </div>
    <FooterAuth />
    </>

  )
}
