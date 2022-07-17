import React from 'react'
import axios from 'axios';

export const DashboardNormalUser = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      'x-auth-token': localStorage.getItem("authToken")
    },
  };

  const VerifyAccountStatus = async (e) => {
    e.preventDefault()
    // try {
    //   const res = await axios.post('http://localhost:4000/api/dashboard/test-db-relation', { yes: true }, config);
    //   console.log(res)
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <>
      <div>
        <form onSubmit={VerifyAccountStatus}>
          <h1>CAMBIAR STATUS DE LA CUENTA</h1>
          <button type='submit'>Cambiar</button>
        </form>
        <br />
      </div>
      <span onClick={alert('wtf')} type='button'>logout</span>
    </>
  )
}
