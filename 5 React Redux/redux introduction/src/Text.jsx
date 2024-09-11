import React from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'

export default function Text() {
    const dispatch = useDispatch()
    const msg = useSelector(state => state.textReducer.msg)
    // const [inputText,setInputText] = useState('')
    const change = (text) =>{

dispatch({type:"INPUT_TEXT",value:text})
    }
  return (
    <div><input type="text" onChange={(e)=>{change(e.target.value)}} />
    <div>{msg}</div>
    </div>
  )
}
