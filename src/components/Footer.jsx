import React from "react"

const Footer = () => {
  return (

   <div className='md:( bg-green-500 w-full h-[7vh] flex flex-col fixed bottom-0.5  )'>
     <div className="nav flex justify-center align-middle mt-0.5">
          <span className='font-extrabold text-[22px]'>&lt;</span>
          <span className='font-extrabold text-[22px] text-yellow-300'>PassSak</span>
          <span className='font-extrabold text-[22px]'>&gt;</span>
        </div>
        <span className='text-[15px] font-lighter justify-center flex font-bold text-white'>Created by Saket Tejpal</span>
   </div>

  )
}

export default Footer 
