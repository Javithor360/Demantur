//styles
import '../assets/scss/auth-register.scss'

// components
import { FooterAuth, RegisterStepper, Navbar, StepsInfo, RegisterCard } from '../../../components'
import { DatosPersonales, Identificacion, DatosMonetarios, Beneficiario, CodeVerify, SuccessAccount } from '../../../components/registerSteps'

//context hook
import { useAuth } from '../../../context/AuthContext'

export const RegisterNormalUserPage = () => {
  const { page, Error, Success } = useAuth()

  const displayPages = () => {
    switch (page) {
      case 1: return <DatosPersonales />;
      case 2: return <Identificacion />;
      case 3: return <DatosMonetarios />;
      case 4: return <Beneficiario />;
      case 5: return <CodeVerify />;
      case 6: return <SuccessAccount />;
      default: return <DatosPersonales />;
    }
  }

  return (
    <>
      <Navbar />
      <div className='main-div'>
        <h1>Regístrate en la banca en línea</h1>
        <hr className='main-hr' />

        <div className='Container-div'>
          <div className='FormDiv'>
            {/* Stepper */}
            {page < 6 ?
              <>
                <RegisterStepper />
                <div className='line'></div>
                <div className='steps-render'>
                  {StepsInfo()}

                  {Error && <span className='ball-description-error'>{Error}</span>}
                  {Success && <span className='ball-description-complete'>{Success}</span>}
                  <div className='line-x'></div>
                  {displayPages()}
                </div>
              </>
              :
              <>
                {displayPages()}
              </>
            }
          </div>

          {RegisterCard()}
        </div>
      </div>
      <FooterAuth />
    </>
  )
}
