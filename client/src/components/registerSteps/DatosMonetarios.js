import { useEffect, useState } from 'react'
import { StepperButtons } from '../StepperButtons'
import axios from 'axios'
import { Dropdown } from '../Dropdown';

import { useAuth } from '../../context/AuthContext';

import { AiOutlineCloudUpload as CloudIcon, AiOutlineCloud as SuccesClud } from 'react-icons/ai'

export const DatosMonetarios = () => {
  const { nextButton, setstateOfStep3, setstateOfStep4, page, setError,
    LaboralSituation, setLaboralSituation, WorkPlace, setWorkPlace, Salary, setSalary,
  } = useAuth()

  const [Image, setImage] = useState();
  const [ImageName, setImageName] = useState('');
  const elementsLaboralStatus = ['Asalariado', 'Desempleado', 'Estudiante', 'Emprendedor',]
  const elementsSalary = ['0 - 300', '300 - 700', '700 - 1200', '1200 en adelante',]

  useEffect(() => {
    if (page === 3) {
      setstateOfStep3('focus');
      setstateOfStep4('unfocus');
      setError('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (ImageName !== '') {
      let NameFinal = ImageName

      function file_extension(filename) {
        return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined;
      }
      let fileExtension = file_extension(ImageName);
      NameFinal = ImageName.trim()

      if (NameFinal.includes('.' + fileExtension)) {
        NameFinal = NameFinal.replace(`.${fileExtension}`, '')
      }

      if (NameFinal.length >= 12) {
        NameFinal = NameFinal.substring(0, 12)
      }

      setImageName(NameFinal + (NameFinal.length >= 12 ? '...' : '.') + fileExtension);
    }

  }, [ImageName])

  const handleChangeFile = (e) => {
    if (e.target.files.length !== 0) {
      setImageName(e.target.files[0].name);
      setImage(e.target.files[0])
    } else {
      setImageName('');
    }
  }


  const handleForm = async (e) => {
    e.preventDefault()

    try {
      const DatosForm = { LaboralSituation, WorkPlace, Salary, Image: Image }

      const form = new FormData();

      for (let key in DatosForm) {
        form.append(key, DatosForm[key])
      }

      const { data } = await axios.post('http://localhost:4000/api/auth/normal-user/register-part-3', form, { headers: { 'Content-Type': 'multipart/form-data' } })

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
            <Dropdown setElement={setLaboralSituation} elements={elementsLaboralStatus} Elemento={LaboralSituation} />
          </div>
          <div className="input-class">
            <Dropdown setElement={setSalary} elements={elementsSalary} Elemento={Salary} />
          </div>
          <div className="input-class">
            <input type='text' id='LugarTrabajo' name='LugarTrabajo' placeholder=' ' onChange={(e) => setWorkPlace(e.target.value)} value={WorkPlace} autoComplete='off' className='input-form' />
            <label htmlFor="LugarTrabajo" className='label-form'>Lugar de Trabajo</label>
          </div>
          <div className="input-class ">
            <div className="input-form input-file">
              <input type='file' accept='image/*' id='Constancia' name='Constancia' placeholder=' ' onChange={handleChangeFile} autoComplete='off' />
              <label htmlFor="Constancia" className='label-form'>{ImageName === '' ? 'Constancia Laboral' : ImageName}</label>
              {ImageName === '' ? <CloudIcon className='CloudIcon' /> : <SuccesClud className='CloudIcon' />}
            </div>
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
