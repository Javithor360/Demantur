//styles
import '../assets/scss/register_page.scss'

// components
import { FooterAuth, RegisterStepper, Navbar, StepsInfo, RegisterCard } from '../../../components'
import { DatosPersonales, Identificacion, DatosMonetarios, Beneficiario } from '../../../components/registerSteps'

//context hook
import { useAuth } from '../../../context/AuthContext'

export const RegisterNormalUserPage = () => {
  const { page } = useAuth()

  const displayPages = () => {
    switch (page) {
      case 1: return <DatosPersonales />;
      case 2: return <Identificacion />;
      case 3: return <DatosMonetarios />;
      case 4: return <Beneficiario />;
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
            <RegisterStepper />
            <div className='line'></div>

            <div className='steps-render'>

              {StepsInfo()}

              <div className='line-x'></div>

              {displayPages()}
            </div>
          </div>

          {RegisterCard()}
        </div>
      </div>
      <FooterAuth />
    </>
  )
}
