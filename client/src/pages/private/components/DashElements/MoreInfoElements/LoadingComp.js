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
          <VscLoading className="animate-spin" />
          :
          <>
            {children}
          </>
      }
    </>
  )
}
