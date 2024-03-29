import { useEffect, useState } from 'react'
import { StepperButtons } from '../StepperButtons'
import { useTranslation } from "react-i18next";
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';

export const CodeVerify = () => {
  const { t } = useTranslation();
  const { nextButton, page, setstateOfStep5, configPublic, setError, setSuccess, setChargin, Email } = useAuth()
  const [Codigo, setCodigo] = useState('');

  useEffect(() => {
    if (page === 5) {
      setstateOfStep5('finish');
      setSuccess('');
      setChargin(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const handleForm = async (e) => {
    e.preventDefault();

    try {

      const data = await axios.post('http://localhost:4000/api/auth/general-users/verify-email-code', { verifyCode: Codigo, Email }, configPublic)

      if (data) {
        setChargin(true);
        setTimeout(() => {
          setstateOfStep5('chargin')
          setSuccess('Email verificado correctamente');
          localStorage.removeItem('SecondPartForm')
          setTimeout(() => {
            setChargin(false);
            nextButton();
          }, 2000);
        }, 5000);

      }
    } catch (error) {
      setError(error.response.data.error);
      if (error.response.data.error) {
        setstateOfStep5('error')
      }
    }

  }

  return (
    <>
      <form onSubmit={handleForm} className='steps-form code-form'>
        <div className='step-inputs step-code-input'>

          <div className="input-class input-code">
            <input type='text' id='Codigo' name='Codigo' placeholder=' ' onChange={(e) => setCodigo(e.target.value)} value={Codigo} autoComplete='off' className='input-form ' />
            <label htmlFor="Codigo" className='label-form'>{t("login.identification.code")}</label>
          </div>

        </div>
        <div className='line-x'></div>
        <div className='div-buttons-in-step'>
          <StepperButtons />
        </div>
      </form>
    </>
  )
}
