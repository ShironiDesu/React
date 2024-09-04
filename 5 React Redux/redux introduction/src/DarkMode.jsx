import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function DarkMode() {
    const dispatch = useDispatch()
  
const change =()=>{
    dispatch({type:"CHANGE_MODE",payload:null})
}
  return (
    <div><button onClick={change}>Смена фона</button></div>
  )
}
