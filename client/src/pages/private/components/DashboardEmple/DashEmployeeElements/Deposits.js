import axios from 'axios';
import { useState } from 'react';
import { useEmpConx } from '../../../../../context/EmployeeContext';

export const Deposits = () => {

    const { Info } = useEmpConx();

    const [AccNumber, setAccNumber] = useState('');
    const [Amount, setAmount] = useState('');
    const [Error, setError] = useState('');

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            const data = await axios.post('http://localhost:4000/api/requests/deposit', { AccountNumber: AccNumber, Amount, Accountable: Info._id });
            console.log(data);
        } catch (error) {
            console.error(error);
            setError(error.response.data.error);
        }
    }

    return (
        <div className='h-full w-full bg-white rounded-xl p-3'>

            {Error !== '' && Error}

            <h1 className='text-center mb-[4rem]'>Efectuar depósito</h1>

            <div className='mx-[25rem]'>
                <form onSubmit={handleForm} className='flex flex-col'>
                    <label htmlFor="AccNumber">Número de cuenta</label>
                    <input type="number" id="AccNumber" name='AccNumber' onChange={(e) => { setAccNumber(e.target.value) }} value={AccNumber} />

                    <label htmlFor="Amount">Monto a depositar</label>
                    <input type="number" id="Amount" name='Amount' onChange={(e) => { setAmount(e.target.value) }} value={Amount} />

                    <button type="submit" className='mt-[2rem] mx-[5rem]'>Realizar depósito</button>
                </form>
            </div>
        </div>
    )
}
