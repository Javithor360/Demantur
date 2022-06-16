import { Routes, Route, Navigate } from "react-router-dom";
import { AccountsPage, CheckingAccount, IndexPage, SavingsAccount, HelpPage, CardsPage, ContactPage } from "./pages/static";
import { DemanturClassic, DemanturGold, DemanturPlatinum } from "./pages/static/CreditCardsPages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/index" replace />} />
      <Route path="*" element={<h1>error 404</h1>} />

      <Route path="/index" element={<IndexPage />} />
      <Route path="/accounts" element={<AccountsPage />} />
      <Route path="/accounts/checking" element={<CheckingAccount />} />
      <Route path="/accounts/savings" element={<SavingsAccount />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/cards" element={<CardsPage />} />
      <Route path="/cards/classic" element={<DemanturClassic />} />
      <Route path="/cards/gold" element={<DemanturGold />} />
      <Route path="/cards/platinum" element={<DemanturPlatinum />} />
      <Route path="/contact" element={<ContactPage />} />
      
    </Routes>
  );
};

export default App;
