import { createContext, useContext, useState } from "react"
import { useTranslation } from "react-i18next";
// creando el context
const authContext = createContext();

// custom hook del context
export const useAuth = () => {
  const Context = useContext(authContext);
  return Context
}

// funciones del context
export const AuthProvider = ({ children }) => {
  const { t } = useTranslation();
  const configPublic = {
    
    header: {
      "Content-Type": "application/json",
    },
  }

  const pageTitle = [`${t('register.tittle')}`, `${t("register.tittle2")}`, `${t("register.tittle3")}`, `${t("register.tittle4")}`, `${t("register.tittle5")}`]

  const pageInfo = [
    `${t('register.subtittle')}`,
    `${t('register.subtittle2')}`,
    `${t('register.subtittle3')}`,
    `${t('register.subtittle4')}`,
    `${t('register.subtittle5')}`
  ]


  const [page, setPage] = useState(1);
  const [NPName, setNPName] = useState(null);


  const [Error, setError] = useState('');
  const [Success, setSuccess] = useState('');
  const [Chargin, setChargin] = useState(false);


  // CLASS STATES
  const [stateOfStep1, setstateOfStep1] = useState('unfocus');
  const [stateOfStep2, setstateOfStep2] = useState('unfocus');
  const [stateOfStep3, setstateOfStep3] = useState('unfocus');
  const [stateOfStep4, setstateOfStep4] = useState('unfocus');
  const [stateOfStep5, setstateOfStep5] = useState('unfocus');

  // FORM STATES
  const [Nombres, setNombres] = useState('');
  const [Apellidos, setApellidos] = useState('');
  const [DateBirth, setDateBirth] = useState('');
  const [Direccion, setDireccion] = useState('');

  const [Dui, setDui] = useState('');
  const [Number, setNumber] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfPassword, setConfPassword] = useState('');

  const [LaboralSituation, setLaboralSituation] = useState('');
  const [WorkPlace, setWorkPlace] = useState('');
  const [Salary, setSalary] = useState('');

  const [BNombres, setBNombres] = useState('');
  const [BApellidos, setBApellidos] = useState('');
  const [BDui, setBDui] = useState('');
  const [BNumber, setBNumber] = useState('');

  const nextButton = () => {
    let value;
    if (page === 6) {
      value = 6;
      setPage(value)
    } else {
      setPage(page + 1)
    }
  }


  return (
    <authContext.Provider value={{
      configPublic, pageTitle, pageInfo, page, setPage, nextButton,
      stateOfStep1, setstateOfStep1, stateOfStep2, setstateOfStep2, stateOfStep3, setstateOfStep3, stateOfStep4, setstateOfStep4, stateOfStep5, setstateOfStep5,
      Error, setError, Success, setSuccess, Chargin, setChargin,
      Nombres, setNombres, Apellidos, setApellidos, DateBirth, setDateBirth, Direccion, setDireccion,
      Dui, setDui, Number, setNumber, Email, setEmail, Password, setPassword, ConfPassword, setConfPassword,
      LaboralSituation, setLaboralSituation, WorkPlace, setWorkPlace, Salary, setSalary,
      BNombres, setBNombres, BApellidos, setBApellidos, BDui, setBDui, BNumber, setBNumber, NPName, setNPName
    }}>
      {children}
    </authContext.Provider>
  )
}