import { useEffect, useState } from "react";
import { VscLoading } from 'react-icons/vsc'

export const LoadingComp = ({ children }) => {

  const [Chargin, setChargin] = useState(true);

  useEffect(() => {
    setChargin(true)
    setTimeout(() => {
      setChargin(false);
    }, 1000)
  }, [children]);


  return (
    <>
      {
        Chargin ?
          <div className="w-full flex justify-center">
            <VscLoading className="animate-spin text-[2rem]" />
          </div>
          
          :
          <>
            {children}
          </>
      }
    </>
  )
}
