import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Screens
import PrivateScreen from './components/screens/PrivateScreen';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
import ResetPasswordScreen from './components/screens/ResetPasswordScreen';
import PrivateRoute from './components/routing/PrivateRoute';
import PrivateAuthRoute from './components/routing/PrivateAuthRoute';
import Navbar from './components/Utils/Navbar';


const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
          <Route path="/" element={<PrivateRoute > <PrivateScreen />  </PrivateRoute>} />
          <Route path="/login" element={<PrivateAuthRoute > <LoginScreen />  </PrivateAuthRoute>} />
          <Route path='/register' element={<PrivateAuthRoute ><RegisterScreen /></PrivateAuthRoute>} />
          <Route path='/forgotpassword' element={<PrivateAuthRoute ><ForgotPasswordScreen /></PrivateAuthRoute>} />
          <Route path='/passwordreset/:resetToken' element={<PrivateAuthRoute ><ResetPasswordScreen /></PrivateAuthRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
