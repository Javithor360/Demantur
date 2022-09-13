export const SuccessEmail = ({setSwitchValue}) => {
  return (
    <>
      <div className="text-green-400 text-center my-2 p-0">Email Cambiado Correctamente</div>
      <button className="boton-settings2 mx-auto" onClick={() => {setSwitchValue(1)}}>Regresar</button>
    </>
  )
}
