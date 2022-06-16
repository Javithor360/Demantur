//Hooks
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

// Pages
import { AccountsPage, CheckingAccount, IndexPage, SavingsAccount, HelpPage, CardsPage, ContactPage } from "./pages/static";
import { DemanturClassic, DemanturGold, DemanturPlatinum } from "./pages/static/CreditCardsPages";

// Componentes
import { ScrollToTop } from './components/'

const App = () => {
  return (
    <BrowserRouter >
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

      </Routes>
    </BrowserRouter>
  );
};

export default App;
