import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    if (!localStorage.getItem('authToken')) {
        return <Navigate to='/login' replace />
    }
    return children
};

export default PrivateRoute;