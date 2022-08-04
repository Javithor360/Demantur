
export const ContactsCard = ({ User }) => {
  const HeaderImages = require.context('../../assets/img/', true);

  const handlerAdd = () => {
    alert('wtfff')
  }

  return (
    <div className='flex h-[16%] justify-evenly items-center bg-zinc-50 mb-4'>
      <div className=" w-[15%] h-100 flex justify-center items-center"> {/*   */}
        <div className='profile-img'>
          <img src={HeaderImages('./profile-photo2.jpg')} alt="" className="h-full w-full" />
        </div>
      </div>
      <div className='w-[60%] h-100'>
        <span>{`${User.FirstName} ${User.LastName}`} </span>
        <hr />
        <span>Dui: {User.Dui}</span>
      </div>
      <div className='w-[20%] h-100 '>
        <button onClick={handlerAdd}>agregar</button>
      </div>
    </div >
  )
}
