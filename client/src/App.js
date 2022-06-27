//Hooks
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

// Pages
import { AccountsPage, CheckingAccount, IndexPage, SavingsAccount, AccountsForm, HelpPage, CardsPage, DemanturClassic, DemanturGold, DemanturPlatinum, DebitCard, ContactPage, SelectAccountPage, RegisterNormalUserPage, LoansPage, BusinessLoan, PersonalLoan, InfoEmpre } from "./pages/static";

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
          <Route path="/info" element={<InfoEmpre />} />
         

          {/* Rutas de "/accounts" */}
          <Route path="/accounts" element={<AccountsPage />} />
          <Route path="/accounts/checking" element={<CheckingAccount />} />
          <Route path="/accounts/savings" element={<SavingsAccount />} />
          <Route path="/accounts/form" element={<AccountsForm />} />

          {/* Rutas de "/cards" */}
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/cards/classic" element={<DemanturClassic />} />
          <Route path="/cards/gold" element={<DemanturGold />} />
          <Route path="/cards/platinum" element={<DemanturPlatinum />} />
          <Route path="/cards/debito" element={<DebitCard />} />

          {/* Rutas de la autentificacion */}
          <Route path="/auth" element={<SelectAccountPage />} />
          <Route path="/auth/normal-user/" element={<SelectAccountPage />} />
          <Route path="/auth/normal-user/login" element={<SelectAccountPage />} />
          <Route path="/auth/normal-user/register" element={<RegisterNormalUserPage />} />
          <Route path="/auth/forgot-password" element={<SelectAccountPage />} />
          <Route path="/auth/reset-password/:resetToken" element={<SelectAccountPage />} />
          <Route path="/auth/waiting" element={<SelectAccountPage />} />

          {/*Rutas de "/loans"*/}
          <Route path="/loans" element={<LoansPage/>}></Route>
          <Route path="/loans/BusinessLoan" element={<BusinessLoan/>}></Route>
          <Route path="/Loans/BersonalLoan" element={<PersonalLoan/>}></Route>

          {/* test dashboard */}
          <Route path="/dashboard/:usuario/perfil" element={<SelectAccountPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
