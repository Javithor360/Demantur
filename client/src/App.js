import { Routes, Route, Navigate } from "react-router-dom";
import { AccountsPage, CheckingAccount, IndexPage, SavingsAccount, HelpPage } from "./pages/static";

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
    </Routes>
  );
};

export default App;
