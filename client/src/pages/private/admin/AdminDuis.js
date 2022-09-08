import axios from 'axios';
import Cleave from 'cleave.js/react';
import e from 'cors';
import React, { useState } from 'react'
import "../assets/scss/AdminDuis.scss"
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

      <h1 className='tittlex'>Agregar DUI a la base de datos</h1>
      {
        Success !== false && Success &&
        <div className='text-center	w-full'>
          <p className='text-green-500'>DUI AGREGADO PE</p>
        </div>
      }
      <div className='content-admin'>
      <form onSubmit={handleForm} className='flex flex-col w-[30%] justify-center m-auto'>
        <div className='content-ad'>
        <div className='formx'>
        <input className='inputz' placeholder='' type="text" id="Names" name="Names" onChange={(e) => { setNames(e.target.value) }} value={Names} />
        <label htmlFor="Names" className='labelz'>Nombres </label>
          </div>
        <div className='formx'>
        <input className='inputz' placeholder='' type="text" id="LastNames" name="LastNames" onChange={(e) => { setLastNames(e.target.value) }} value={LastNames} />
        <label className='labelz' htmlFor="LastNames">Apellidos </label>
        </div>
        <div className='formx'>
        <Cleave className='inputz' placeholder='' type="text" id="DuiNumber" name="DuiNumber" onChange={(e) => { setDuiNumber(e.target.value) }} value={DuiNumber} options={{ blocks: [6, 1], delimiter: "-", numericOnly: true }} />
        <label className='labelz' htmlFor="DuiNumber">Número de DUI </label>
        </div>
        <div className='formx'>
        <Cleave id='date' name='date' placeholder=' ' options={{ date: true, timePattern: ['Y', 'm', 'd'] }} onChange={(e) => { setBirth(e.target.value) }} value={Birth} autoComplete='off' className='input-form' />
        <label className='labelz' htmlFor="Birth">Fecha de nacimiento </label>
        </div>
        </div>
        <button type="submit" className='style-buttonx mt-[3rem]'>Agregar DUI</button>
      </form>
      </div>
    </div>
  )
}
