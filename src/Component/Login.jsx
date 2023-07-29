import React from 'react'
import headerImage from '../images/Rectangle 98.png'
import fbIcon from '../images/facebook (1).png'
import instagram from '../images/instagram.png'

import { FcGoogle } from "react-icons/fc";
// import { AiFillFacebook } from "react-icons/ai";
// import { AiOutlineInstagram } from "react-icons/ai";

const Login = () => {
   return (
      <section className='bg-[#81F7FF] flex flex-col items-center'>

         <div className='bg-[#000000] w-fit'>
            {/* header image */}
            <div>
               <img className='min-w-[375px] ' src={headerImage} alt="Header pic" />
            </div>

            <div className='px-5 text-white'>

               {/* Log in form start */}
               <div>
                  <div className='text-center mb-6'>
                     <h1 className='text-[28px]'>Welcome</h1>
                     <p className='text-xl'>Login to your account</p>
                  </div>

                  <form action="login">
                     <div>
                        <div className='mb-2'>
                           <label className='block mb-2 text-lg' htmlFor="email">Email</label>
                           <input className='block w-full rounded-md bg-[#FEFCFC] py-3 px-[18px]' type="email" placeholder='Enter your Email' />
                        </div>

                        <div className='mb-7'>
                           <label className='block mb-2 text-lg' htmlFor="password">Password</label>
                           <input className='block w-full rounded-md bg-[#FEFCFC] py-3 px-[18px]' type="password" placeholder='Enter your password' />
                           <a className='block mt-2 text-end text-[#EA4335]' href="@">Forgot password</a>
                        </div>
                     </div>

                     <div>

                        <button className='mb-[14px] p-2 text-[28px] rounded-[22px] w-full bg-[#29B6F6]'>Login</button>

                        <div className='text-lg flex gap-1 justify-center'>
                           <p>Don't have account?</p>
                           <a className='font-bold' href="@">Create now</a>

                        </div>

                     </div>
                  </form>

                  {/* icons div start */}
                  <div className='mt-[49px] mb-20 flex justify-center items-center gap-[42px]'>
                     <a href="@">
                        <FcGoogle className='w-9 h-9' />
                     </a>
                     <a href="@">
                        <img src={fbIcon} alt='instagram' className='w-8 h-8' />
                     </a>
                     <a href="@">
                        <img src={instagram} alt='instagram' className='w-8 h-8' />
                     </a>
                  </div>
                  {/* icons div end*/}

               </div>
               {/* Log in form end */}

               <div></div>

            </div>
         </div>

      </section>
   )
}

export default Login