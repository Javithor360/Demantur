import '../assets/scss/HomePageEmployee.scss'
import { useEmpConx } from '../../../../../context/EmployeeContext';


export const HomePageEmployee = () => {

  const { Info } = useEmpConx();

  return (
    <div className='homepage-employee-container'>
        <p>¡Bienvenido de nuevo {`${Info.FirstNames} ${Info.LastNames}`}!</p>
    </div>
  )
}
