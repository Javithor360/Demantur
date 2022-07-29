import '../assets/scss/Contacts_main.scss'

export const Contacts = () => {
  return (
    <div className="contacts-main-div h-100 flex justify-between">
      <div className='divs-contact contacts-big-div  w-[60%]'>
        <h2 className='text-gray-500'>Tus Contactos</h2>
      </div>
      <div className='divs-contact contacts-small-div w-[37%]'>
        <h2 className='text-gray-500'>Agregar Contacto</h2>
      </div>
    </div>
  )
}
