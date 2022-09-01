import axios from 'axios';
import Cleave from 'cleave.js/react';
import e from 'cors';
import React, { useState } from 'react'

export const AdminDuis = () => {
  const [Names, setNames] = useState('');
  const [LastNames, setLastNames] = useState('');
  const [DuiNumber, setDuiNumber] = useState('');
  const [Birth, setBirth] = useState('');


  const [Success, setSuccess] = useState(false);
  const [Error, setError] = useState('');

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:4000/api/admin/actions/create-dui', { DuiFirstNames: Names, DuiLastNames: LastNames, DuiNumber: DuiNumber, DuiDateBirth: Birth })

      setSuccess(true);
    } catch (error) {
      console.error(error);
      setError(error.response.data.error);
    }
  }

  return (
    <div className='h-full w-full bg-white rounded-xl p-3'>

      {Error !== '' && Error}

      <h1>Agregar DUI a la base de datos</h1>
      {
        Success !== false && Success &&
        <div className='text-center	w-full'>
          <p className='text-green-500'>DUI AGREGADO PE</p>
        </div>
      }
      <form onSubmit={handleForm} className='flex flex-col w-[30%] justify-center m-auto'>
        <label htmlFor="Names">Nombres: </label>
        <input type="text" id="Names" name="Names" onChange={(e) => { setNames(e.target.value) }} value={Names} />
        <label htmlFor="LastNames">Apellidos: </label>
        <input type="text" id="LastNames" name="LastNames" onChange={(e) => { setLastNames(e.target.value) }} value={LastNames} />
        <label htmlFor="DuiNumber">Número de DUI: </label>
        <Cleave type="text" id="DuiNumber" name="DuiNumber" onChange={(e) => { setDuiNumber(e.target.value) }} value={DuiNumber} options={{ blocks: [6, 1], delimiter: "-", numericOnly: true }} />
        <label htmlFor="Birth">Fecha de nacimiento: </label>
        <input type="text" id="Birth" name="Birth" onChange={(e) => { setBirth(e.target.value) }} value={Birth} />

        <button type="submit" className='mt-[3rem]'>Agregar DUI</button>
      </form>
    </div>
  )
}
