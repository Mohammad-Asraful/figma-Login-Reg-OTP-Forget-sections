import React from 'react'
import headerImage from '../images/Rectangle 98.png'

const ForgotPassword = () => {
   return (
      <section className='bg-[#81F7FF] flex flex-col items-center'>

         <div className='bg-[#000000] w-fit'>
            {/* header image */}
            <div>
               <img className='min-w-[375px] ' src={headerImage} alt="Header pic" />
            </div>

            <div className='px-5 text-white'>

               {/* Forgot Password form start */}
               <div>
                  <div className='text-center mb-6'>
                     <h1 className='text-[28px] mb-[61px]'>Forgot Password</h1>
                  </div>

                  <form action="login">
                     <div>
                        <div className='mb-5'>
                           <label className='block mb-2 text-lg' htmlFor="username">Enter your email</label>
                           <input className='w-full rounded-md bg-[#FEFCFC] py-3 px-[18px]' type="text" placeholder='Email' />
                        </div>
                     </div>

                     <div>

                        <button className='mb-[14px] p-2 text-[28px] rounded-[22px] w-full bg-[#29B6F6]'>Send OTP</button>

                        <div className='mb-[300px] text-lg flex gap-1 justify-between'>
                           <p className='opacity-60'>
                              Choose Another Method
                           </p>
                           <a href='@'>Need Help?</a>
                        </div>

                     </div>
                  </form>

               </div>
               {/* Forgot Password form end */}

               <div></div>

            </div>
         </div>

      </section>
   )
}

export default ForgotPassword