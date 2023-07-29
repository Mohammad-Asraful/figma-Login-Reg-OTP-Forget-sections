import React from 'react'
import Login from './Component/Login'
import Register from './Component/Register'
import Varification from './Component/Varification'
import ForgotPassword from './Component/ForgotPassword'

const App = () => {
  return (
    <>
      <section className='flex gap-5 bg-[#81F7FF]'>
        <Login />
        <Register />
        <Varification />
        <ForgotPassword />
      </section>
    </>
  )
}

export default App