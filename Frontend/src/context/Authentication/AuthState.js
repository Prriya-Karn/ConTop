import React, { useState } from 'react'
import AuthContext from './AuthContext'

const AuthState = ({children}) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [userPass,setUserPass] = useState("");
    const [OTP,setOTP] = useState("");
  return (
    <AuthContext.Provider value={{phoneNumber,setPhoneNumber,userPass,setUserPass,OTP,setOTP}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthState
