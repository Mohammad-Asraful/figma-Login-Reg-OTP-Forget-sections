import React from 'react'
import headerImage from '../images/Rectangle 98.png'

const Varification = () => {
   return (
      <section className='bg-[#81F7FF] flex flex-col items-center'>

         <div className='bg-[#000000] w-fit'>
            {/* header image */}
            <div>
               <img className='min-w-[375px] ' src={headerImage} alt="Header pic" />
            </div>

            <div className='px-5 text-white'>

               {/* Varification form start */}
               <div>
                  <div className='text-center mb-6'>
                     <h1 className='text-[28px]'>Varification</h1>
                     <p className='text-xl mx-auto w-72'>Messenger has send a code to verify your account</p>
                  </div>

                  <form action="login">
                     <div>

                        {/* Email OTP start */}
                        <div className='mb-5'>
                           <label className='block mb-2 text-lg' htmlFor="username">Email OTP</label>

                           <div className='flex gap-[13px] items-center text-black'>
                              <input className='w-[52px] h-[52px] rounded-md bg-[#FEFCFC] py-3 px-[18px]' type="text" />
                              <input className='w-[52px] h-[52px] rounded-md bg-[#FEFCFC] py-3 px-[18px]' type="text" />
                              <input className='w-[52px] h-[52px] rounded-md bg-[#FEFCFC] py-3 px-[18px]' type="text" />
                              <input className='w-[52px] h-[52px] rounded-md bg-[#FEFCFC] py-3 px-[18px]' type="text" />
                              <input className='w-[52px] h-[52px] rounded-md bg-[#FEFCFC] py-3 px-[18px]' type="text" />
                           </div>

                        </div>
                        {/* Email OTP end */}


                        {/* Mobile OTP start */}
                        <div className='mb-[26px]'>
                           <label className='block mb-2 text-lg' htmlFor="username">Mobile OTP</label>

                           <div className='flex gap-[13px] items-center text-black'>
                              <input className='w-[52px] h-[52px] rounded-md bg-[#FEFCFC] py-3 px-[18px]' type="text" />
                              <input className='w-[52px] h-[52px] rounded-md bg-[#FEFCFC] py-3 px-[18px]' type="text" />
                              <input className='w-[52px] h-[52px] rounded-md bg-[#FEFCFC] py-3 px-[18px]' type="text" />
                              <input className='w-[52px] h-[52px] rounded-md bg-[#FEFCFC] py-3 px-[18px]' type="text" />
                              <input className='w-[52px] h-[52px] rounded-md bg-[#FEFCFC] py-3 px-[18px]' type="text" />
                           </div>

                        </div>
                        {/* Mobile OTP end */}

                     </div>

                     <div>

                        <button className='mb-[14px] p-2 text-[28px] rounded-[22px] w-full bg-[#29B6F6]'>Verify</button>

                        <div className='mb-20 text-lg flex gap-1 justify-center'>
                           <p>
                              Resend: <span className='text-red-600'>00:50</span>
                           </p>

                        </div>

                     </div>
                  </form>

               </div>
               {/* Varification form end */}

               <div></div>

            </div>
         </div>

      </section>
   )
}

export default Varification