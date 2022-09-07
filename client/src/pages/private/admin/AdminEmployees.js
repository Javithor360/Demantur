import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../assets/scss/AdminEmploye.scss"
export const AdminEmployees = () => {
  const [Names, setNames] = useState('');
  const [LastNames, setLastNames] = useState('');
  const [DuiNumber, setDuiNumber] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const [Success, setSuccess] = useState(false);
  const [Error, setError] = useState('');

  useEffect(() => {
    if (Success === true) {
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
  }, [Success])

  useEffect(() => {
    if (Error !== '') {
      setTimeout(() => {
        setError('');
      }, 10000);
    }
  }, [Error])

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:4000/api/accounts/create/employee', { FirstNames: Names, LastNames, Dui: DuiNumber, Email, Password });

      setSuccess(true);
    } catch (error) {
      console.error(error);
      setError(error.response.data.error);
    }
  }

  return (
    <div className='h-full w-full bg-white rounded-xl p-3'>
      <h1 className='tittlex'>Generar cuenta de empleado</h1>
      {
        Success !== false && Success &&
        <div className='text-center	w-full'>
          <p className='text-green-500'>Empleado creado PE</p>
        </div>
      }
      {
        Error !== '' &&
        <h6 className='text-red-500 flex justify-center mb-[2rem]'>{Error}</h6>
      }
      <div className='flex justify-center'>
        <form onSubmit={handleForm} className="flex justify-center flex-col w-[30%]">
          <div className='formv'>
          <input className='inputv' type="text" name="Names" id="Names" onChange={(e) => { setNames(e.target.value) }} value={Names} />
          <label className='labelv' htmlFor="Names">Nombres</label>
          </div>
          <div className='formv'>
          <input className='inputv' type="text" name="LastNames" id="LastNames" onChange={(e) => { setLastNames(e.target.value) }} value={LastNames} />
          <label className='labelv' htmlFor="Names">Apellidos</label>
          </div>
          <div className='formv'>
          <input className='inputv' type="text" name="DuiNumber" id="DuiNumber" onChange={(e) => { setDuiNumber(e.target.value) }} value={DuiNumber} />
          <label className='labelv' htmlFor="Names">Número de DUI</label>
          </div>
          <div className='formv'>
          <input className='inputv' type="text" name="Email" id="Email" onChange={(e) => { setEmail(e.target.value) }} value={Email} />
          <label className='labelv' htmlFor="Names">Correo electrónico</label>
          </div>
          <div className='formv'>
          <input className='inputv' type="text" name="Password" id="Password" onChange={(e) => { setPassword(e.target.value) }} value={Password} />
          <label className='labelv' htmlFor="Names">Contraseña</label>
          </div>

          <button type="submit" className='my-[2rem] w-[40%]'>Crear empleado</button>
        </form>
      </div>
    </div>
  )
}
