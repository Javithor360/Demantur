import { useEffect } from "react"
import { useDash } from "../../../../../context/DashboardContext"
import pending_icon from '../../assets/img/contacts-icons/contacts-pending-icon.png'
import '../../assets/scss/Contacts_main.scss'

export const PendingReq = () => {
    const { PedingFriendReq, ReloadState, setReloadState, cancelFriendReq, setPedingFriendReq, setReloadStateTwo } = useDash()
    useEffect(() => {
        setReloadState(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ReloadState])

    const CancelFriendReq = (el) => {
        cancelFriendReq(localStorage.getItem('authToken'), el)
        setPedingFriendReq(PedingFriendReq.filter((SingleReq) => SingleReq.Dui !== el.Dui));
        setReloadState(false);
        setReloadStateTwo(true);
    }
    return (
        <>
            {
                PedingFriendReq.length !== 0 ?
                    PedingFriendReq.map((el, i) => {
                        console.log(el)
                        return (
                            <div key={i} className="bg-[#FBFBFB] w-[90%] flex justify-between mt-4 ml-5 p-3 border border-[#707070] rounded-md">
                                <>
                                    <div className="flex">
                                        <div className="mr-7 flex items-center">
                                            {/* foto: {el.Photo} */}
                                            <div className='profile-img mr-3'>
                                                <img src={el.Photo} alt="" className="h-full w-full" />
                                            </div>
                                        </div>
                                        <div className="contact-data flex flex-col">
                                            <div className="contact-name mb-3 p-0">
                                                <span className="font-semibold text-[#606470]">Nombre: </span> <p className="m-0 p-0">{el.Name}</p>
                                            </div>
                                            <span className="m-0 p-0">
                                                <span className="font-semibold text-[#606470]">DUI: </span> <p className="m-0 p-0">{el.Dui}</p>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <button className="px-3 py-2 outline-none border-none rounded-md bg-[#989398] text-white" onClick={() => { CancelFriendReq(el) }}>Cancelar</button>
                                    </div>
                                </>
                            </div>
                        )
                    })
                    :
                    <div className='flex flex-col justify-center items-center h-[90%] mt-2'>
                        <img className='w-[200px] mb-3' src={pending_icon} alt="" />
                        <p className='text-[#606470]'>No tiene solicitudes hechas pendientes</p>
                    </div>
            }
        </>
    )
}
