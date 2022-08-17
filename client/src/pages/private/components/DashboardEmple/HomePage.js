import {useDash } from "../../../../context/DashboardContext"


export const HomePage = () =>{
    const { Info } = useDash();
    return(
        <div>Hola Mundo</div>
    )
}