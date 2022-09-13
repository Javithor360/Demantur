import axios from 'axios';
import e from 'cors';
import React, { useEffect, useState } from 'react'
import "../assets/scss/AdminRequest.scss"

export const AdminsRequest = () => {
  const [type, setType] = useState(0);
  const [accNum, setAccNum] = useState('');
  const [Amount, setAmount] = useState('');

  const [Success, setSuccess] = useState(false);
  const [Error, setError] = useState('');

  useEffect(() => {
    if (Success === true) {
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }
  }, [Success]);

  const DisplayForm = () => {
    switch (parseInt(type)) {
      case 0:
        return;
      case 1:
        return (
          <>
            <div className='content-trasac'>
            <div className='content-tras'>
            <div className='formy'>
            <input className='inputy' placeholder='' type="number" name="Amount" id="Amount" onChange={(e) => { setAmount(e.target.value) }} value={Amount} required />
            <label className='labely' htmlFor="Amount">Cantidad a retirar:</label>
            </div>

            <div className='formy'>
            <input className='inputy' placeholder='' type="number" name="AccNum" id="AccNum" onChange={(e) => { setAccNum(e.target.value) }} value={accNum} required />
            <label className='labely' htmlFor="AccNum">Número de cuenta:</label>
            </div>
            </div>

            <button type="submit" className='style-buttony mt-[3rem]'>Simular retiro</button>
            </div>
          </>
        )
      default:
        return;
    }
  }

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setType(0);
      await axios.post('http://localhost:4000/api/admin/actions/withdraw', { AccountNumber: accNum, Amount: Amount });

      setSuccess(true);
    } catch (error) {
      console.error(error);
      setError(error.response.data.error);
    }
  }

  return (
    <div className='h-full w-full bg-white rounded-xl p-3'>

      {Error !== '' && Error}

      <h1 className='tittlex'>Simulador de movimientos bancarios</h1>
      {
        Success !== false && Success &&
        <div className='text-center	w-full'>
          <p className='text-green-500'>RETIRO HECHO PE</p>
        </div>
      }
      <form onSubmit={handleForm} className='flex flex-col w-[30%] justify-center m-auto'>
        <label className='type-tittle'>
          Tipo:
          <select className='selectd' value={type} onChange={(e) => setType(e.target.value)}>
            <option value={0}>Selecciona una opción</option>
            <option value={1}>Retiro de efectivo</option>
          </select>
        </label>
        {DisplayForm()}
      </form>
    </div>
  )
}
