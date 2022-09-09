import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import { FooterAuth } from '../../../components'
import { useAuth } from '../../../context/AuthContext';
import "../assets/scss/employeelogin.scss";
import { useTranslation } from "react-i18next";
import { VscLoading } from 'react-icons/vsc'

export const EmployeeLoginPage = () => {
    const { t } = useTranslation();
    let navigate = useNavigate();
    const { configPublic } = useAuth();

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Chargin, setChargin] = useState(false);
    const [Error, setError] = useState('');

    const handleForm = async(e) => {
        e.preventDefault();
        try {
            setChargin(true);     
            const data = await axios.post('http://localhost:4000/api/auth/employee/login', { Email, Password }, configPublic);
            if(data) {
                localStorage.setItem('employeeToken', data.data.token)
                setTimeout(() => {
                    setChargin(true);
                    navigate('/employee/home');
                }, 3000)
            }
            console.log(data);
        } catch (error) {
            setError(error.response.data.error);
            setChargin(false);
        }
    }

  return (
    <>
   <div className='h-[100vh] flex flex-col justify-between relative'>
            <div className='w-full h-full flex flex-row'>
                <div className='min-w-[70%] h-full flex flex-col items-center'>
                    <h1 className='titu'>Bienvenido al panel de empleado</h1>
                    <div className='formt flex justify-center'>
                        <form className="mt-4" onSubmit={handleForm}>
                            <h2 className='subtitlet'>Inicio de sesión</h2>
                            {Error !== '' && <h5 className='err'>{Error}</h5>}
                            <div className='request flex flex-col justify-center items-center'>
                                <div className='formc'>
                                <input className='inputs' placeholder='' type="text" id="Email" name='Nombres' onChange={(e) => {setEmail(e.target.value)}} value={Email} />
                                <label className='labelt' htmlFor="Email">{t("loginemple.email")}</label>
                                </div>
                                <div className='formc'>
                                <input className='inputs' placeholder='' type="password" id="Password" name='Password' onChange={(e) => {setPassword(e.target.value)}} value={Password} />
                                <label className='labelt' htmlFor="Email">{t("loginemple.password")}</label>
                                </div>
                            </div>
                            <button type='submit' className='style-buttont mx-auto block' disabled={Chargin}>
                            {
                                Chargin === true ?
                                <>
                                    <VscLoading className="animate-spin" />
                                </>
                                :
                                <>
                                    <span>Inicia Sesión</span>
                                </>
                            }
                            </button>
                        </form>
                    </div>
                </div>
                <div className='w-[30%] banerts'></div>
            </div>
            <FooterAuth className="absolute bottom-0" />
        </div>
    </>

  )
}
