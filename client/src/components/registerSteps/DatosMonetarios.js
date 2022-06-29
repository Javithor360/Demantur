import { useEffect, useState } from 'react'
import { StepperButtons } from '../StepperButtons'
import axios from 'axios'
import { Dropdown } from '../Dropdown';

import { useAuth } from '../../context/AuthContext';

export const DatosMonetarios = () => {
  const { nextButton, setstateOfStep3, setstateOfStep4, page, configPublic, setError,
    LaboralSituation, setLaboralSituation, WorkPlace, setWorkPlace, Salary, setSalary,
  } = useAuth()

  const [Image, setImage] = useState('')
  const [SelectDrop, setSelectDrop] = useState('');
  const elements = ['Asalariado', 'Desempleado', 'Estudiante', 'Emprendedor',]

  useEffect(() => {
    if (page === 3) {
      setstateOfStep3('focus');
      setstateOfStep4('unfocus');
      setError('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleForm = async (e) => {
    e.preventDefault()

    try {

      const { data } = await axios.post('http://localhost:4000/api/auth/normal-user/register-part-3', { LaboralSituation, WorkPlace, Salary }, configPublic)

      localStorage.setItem('ThirdPartForm', JSON.stringify(data.data));

      if (data) {
        setstateOfStep3('complete')
        nextButton()
        setError("");
      }

    } catch (error) {
      setError(error.response.data.error);
      if (error.response.data.error) {
        setstateOfStep3('error')
      }
    }

  }

  return (
    <>
      <form onSubmit={handleForm} className='steps-form'>
        <div className='step-inputs'>
          <div className="input-class">
            {/* <input placeholder=' ' id='Laboral' name='Laboral' onChange={(e) => setLaboralSituation(e.target.value)} value={LaboralSituation} autoComplete='off' className='input-form' /> */}
            {/* <label htmlFor="Laboral" className='label-form'>Situación Laboral</label> */}
            <Dropdown setSelectDrop={setSelectDrop} elements={elements} setLaboralSituation={setLaboralSituation} SelectDrop={SelectDrop} />
          </div>
          <div className="input-class">
            <input placeholder=' ' id='Salario' name='Salario' onChange={(e) => setSalary(e.target.value)} value={Salary} autoComplete='off' className='input-form' />
            <label htmlFor="Salario" className='label-form'>Salario</label>
          </div>
          <div className="input-class">
            <input type='text' id='LugarTrabajo' name='LugarTrabajo' placeholder=' ' onChange={(e) => setWorkPlace(e.target.value)} value={WorkPlace} autoComplete='off' className='input-form' />
            <label htmlFor="LugarTrabajo" className='label-form'>Lugar de Trabajo</label>
          </div>
          <div className="input-class">
            <input type='file' id='Constancia' name='Constancia' placeholder=' ' onChange={(e) => setImage(e.target.value)} value={Image} autoComplete='off' className='input-form' />
            <label htmlFor="Constancia" className='label-form'>Constancia Laboral</label>
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
