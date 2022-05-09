import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css/LoginScreen.css';

const LoginScreen = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (localStorage.getItem('authToken')) {
            history.push('/');
        }
    }, [history]);

    const loginHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }

        try {
            const { data } = await axios.post('/api/auth/login', { email, password }, config)

            localStorage.setItem('authToken', data.token);

            history.push('/');
        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError('');
            }, 5000)
        }
    }


    return (
        <div className='login-screen'>
            <form onSubmit={loginHandler} className='login-screen__form'>
                <h3 className='login-screen__title'>Inicio de sesion</h3>
                {error && <span className='error-message'>{error}</span>}

                <div className="form-group">
                    <label htmlFor="email">Correo Electronico</label>
                    <input type="email" required id='email' placeholder='Ingrese su correo electronico' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" required id='password' placeholder='Escriba su contraseña' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type='submit' className='btn btn-primary'>Iniciar sesion</button>

                <span className='login-screen__subtext'>¿No tienes una cuenta? <Link to='/register'>Registrarse</Link></span>
            </form>
        </div>
    )

}

export default LoginScreen;