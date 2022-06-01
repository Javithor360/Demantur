import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./css/RegisterScreen.css";

const RegisterScreen = () => {
    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const registerHandler = async (e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };

        if (password !== confirmpassword) {
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                setError("");
            }, 5000);
            return setError("Las contraseñas no son iguales");
        }

        try {
            const { data } = await axios.post("http://localhost:3000/api/auth/register", { username, email, password, }, config);

            localStorage.setItem("authToken", data.token);

            navigate('/')
        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };

    return (
        <div className="register-screen">
            <form onSubmit={registerHandler} className="register-screen__form">
                <h3 className="register-screen__title">Registro</h3>
                {error && <span className="error-message">{error}</span>}
                <div className="form-group">
                    <label htmlFor="name">Nombre de usuario:</label>
                    <input type="text" required id="name" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electronico:</label>
                    <input type="email" required id="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" required id="password" autoComplete="true" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmpassword">Confirme la contraseña:</label>
                    <input type="password" required id="confirmpassword" autoComplete="true" placeholder="Confirm password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Registrarse</button>

                <span className="register-screen__subtext">¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesion</Link></span>
            </form>
        </div>
    );
};

export default RegisterScreen;