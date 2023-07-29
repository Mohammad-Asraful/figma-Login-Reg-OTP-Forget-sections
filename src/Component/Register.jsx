import React from 'react'
import headerImage from '../images/Rectangle 98.png'

const Register = () => {
   return (
      <section className='bg-[#81F7FF] flex flex-col items-center'>

         <div className='bg-[#000000] w-fit'>
            {/* header image */}
            <div>
               <img className='min-w-[375px] ' src={headerImage} alt="Header pic" />
            </div>

            <div className='px-5 text-white'>

               {/* Register form start */}
               <div>
                  <div className='text-center mb-6'>
                     <h1 className='text-[28px]'>Register</h1>
                     <p className='text-xl'>Create a new account</p>
                  </div>

                  <form action="login">
                     <div>
                        <div className='mb-2'>
                           <label className='block mb-2 text-lg' htmlFor="username">User name</label>
                           <input className='block w-full rounded-md bg-[#FEFCFC] py-3 px-[18px]' type="email" placeholder='Enter your Username' />
                        </div>

                        <div className='mb-7'>
                           <label className='block mb-2 text-lg' htmlFor="email">Email</label>
                           <input className='block w-full rounded-md bg-[#FEFCFC] py-3 px-[18px]' type="email" placeholder='Enter your email' />
                        </div>

                        <div className='mb-7'>
                           <label className='block mb-2 text-lg' htmlFor="number">Mobile Number</label>
                           <input className='block w-full rounded-md bg-[#FEFCFC] py-3 px-[18px]' type="number" placeholder='Enter your number' />
                        </div>

                        <div className='mb-7'>
                           <label className='block mb-2 text-lg' htmlFor="password">Password</label>
                           <input className='block w-full rounded-md bg-[#FEFCFC] py-3 px-[18px]' type="password" placeholder='Enter your password' />
                        </div>

                     </div>

                     <div>

                        <button className='mb-[14px] p-2 text-[28px] rounded-[22px] w-full bg-[#29B6F6]'>Login</button>

                        <div className='mb-20 text-lg flex gap-1 justify-center'>
                           <p className='opacity-60'>Don't have account?</p>
                           <a className='font-bold' href="@">Login</a>

                        </div>

                     </div>
                  </form>

               </div>
               {/* Register form end */}

               <div></div>

            </div>
         </div>

      </section>
   )
}

export default Register