import { useState } from "react";
import { useDash } from "../../../../context/DashboardContext";
import '../DashElements/TransactionsComponents/scss/settings.scss'

export const ChangeEmail = ({ setSwitchValue, setEmail }) => {

  const { ChangeEmail, Info } = useDash()

  const [EmailInput, setEmailInput] = useState(null);
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
      const res = await ChangeEmail(localStorage.getItem('authToken'), EmailInput);

      if (res?.response?.data?.error !== undefined) {
        SetTheError(res.response.data.error)
      } else {
        Info.ChangeEmailCode = res.data.data.code
        setEmail(res.data.data.Email)
        setSwitchValue(5)
      }
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <form onSubmit={handleForm} className='w-full h-fit mt-3'>
      <span className="text-foto-de-perfil text-[#4E5364]">Cambio de Email</span>
      {Error && <h4 className="my-2 text-red-500 text-[1rem]">{Error}</h4>}
      <div className="input-class w-100 mt-4">
        <input value={EmailInput} onChange={(e) => setEmailInput(e.target.value)} type='text' id='Nombres' name='Nombres' placeholder=' ' autoComplete='off' className='input-form' />
        <label htmlFor="Nombres" className='label-form'>Nuevo Email</label>
      </div>
      <div className="flex flex-col h-fit">
        <button className={`w-[7rem] h-[2.3rem] rounded-[0.25rem] border-none text-white mx-auto mt-4 ${Error ? 'bg-[#C90000]' : 'bg-[#323643]'}`} type="submit">Enviar</button>
        <button className="boton-settings2 mx-auto" onClick={() => {setSwitchValue(1)}}>Regresar</button>
        {/* <span className={` w-1/2 h-10 mx-auto outline-none text-white border-none mt-4 `} type="submit">Regresar</span> */}
      </div>
    </form>
  )
}
 