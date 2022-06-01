import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './css/ResetPasswordScreen.css'

const ResetPasswordScreen = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const params = useParams();

    const resetPasswordHandler = async (e) => {
        e.preventDefault();

        const config = {
            Header: {
                "Content-Type": "application/json"
            }

        };
        if (password !== confirmPassword) {
            setPassword('');
            setConfirmPassword('');
            setTimeout(() => {
                setError('');
            }, 5000)
            return setError('Las contraseñas no coinciden');
        }

        try {
            const { data } = await axios.put(`http://localhost:3000/api/auth/resetpassword/${params.resetToken}`, { password }, config);
            console.log(data.data)
            setSuccess(data.data);
        } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError('');
            }, 5000)
        }
    }


    return (
        <div className="resetpassword-screen">
            <form onSubmit={resetPasswordHandler} className="resetpassword-screen__form">
                <h3 className="resetpassword-screen__title">Forgot Password</h3>
                {error && <span className="error-message">{error} </span>}
                {success && (
                    <span className="success-message">
                        {success} <Link to="/login">Login</Link>
                    </span>
                )}

                <div className="form-group">
                    <label htmlFor="password">New Password:</label>
                    <input type="password" required id="password" placeholder="Enter new password" autoComplete="true" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmpassword">Confirm New Password:</label>
                    <input type="password" required id="confirmpassword" placeholder="Confirm new password" autoComplete="true" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Reset Password
                </button>
            </form>
        </div>
    )
}

export default ResetPasswordScreen