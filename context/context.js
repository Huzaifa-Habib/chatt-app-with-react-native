import React, { createContext, useReducer } from 'react'
import { reducer } from './reducer';


let data = {
  isLogin:false,
  user:{},
  baseUrl:"http://192.168.10.5:3000",
}

export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, data)
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const GlobalContext = createContext({ state: data, dispatch:null });




