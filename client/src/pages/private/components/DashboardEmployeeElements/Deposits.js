import axios from 'axios';
import { useEffect, useState } from 'react';
import { useEmpConx } from '../../../../context/EmployeeContext';
import { ConfirmAction } from './ConfirmAction';
import Modal from '../Modal';
import './assets/scss/DepositsEmployee.scss'
import Cleave from 'cleave.js/react';

export const Deposits = () => {

    const { Info } = useEmpConx();

    const [AccNumber, setAccNumber] = useState('');
    const [Amount, setAmount] = useState('');

    const [Error, setError] = useState('');
    const [Success, setSuccess] = useState(false);
    const [active, setActive] = useState(false);

    const [formData, setFormData] = useState({});

    const toggle = () => {
        setActive(!active)
    }

    useEffect(() => {
        if (active) {
            document.body.style.overflowY = 'hidden'
        }
    }, [active])

    useEffect(() => {
        if (Success === true) {
            setTimeout(() => {
                setSuccess(false);
            }, 5000);
        }
    }, [Success])


    const handleForm = async (e) => {
        e.preventDefault();

        try {
            toggle();

            const res = await axios.post('http://localhost:4000/api/employee/get-user-data', { AccountNumber: AccNumber });
            setFormData(
                {
                    uFullName: `${res.data.data.FirstName} ${res.data.data.LastName}`,
                    uPfp: res.data.data.PerfilPhoto.url,
                    uAcc: AccNumber,
                    eId: Info.EmployeeId,
                    eDbId: Info._id,
                    eFullName: `${Info.FirstNames} ${Info.LastNames}`,
                    client: res.data.data._id,
                    amount: Amount,
                }
            );
        } catch (error) {
            console.error(error);
            setError(error.response.data.error);
        }
    }

    return (
        <div className='h-full w-full bg-white rounded-xl p-3 overflow-hidden'>

            {Error !== '' && Error}

            <h1 className='text-center mb-[4rem]'>Efectuar depósito</h1>
            {
                Success !== false && Success &&
                <div className='text-center	w-full'>
                    <p className='text-green-500'>TRANSACCIÓN HECHA PE</p>
                </div>
            }
            <div className='mx-[25rem] container-deposits'>
                <form onSubmit={handleForm} className='flex flex-col'>
                    <div className='hola-deposits'></div>
                    <label htmlFor="AccNumber">Número de cuenta</label>
                    <hr />
                    <Cleave options={{numericOnly: true}} id="AccNumber" name='AccNumber' onChange={(e) => { setAccNumber(e.target.value) }} value={AccNumber} required />

                    <label htmlFor="Amount">Monto a depositar</label>
                    <hr />
                    <Cleave options={{numericOnly: true}} id="Amount" name='Amount' onChange={(e) => { setAmount(e.target.value) }} value={Amount} required />

                    <button type="submit" className='mt-[2rem] mx-[5rem] btn-deposits-employee'>Realizar depósito</button>
                </form>
            </div>

            <div className='h-[100%] w-[100%] flex items-center'>
                {toggle &&
                    <Modal active={active} toggle={toggle} onRequestClose={toggle}>
                        <ConfirmAction props={formData} setActive={setActive} setSuccess={setSuccess} />
                    </Modal>
                }
            </div>
        </div>
    )
}
