import { useState } from 'react'
import { useDash } from '../../../../context/DashboardContext';
import '../DashElements/TransactionsComponents/scss/settings.scss'

export const EmailCode = ({ setSwitchValue, Email }) => {
  const { EmailCodeVer, Info, CancelChangeEmail, Option, setOption } = useDash()

  const [Code, setCode] = useState(null);
  const [Error, setError] = useState(null);

  const SetTheError = (Error) => {
    setError(Error)
    setTimeout(() => {
      setError(null)
    }, 5000);
  }

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await EmailCodeVer(localStorage.getItem('authToken'), Code, Email)
      if (res.response?.data?.error !== undefined) {
        SetTheError(res.response.data.error)
      } else {
        setSwitchValue(6);
        Info.Email = Email;
        Info.ChangeEmailCode = undefined;
        setOption(Option)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const CancelThing = async () => {
    try {
      await CancelChangeEmail(localStorage.getItem('authToken'), Info.ChangeEmailCode);
      Info.ChangeEmailCode = undefined;
      setSwitchValue(1);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleForm} className='w-100 h-fit'>
      <span className='text-foto-de-perfil text-[#4E5364]'>Cambio de Email</span>
      {Error && <h4 className="text-red-500 my-2 p-0 text-[1.125rem]">{Error}</h4>}
      {!Error && <h4 className="text-green-400 text-center my-2 p-0 text-[1.125rem]">Email Enviado</h4>}
      <div className="input-class-3 w-100 mt-4">
        <input value={Code} onChange={(e) => setCode(e.target.value)} type='text' id='Nombres' name='Nombres' placeholder=' ' autoComplete='off' className='input-form-3' />
        <label htmlFor="Nombres" className='label-form'>Codigo</label>
      </div>
      <div className="flex flex-col h-fit">
        <button className={`w-[7rem] h-[2.3rem] rounded-[0.25rem] border-none text-white mx-auto mt-4 ${Error ? 'bg-[#C90000]' : 'bg-[#323643] hover:bg-[#3f4452]'}`} type="submit">Enviar</button>
        <button className="boton-settings2 mx-auto" onClick={() => { CancelThing() }}>Regresar</button>
      </div>
    </form>
  )
}
