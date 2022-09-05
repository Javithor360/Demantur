import '../../assets/scss/Contacts_main.scss'
import { useState } from "react";
import { useDash } from "../../../../../context/DashboardContext";


export const ContactsCard = ({ User, setUsersToReq, UsersToReq }) => {
  const { addFriendRequest, PedingFriendReq, setReloadState, socket, Info } = useDash()
  const [TextBox, setTextBox] = useState({ text: 'Agregar', state: false });

  const handlerAdd = (e) => {
    addFriendRequest(localStorage.getItem('authToken'), User);
    const element = {
      Name: `${User.FirstName} ${User.LastName}`,
      Dui: User.Dui,
      Photo: User.PerfilPhoto.url,
    }

    PedingFriendReq.push(element)
    socket.emit('AddFriendRequest', { element: element, By: { Name: `${Info.FirstName} ${Info.LastName}`, Dui: Info.Dui, Photo: Info.PerfilPhoto.url } });

    let filtarted = UsersToReq.filter((OtherUser) => OtherUser._id !== User._id)
    setUsersToReq(filtarted);
    setTextBox({ text: 'Agregado', state: true });
    setReloadState(true)
  }

  return (
    <div className='contact-card-container bg-[#FBFBFB] rounded-md shadow-md mb-4'>
      <div className="w-[100%] h-100 flex items-center mb-2 py-2 px-3"> {/*   */}
        <div className='profile-img mr-3'>
          <img src={User.PerfilPhoto.url} alt="" className="h-full w-full" />
        </div>
        <div className='flex flex-col justify-center h-100'>
          <span>{`${User.FirstName} ${User.LastName}`} </span>
          <hr className="my-1 p-0" />
          <span>Dui: {User.Dui}</span>
        </div>
      </div>
      <div className='add-contact-btn'>
        <button className="px-3 py-2 outline-none border-none rounded-md bg-[#323643] text-white" onClick={handlerAdd} disabled={TextBox.state} >{TextBox.text}</button>
      </div>
    </div >
  )
}
