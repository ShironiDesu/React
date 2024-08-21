import React from 'react'
import { useState } from 'react'


export default function SecondTask({openModal}) {
    const[input1,setInput1] = useState('')
    const[input2,setInput2] = useState('')
    const[input3,setInput3] = useState('')
    const[input4,setInput4] = useState('')
    let obj
    const sendForm = (e)=>{
        e.preventDefault()
         obj = {
            input1:input1,
            input2:input2,
            input3:input3,
            input4:input4,
        }
        console.log(obj);
        openModal(obj); 
    }
    
  return (
    <div>
        <form action="" onSubmit={(e)=>sendForm(e)}><input value={input1} onChange={(e)=>setInput1(e.target.value)} type="text" name="" id="" />
    <input value={input2} onChange={(e)=>setInput2(e.target.value)} type="text" name="" id="" />
    <input value={input3} onChange={(e)=>setInput3(e.target.value)} type="text" name="" id="" />
    <input value={input4} onChange={(e)=>setInput4(e.target.value)} type="text" name="" id="" />
    <button type='submit'>Send</button>
    
    </form>

    </div>
  )
}
