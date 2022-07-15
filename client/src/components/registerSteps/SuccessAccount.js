import { IoCheckbox } from 'react-icons/io5'

export const SuccessAccount = () => {
  return (
    <div className='successMessage'>
      <div>
        <h1>¡Solicitud de cuenta enviada satisfactoriamente!</h1>
      </div>
      <div className='lineaX'></div>
      <div className='Text-Box'>
        <span>Gracias por preferir Demantur, nuestros trabajores verificarán sus datos para poder terminar su proceso de registro, por favor espere un correo electronico con la información durante las siguientes 24 horas.</span>
        <IoCheckbox />
      </div>
    </div>
  )
}
