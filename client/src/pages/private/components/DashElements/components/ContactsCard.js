import { useDash } from "../../../../../context/DashboardContext";

export const ContactsCard = ({ User, setUsersToReq, UsersToReq }) => {
  const HeaderImages = require.context('../../assets/img/', true);
  const { addFriendRequest, PedingFriendReq, setReloadState } = useDash()

  const handlerAdd = (e) => {
    addFriendRequest(localStorage.getItem('authToken'), User._id);
    PedingFriendReq.push({
      Name: `${User.FirstName} ${User.LastName}`,
      Dui: User.Dui,
      Photo: 'Foto link',
    })
    let filtarted = UsersToReq.filter((OtherUser) => OtherUser._id !== User._id)
    setUsersToReq(filtarted);
    setReloadState(true)
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
        <button onClick={handlerAdd} >agregar</button>
      </div>
    </div >
  )
}