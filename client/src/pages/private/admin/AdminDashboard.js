import React from 'react'

export const AdminDashboard = () => {
  return (
    <>
      <div>AdminDashboard</div>
      <br />
      <button onClick={() => localStorage.removeItem('secretToken')}>Cerrar sesión</button>
    </>
  )
}
