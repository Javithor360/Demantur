//Hooks
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

// Pages
import { AccountsPage, CheckingAccount, IndexPage, SavingsAccount, HelpPage, CardsPage, DemanturClassic, DemanturGold, DemanturPlatinum, ContactPage, SelectAccountPage, RegisterNormalUserPage } from "./pages/static";

//contexts
import { AuthProvider } from "./context/AuthContext";

// Componentes
import { ScrollToTop } from './components/'

const App = () => {
  return (
    <BrowserRouter >
      <AuthProvider>
        {/* Funciones */}
        <ScrollToTop />
        <Routes>
          {/* Rutas Basicas */}
          <Route path="/" element={<Navigate to="/index" replace />} />
          <Route path="*" element={<h1>error 404</h1>} />

          {/* Ruta Index */}
          <Route path="/index" element={<IndexPage />} />

          {/* Single Routes */}
          <Route path="/help" element={<HelpPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Rutas de "/accounts" */}
          <Route path="/accounts" element={<AccountsPage />} />
          <Route path="/accounts/checking" element={<CheckingAccount />} />
          <Route path="/accounts/savings" element={<SavingsAccount />} />

          {/* Rutas de "/cards" */}
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/cards/classic" element={<DemanturClassic />} />
          <Route path="/cards/gold" element={<DemanturGold />} />
          <Route path="/cards/platinum" element={<DemanturPlatinum />} />

          {/* Rutas de la autentificacion */}
          <Route path="/auth" element={<SelectAccountPage />} />
          <Route path="/auth/normal-user/" element={<SelectAccountPage />} />
          <Route path="/auth/normal-user/login" element={<SelectAccountPage />} />
          <Route path="/auth/normal-user/register" element={<RegisterNormalUserPage />} />
          <Route path="/auth/forgot-password" element={<SelectAccountPage />} />
          <Route path="/auth/reset-password/:resetToken" element={<SelectAccountPage />} />
          <Route path="/auth/waiting" element={<SelectAccountPage />} />

          {/* test dashboard */}
          <Route path="/dashboard/:usuario/perfil" element={<SelectAccountPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
