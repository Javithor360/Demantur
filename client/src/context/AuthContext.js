import { createContext, useContext, useState } from "react"

// creando el context
const authContext = createContext();

// custom hook del context
export const useAuth = () => {
  const Context = useContext(authContext);
  return Context
}

// funciones del context
export const AuthProvider = ({ children }) => {
  const configPublic = {
    header: {
      "Content-Type": "application/json",
    },
  }

  const pageTitle = ['Datos Personales', 'Identificación', 'Datos Monetarios', 'Beneficiario']

  const pageInfo = [
    'Necesitamos tus datos personales para poder identificarte y saber que realmente eres tú',
    'Para crear una cuenta en Demantur necesitas identificarte con estos datos para poder ingresar',
    'Para nuestra logística necesitamos saber tus datos monetarios para ofrecerte nuestros mejores servicios',
    'Si en algún caso sufre algún accidente el beneficiario tendrá derecho a reclamar sus bienes.',
  ]


  const [page, setPage] = useState(1);

  const nextButton = () => {
    let value;
    if (page === 4) {
      value = 4;
      setPage(value)
    } else {
      setPage(page + 1)
    }
  }

  const [stateOfStep1, setstateOfStep1] = useState('unfocus');
  const [stateOfStep2, setstateOfStep2] = useState('unfocus');
  const [stateOfStep3, setstateOfStep3] = useState('unfocus');
  const [stateOfStep4, setstateOfStep4] = useState('unfocus');


  return (
    <authContext.Provider value={{
      configPublic, pageTitle, pageInfo, page, setPage, nextButton,
      stateOfStep1, setstateOfStep1, stateOfStep2, setstateOfStep2, stateOfStep3, setstateOfStep3, stateOfStep4, setstateOfStep4
    }}>
      {children}
    </authContext.Provider>
  )
}