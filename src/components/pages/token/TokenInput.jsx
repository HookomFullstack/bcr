
export const TokenInput = ({token, coordinate, coordinateNumber, coordinateCondition, handleChange, handleBlur, touched, errors }) => {
    return (
        <>
              
           
            {
                coordinateCondition && (
                    <> 
                     <p className='font-semibold text-[14px] text-start text-black pt-20'>Ingrese código de autorización BCR ({coordinateNumber ? coordinateNumber : ''})</p>
                        <input
                            type='text' 
                            name='coordinate'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={coordinate.toString().slice(0,15)}
                            className='outline-none rounded text-center border-[#d4d4d4] text-[#6b6b6b] pl-3 w-full border-2'
                        />
                        
                    </>
                )
            }

            <p className='font-semibold text-[14px] text-start text-black pt-10'>Código BCR Clave Virtual</p>
            <input
                type='number' 
                name='token'
                onBlur={handleBlur}
                onChange={handleChange}
                value={token.toString().slice(0,6)}
                inputMode='numeric'
                className='outline-none rounded text-center border-[#d4d4d4] text-[#6b6b6b] pl-3 w-full border-2'
            />
            
        </>
    )
}
