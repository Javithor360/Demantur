import { useState } from 'react';
import axios from 'axios';
import './css/ForgotPasswordScreen.css';

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const ForgotPasswordHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json"
            }
        };

        try {
            const { data } = await axios.post('/api/auth/forgotpassword', { email }, config);
            setSuccess(data.data);
        } catch (error) {
            setError(error.response.data.error);
            setEmail('');

            setTimeout(() => {
                setError('');
            }, 5000)
        }
    }

    return (
        <div className='forgotpassword-screen'>
            <form onSubmit={ForgotPasswordHandler} className='forgotpassword-screen__form'>
                <h3 className='forgotpassword-screen__title'>¿Olvidaste tu contraseña?</h3>
                {error && <span className='error-message'>{error}</span>}
                {success && <span className='success-message'>{success}</span>}
                <div className='form-group'>
                    <p>Por favor ingrese su correo electronico, se le enviara un email para confirmar su identidad</p>
                    <label htmlFor='email'>Correo Electronico:</label>
                    <input type='email' required id='email' placeholder='Escriba su correo' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type='submit' className='btn btn-primary'>Enviar Correo</button>
            </form>
        </div>
    )
}

export default ForgotPasswordScreen