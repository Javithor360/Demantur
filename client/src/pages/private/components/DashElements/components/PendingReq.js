import { useEffect } from "react"
import { useDash } from "../../../../../context/DashboardContext"

export const PendingReq = () => {
    const { PedingFriendReq, ReloadState, setReloadState, cancelFriendReq } = useDash()
    useEffect(() => {
        setReloadState(false)
        // console.log('rerender')
    }, [ReloadState])

    const CancelFriendReq = (el) => {
        // cancelFriendReq(localStorage.getItem('authToken'), el)
        console.log('wtf')
    }

    return (
        <>
            <p>SUS solicitudes hechas:</p>
            {
                PedingFriendReq.length !== 0 ?
                    PedingFriendReq.map((el, i) => {
                        return (
                            <div key={i}>

                                <>
                                    nombre: {el.Name}, Dui: {el.Dui}, foto: {el.Photo}
                                    <button onClick={CancelFriendReq(el)}>Cancelar</button>
                                </>

                            </div>
                        )
                    })
                    :
                    "No hay"
            }
        </>
    )
}
