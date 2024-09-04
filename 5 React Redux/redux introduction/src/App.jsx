import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DarkMode from './DarkMode'

export default function App() {
  const dispatch= useDispatch()
  const cash = useSelector(state => state.cashReducer.cash)
  const isDark = useSelector(state => state.darkModeReducer.isDark)
  const addCash = (amount) =>{
    dispatch({type:'ADD_CASH',payload:amount})
  }
  const getCash =(amount) =>{
    dispatch({type:"GET_CASH",payload:amount})
  }
  return (
    <div className={isDark? 'dark_mode' :''}>
      <DarkMode></DarkMode>
      <h2>Денег на счету: {cash}</h2>
    <button onClick={()=>addCash(+prompt("Введите количество денег"))}>Положить на счет деньги</button>
    <button onClick={()=>getCash(+prompt("Введите количество денег"))}>Снять деньги</button>
    </div>
  )
}
