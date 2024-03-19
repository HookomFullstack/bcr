import { useState } from "react"
import { UsernameAndPasswordInputSelector } from "./UsernameAndPasswordInputSelector"
import { PersonalizarIcon } from "../../../assets/icons/PersonalizarIcon"
import { SeguridadIcon } from "../../../assets/icons/SeguridadIcon"

export const UsernameAndPasswordInput = ({
  username, password, handleChange, handleBlur, touched, errors, showPasswordMode = false, virtualKeyword, valueKeyBoardVirtual,
  selectActive, setSelectActive, selectItem, setSelectItem, opciones
}) => {
  
  const [showPassword, setShowPassword] = useState(false)
  const [usernameLabel, setUsernameLabel] = useState(false)
  const [passwordLabel, setPasswordLabel] = useState(false)
  return (
    <>
      
      {/* <UsernameAndPasswordInputSelector 
                  
        selectActive={selectActive} 
        setSelectActive={setSelectActive}
        selectItem={selectItem}
        setSelectItem={setSelectItem}
        opciones={opciones}
      
      /> */}
      <div className="flex items-end mt-[21px]">
        <PersonalizarIcon />
        <div className="relative w-full">
          <label  
            htmlFor="usernameLabel"

            onClick={() => setUsernameLabel(true)}
            className={
              usernameLabel === false
              ? 'duration-200 text-[#2c2c33] absolute left-0 bottom-0'
              : 'duration-200 translate-y-[-16px] scale-[.8] text-[#2c2c33] absolute left-[-5px]'
          }>
            Usuario
          </label>
          <input 
            type="text" 
            id="usernameLabel"
            name="username"
            onBlur={handleBlur}
            onChange={handleChange}
            onClick={() => setUsernameLabel(true)}

            value={username}
            inputMode="text"
            required
            className="outline-none border-b-[1px] border-b-[#2d3338] w-full  bg-transparent"
          />
        </div>

      </div>

      {/* 
        {
          touched.username && errors.username && (
            <p>{errors.username}</p>
          )
        } 
      */}
      
      <div className="flex items-end my-[21px]">
        <SeguridadIcon />
        <div className="relative w-full">
          <label  
            htmlFor="passwordLabel"
            onClick={() => setPasswordLabel(true)}
            className={
              passwordLabel === false
              ? 'duration-200 text-[#2c2c33] absolute left-0 bottom-0'
              : 'duration-200 translate-y-[-16px] scale-[.8] text-[#2c2c33] absolute left-[-5px]'
          }>
            Contraseña
          </label>

          <input 
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={password}
            id="passwordLabel"
            type={(showPassword === false || showPasswordMode === false) == true ? 'password' :  'text' } 
            onClick={() => setPasswordLabel(true)}
            required
            className="outline-none border-b-[1px] border-b-[#2d3338] w-full  bg-transparent"
          />
        </div>

      </div>

      
      {/* 
        {
          touched.password && errors.password && (
            <p>{errors.password}</p>
          )
        } 
      */}
      
      {/* <div>
        <input 
          onClick={() => setShowPassword(!showPassword)}
          type="checkbox" 
          id="passwordView" 
        />
        <label htmlFor="passwordView">{(showPassword === false || showPasswordMode === false) == true ? 'Ver' :  'Ocultar'}</label>
      </div> */}
      
    </>
  )
}
