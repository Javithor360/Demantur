import { useState } from "react";
import { useDash } from "../../../../context/DashboardContext";
import '../DashElements/TransactionsComponents/scss/settings.scss'

export const ChangePassword = ({ setSwitchValue }) => {

  const { VerifyOldPass, ChangePass, } = useDash()

  const [OldPass, setOldPass] = useState(null);
  const [PasswordInput, setPasswordInput] = useState(null);
  const [ConfPasswordInput, setConfPasswordInput] = useState(null);

  const [HandleElement, setHandleElement] = useState(true);

  const [Error, setError] = useState(null);

  const SetTheError = (Error) => {
    setError(Error)
    setTimeout(() => {
      setError(null)
    }, 5000);
  }

  const handleForm1 = async (e) => {
    e.preventDefault();
    try {
      if (OldPass) {
        const res = await VerifyOldPass(localStorage.getItem('authToken'), OldPass)
        if (res.response?.data?.error === undefined) {
          setHandleElement(false);
        } else {
          SetTheError(res.response.data.error)
        }
      } else {
        SetTheError('Ingrese la Contraseña')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleForm2 = async (e) => {
    e.preventDefault();
    try {
      if (PasswordInput && ConfPasswordInput) {
        if (PasswordInput === ConfPasswordInput) {
          const res = await ChangePass(localStorage.getItem('authToken'), PasswordInput)
          if (res.response?.data?.error === undefined) {
            setSwitchValue(7)
          } else {
            SetTheError(res.response.data.error)
          }
        } else {
          SetTheError('Las contraseñas no son iguales')
        }
      } else {
        console.log(PasswordInput, ConfPasswordInput)
        SetTheError('Ingrese Ambos Valores')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='w-full h-full'>
      <span className="text-foto-de-perfil text-[#4E5364]">Cambio de Contraseña</span>
      {Error && <h4 className="my-2 text-red-500 text-[1rem]">{Error}</h4>}
      {
        HandleElement ?
          <>
            <form onSubmit={handleForm1}>
              <div className="input-class-3 w-100 mt-4">
                <input value={OldPass} onChange={(e) => setOldPass(e.target.value)} type='password' id='Nombres' name='Nombres' placeholder=' ' autoComplete='off' className='input-form-3' />
                <label htmlFor="Nombres" className='label-form'>Contraseña Actual</label>
              </div>
              <button className={`w-[7rem] h-[2.3rem] rounded-[0.25rem] border-none text-white mt-4 ${Error ? 'bg-[#C90000]' : 'bg-[#323643] hover:bg-[#3f4452]'}`} type="submit">Enviar</button>
            </form>

          </>
          :
          <>
            <form onSubmit={handleForm2}>
              <div className="input-class-3 w-100 mt-4">
                <input value={PasswordInput} onChange={(e) => setPasswordInput(e.target.value)} type='password' id='Nombres' name='Nombres' placeholder=' ' autoComplete='off' className='input-form-3' />
                <label htmlFor="Nombres" className='label-form'>Nueva Contraseña</label>
              </div>
              <div className="input-class-3 w-100 mt-4">
                <input value={ConfPasswordInput} onChange={(e) => setConfPasswordInput(e.target.value)} type='password' id='Nombres' name='Nombres' placeholder=' ' autoComplete='off' className='input-form-3' />
                <label htmlFor="Nombres" className='label-form'>Confirmar Contraseña</label>
              </div>
              <button className={`w-[7rem] h-[2.3rem] rounded-[0.25rem] border-none text-white mt-4 ${Error ? 'bg-[#C90000]' : 'bg-[#323643]'}`} type="submit">Enviar</button>
            </form>
          </>
      }
      <div className="h-fit">
        <button className="boton-settings2 mx-auto" onClick={() => {setSwitchValue(1)}}>Regresar</button>
      </div>
    </div>
  )
}
