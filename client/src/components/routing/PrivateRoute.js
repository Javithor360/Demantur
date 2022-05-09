import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) =>
            localStorage.getItem("authToken") ? (
                <Component {...props} />
            ) : (
                <Navigate to="/login" />
            )
        }
        />
    );
};

export default PrivateRoute;