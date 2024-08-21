import React from 'react'
import Child from './Child'
import User from './User'

export default function App() {
  
  const srt = "Hello World"
  const foo = (value)=>{
    return value + '!!!!'
  }
  const reverseString = (value)=>{
   const reversedString = value.split('').reverse().join('')
   console.log(reversedString);
   return reversedString
  }
  const currentDay = () =>{
    const now =new Date()
    const today = now.getDate()
 
    if(today % 2 ==0) {
  const year =  now.getFullYear()
  const month = now.getMonth()
      return `${year} год и ${month} месяц`
    } else {
    return `${now.getDate()} + ${now.getDay}`
    }
   
  }
  const bool =false
  const num =5
  const users =[
    {id:1,name:'John',age:20},
    {id:2,name:'Tom',age:20},
    {id:3,name:'Bob',age:20}
]
  return (
    <>
    
    <Child foo={foo} srt={srt} message="Какое-то сообщение"/>
  
    { bool &&
      (<h1>App</h1>) 
    }
      { num>10 ? 
      <h1>Переменная больше 10</h1>:
      num>8 ?
      <h1>Переменная больше 8</h1>:
      num >5 ?
      <h2>Переменная больше 5</h2>:
      <h2>Переменная меньше или равна 5</h2>
      }
      
     <span> {foo(srt)}</span> 
     <br />
     <span>

       {reverseString(srt)}
     </span>
     <br />
       <span>

       {currentDay()}
       </span>
       {users.map(user=>
      <User key={user.id} username={user.name} userAge={user.age}></User>
     )}
    </>
  )
}
