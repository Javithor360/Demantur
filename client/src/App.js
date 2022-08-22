//Hooks
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

// Pages
import {
  AccountsPage,
  CheckingAccount,
  IndexPage,
  SavingsAccount,
  AccountsForm,
  HelpPage,
  CardsPage,
  DemanturClassic,
  DemanturGold,
  DemanturPlatinum,
  DebitCard,
  ContactPage,
  SelectAccountPage,
  RegisterNormalUserPage,
  LoansPage,
  BusinessLoan,
  PersonalLoan,
  HouseLoan,
  InfoEmpre,
  BlackCard,
  AboutUs,
  TermsandConditions,
  LoginNormalUserPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  VerifyEmailPage,
  Error404,
  EmployeeLoginPage,
  AdminLoginPage
} from "./pages/static";

import { DashboardNormalUser, CreateSavingAcc } from "./pages/private/index";
import { DashboarEmple } from "./pages/private/employee/index";
import { AdminDashboard } from './pages/private/admin/index'
// routers
import {
  AuthValidate,
  OutAuthValidate,
  FirstLogVal,
  StartingValidate,
  EmployeeValidate,
  AdminValidate
} from "./routers/indexRoutesDash";

//contexts
import { AuthProvider } from "./context/AuthContext";
import { DashProvider } from "./context/DashboardContext";
import { EmployeeProvider } from "./context/EmployeeContext";

// Componentes
import { ScrollToTop } from "./components/";

// Translator
import "./libs/i18n";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DashProvider>
          <EmployeeProvider>
            {/* Funciones */}
            <ScrollToTop />
            <Routes>
              {/* Rutas Basicas */}
              <Route path="/" element={<Navigate to="/index" replace />} />
              <Route path="*" element={<Error404 />} />

              {/* Ruta Index */}
              <Route path="/index" element={<IndexPage />} />

              {/* AboutUs */}
              <Route path="/about" element={<AboutUs />} />

              {/* Términos y condiciones */}
              <Route path="/terms" element={<TermsandConditions />} />

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
              <Route path="/cards/black" element={<BlackCard />} />

              {/* Rutas de la autentificacion */}
              <Route path="/auth" element={<SelectAccountPage />} />
              <Route path="/auth/normal-user/" element={<SelectAccountPage />} />
              <Route
                path="/auth/normal-user/login"
                element={
                  <OutAuthValidate>
                    <LoginNormalUserPage />
                  </OutAuthValidate>
                }
              />
              <Route
                path="/auth/normal-user/register"
                element={
                  <OutAuthValidate>
                    <RegisterNormalUserPage />
                  </OutAuthValidate>
                }
              />
              <Route
                path="/auth/forgot-password"
                element={
                  <OutAuthValidate>
                    <ForgotPasswordPage />
                  </OutAuthValidate>
                }
              />
              <Route
                path="/auth/reset-password/:resetToken"
                element={
                  <OutAuthValidate>
                    <ResetPasswordPage />
                  </OutAuthValidate>
                }
              />
              <Route
                path="/auth/verify-email"
                element={
                  <OutAuthValidate>
                    <VerifyEmailPage />
                  </OutAuthValidate>
                }
              />

              <Route path="/auth/employee/login" element={
                <EmployeeLoginPage />
              } />

              <Route path="/auth/admin/login" element={<AdminLoginPage />} />

              {/*Rutas de "/loans"*/}
              <Route path="/loans" element={<LoansPage />} />
              <Route path="/loans/BusinessLoan" element={<BusinessLoan />} />
              <Route path="/Loans/PersonalLoan" element={<PersonalLoan />} />
              <Route path="/Loans/HouseLoan" element={<HouseLoan />} />

              {/* test dashboard */}
              <Route path="/admin/home" element={
                <AdminValidate>
                  <AdminDashboard />
                </AdminValidate>
              } />


              <Route path="/employee/home" element={
                <EmployeeValidate>
                  <DashboarEmple />
                </EmployeeValidate>
              } />
              <Route
                path="/dashboard"
                element={
                  <AuthValidate>
                    <FirstLogVal>
                      <DashboardNormalUser />
                    </FirstLogVal>
                  </AuthValidate>
                }
              />
              <Route
                path="/normal-user/starting"
                element={
                  <AuthValidate>
                    <StartingValidate>
                      <CreateSavingAcc />
                    </StartingValidate>
                  </AuthValidate>
                }
              />
            </Routes>
          </EmployeeProvider>
        </DashProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
