import React from 'react'

export const ConfirmCardReq = ({props, setActive}) => {
  return (
    <div>
        <p>{props.Name}</p>
        <p>{props.Dui}</p>
        <p>{props.Email}</p>
        <p>{props.CelNum}</p>
    </div>
  )
}
