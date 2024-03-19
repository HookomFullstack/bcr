import { CertificadoIcon } from "../../assets/icons/CertificadoIcon"
import { ContactenosIcon } from "../../assets/icons/ContactenosIcon"
import logo from "../../assets/logo.gif"

export const Header = () => {

  return (
    <>
      
      <div className='h-[70px] w-full bg-white flex justify-between px-[14px] py-[12px]'>
                <div>
                    <img className='w-[150px]' src={logo} alt="logo" />
                </div>
                <div className='flex gap-7'>
                    <div className='flex flex-col items-center'>
                        <div>
                            <CertificadoIcon />
                        </div>
                        <span className='text-[12px] text-[#0033A0]'>Certificaciones</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div>
                            <ContactenosIcon />
                        </div>
                        <span className='text-[12px] text-[#0033A0]'>Contáctenos</span>
                    </div>
                </div>
            </div>

            <div className='h-[51px] bg-[#0033A0] justify-between flex items-center gap-5'>
                <div className='flex justify-end w-full'>
                    <span className='text-[21px] text-white'>Oficina Virtual</span>
                </div>
                <div className='flex w-full'>
                    <span className='text-[21px] text-white'>Personas</span>
                </div>
            </div>
       
    </>
  )
}
