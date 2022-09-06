import axios from 'axios';
import Cleave from 'cleave.js/react';
import React, { useState } from 'react'
import { ScrollToTop } from '../../../../components/ScrollToTop';
import { DetailedClientInfo } from './DetailedClientInfo';

export const ClientFetch = () => {
    const [Client, setClient] = useState('');
    const [ClientInfo, setClientInfo] = useState({});

    const [Error, setError] = useState('');
    const [DisplayDetails, setDisplayDetails] = useState(false);

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.get("http://localhost:4000/api/employee/get-client-info", { headers: { "DuiNumber": Client, "x-auth-token": localStorage.getItem('employeeToken') } });
            setClientInfo(res.data.data);
            setDisplayDetails(true);
        } catch (error) {
            console.error(error);
            setError(error.response.data.error);
        }
    }

    return (
        <>
            {
                DisplayDetails === false ?
                    <div className='cards-employee flex flex-col px-5 py-5 overflow-x-hidden overflow-y-auto'>
                        <h1 className='text-center'>Buscar información de cliente</h1>
                        {Error !== '' && Error}
                        <form onSubmit={handleForm}>
                            <label htmlFor="Client">Número de DUI</label>
                            <Cleave placeholder='' type="text" id="Client" name="Client" onChange={(e) => { setClient(e.target.value) }} value={Client} options={{ blocks: [6, 1], delimiter: "-", numericOnly: true }} />

                            <button type="submit">Obtener datos</button>
                        </form>
                    </div>
                    :
                    <div className="w-[100%] flex justify-between h-[100%] lg:inline-block">
                        <ScrollToTop />
                        <div className='rounded-[0.72rem] bg-white w-[100%] h-[100%] shadow-lg overflow-y-auto overflow-x-hidden flex justify-center'>
                            <DetailedClientInfo c={ClientInfo} setDisplay={setDisplayDetails} />
                        </div>
                    </div>
            }
        </>
    )
}
