import axios from 'axios';
import Cleave from 'cleave.js/react';
import React, { useState } from 'react'
import { ScrollToTop } from '../../../../components/ScrollToTop';
import { DetailedClientInfo } from './DetailedClientInfo';
import "../assets/scss/Search.scss"

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
                        <div className='content-search'>
                            {Error !== '' && <h5 className='err'>{Error}</h5>}
                            <form onSubmit={handleForm} className="w-full flex flex-row items-center">
                                <div className='flex flex-row w-[100%]'>
                                    <label className='search w-[45%]' htmlFor="Client">Número de DUI</label>
                                    <Cleave className='search-input w-[60%]' placeholder='' type="text" id="Client" name="Client" onChange={(e) => { setClient(e.target.value) }} value={Client} options={{ blocks: [6, 1], delimiter: "-", numericOnly: true }} />
                                </div>
                                <div className='w-[30%]'>
                                    <button className='buttonk' type="submit">Obtener datos</button>
                                </div>

                            </form>
                        </div>
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
