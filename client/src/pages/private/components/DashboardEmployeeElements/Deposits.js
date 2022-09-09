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
            toggle();
        } catch (error) {
            console.error(error);
            setError(error.response.data.error);
        }
    }

    return (
        <div className='h-full w-full bg-white rounded-xl p-3 overflow-hidden'>


            <h1 className='text-center mb-[2rem] mt-3'>Efectuar depósito</h1>
            {
                Error !== '' && Error &&
                <div className='text-center	w-full'>
                    <p className='text-red-500'>{Error}</p>
                </div>
            }
            {
                Success !== false && Success &&
                <div className='text-center	w-full'>
                    <p className='text-green-500'>Transaccion realizada correctamente</p>
                </div>
            }
            <div className='mx-auto container-deposits border-cover-2 rounded-lg'>
                <form onSubmit={handleForm} className='flex flex-col w-full rounded-lg h-fit'>
                    {/* <div className='hola-deposits rounded-tl-lg rounded-tr-lg'></div> */}
                    <div className='flex flex-col w-full'>
                        <div className='w-full mx-auto text-center h-fit mb-4 flex flex-col justify-center items-center'>
                            <label className='mt-[1.9rem] text-[1.2rem] font-semibold mb-2 text-[#323643]' htmlFor="AccNumber">Número de cuenta:</label>
                            {/* <hr className='separatee__1 mb-3' /> */}
                            <Cleave className='w-[70%] border-none outline-none px-2' options={{ numericOnly: true }} id="AccNumber" name='AccNumber' onChange={(e) => { setAccNumber(e.target.value) }} value={AccNumber} autoComplete='off' />
                        </div>
                        <div className='w-full mx-auto text-center h-fit flex flex-col justify-center items-center'>
                            <label className='mt-3 text-[1.2rem] font-semibold mb-2 text-[#323643]' htmlFor="Amount">Monto a depositar:</label>
                            {/* <hr className='separatee__1 mb-3 h-[.2rem]' /> */}
                            <Cleave className='w-[70%] border-none outline-none px-2' options={{ numeral: true, numeralThousandsGroupStyle: 'thousand' }} id="Amount" name='Amount' onChange={(e) => {
                                if (e.target.value !== '') {
                                    setAmount(parseFloat(e.target.value.replace(/,/g, '')))
                                }
                            }} value={Amount} autoComplete='off' />
                        </div>
                    </div>
                    <div className='min-h-[5rem] w-[100%] mt-[2rem]'>
                        <button type="submit" className='mx-auto block my-auto btn-deposits-employee'>Realizar depósito</button>
                    </div>

                </form>
            </div>

            {toggle &&
                <Modal active={active} toggle={toggle} onRequestClose={toggle}>
                    <ConfirmAction props={formData} setActive={setActive} setSuccess={setSuccess} toggle={toggle} />
                </Modal>
            }
        </div>
    )
}
