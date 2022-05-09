import { useState, useEffect } from 'react';
import axios from 'axios';


const PrivateScreen = ({ history }) => {
    const [error, setError] = useState('');
    const [privateData, setPrivateData] = useState('');

    useEffect(() => {
        if (!localStorage.getItem('authToken')) {
            window.history.pushState({}, undefined, "/login");
        }

        const fetchPrivateData = async () => {
            const config = {
                Headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`
                }
            }

            try {
                const { data } = await axios.get('/api/private', config);

                setPrivateData(data.data);
            } catch (error) {
                localStorage.removeItem('authToken');
                setError('Todavia no has iniciado sesion')
            }
        }

        fetchPrivateData()
    }, [history]);

    const logoutHandler = () => {
        localStorage.removeItem('authToken');
        window.history.pushState({}, "/login");
    }

    return (
        error ? <span className='error-message' >{error}</span> : <>
            <div style={{ background: 'green', color: 'white' }}>{privateData}</div>
            <button onClick={logoutHandler}>Cerrar Sesion</button>
        </>
    )
}

export default PrivateScreen