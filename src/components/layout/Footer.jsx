import React from 'react'
import { useIp } from '../../hooks/useIp';

export const Footer = () => {
  const ip = useIp();

  return (

    <div className='bg-[#0033A0] md:fixed bottom-0 w-full md:flex-row flex-col h-auto md:h-[30px] text-white flex items-center py-5 md:py-0 justify-center md:gap-3'>
        <span className='text-[14px]'>BCR © Derechos Reservados 2024</span>
        <span className='text-[14px]'>Contáctenos: CentroAsistenciaBCR@bancobcr.com</span>
    </div>
  )
}
