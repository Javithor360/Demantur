import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import { FooterAuth } from '../../../components'
import { useAuth } from '../../../context/AuthContext';
import "../assets/scss/employeelogin.scss";
import { useTranslation } from "react-i18next";
export const EmployeeLoginPage = () => {
    const { t } = useTranslation();
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
    <h1 className='titlex'>{t("loginemple.tittle")}</h1>
    <div className='banerts'></div>
    <div className='content-formt'>
    <form onSubmit={handleForm}>
        <div className='form-info'>
            <h1 className='ti'>{t("login.logins.tittle2")}</h1>
            {Error !== '' && <h5 className='err'>{Error}</h5>}
       <div className='requestd'>
        <div className='formc'>
        <input className='inputs' placeholder='' type="text" id="Email" name='Nombres' onChange={(e) => {setEmail(e.target.value)}} value={Email} />
        <label className='labelt' htmlFor="Email">{t("loginemple.email")}</label>
        </div>
        <div className='formc'>
        <input className='inputs' placeholder='' type="password" id="Password" name='Password' onChange={(e) => {setPassword(e.target.value)}} value={Password} />
        <label className='labelt' htmlFor="Email">{t("loginemple.password")}</label>
        </div>
        </div> 
       </div>
        <button className='buttonx' type='submit'>{t("login.logins.tittle2")}</button>
        
    </form>
    </div>
    <FooterAuth />
    </>

  )
}
