import React from 'react'

export const Spiner = ({time =   null}) => {
  return (
    <div className='absolute w-full h-full flex-col left-0 top-0 z-10 flex items-center justify-center bg-[#ffffffd9]'>
        <div className='loader'></div>
        <p className='text-[#EF3340] absolute translate-y-8 text-[14px] font-semibold'>Ingresando</p>
    </div>  
  )
}
