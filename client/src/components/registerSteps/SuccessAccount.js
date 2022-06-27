import { BsFillShieldLockFill as Shield } from 'react-icons/bs'


export const SuccessAccount = () => {
  return (
    <div className='successMessage'>
      <div>
        <h1>¡Solicitud de cuenta enviada satisfactoriamente!</h1>
        <h2>El Email fue verificado exitosamente</h2>
      </div>
      <div className='lineaX'></div>
      <div>
        <span>Gracias por preferir Demantur, nuestros trabajores verificarán sus datos para poder terminar su proceso de registro, por favor espere un correo electronico con la información durante las siguientes 24 horas.</span>
        <Shield />
      </div>
    </div>
  )
}
