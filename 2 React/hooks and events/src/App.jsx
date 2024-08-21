// import React from 'react'
// import Child from "./Child.jsx"

// export default function App() {

//   const str = "Hello wolrd!";
//   const bool = true;

//   const foo = (str) => {
//     console.log(str);
//   }

//   return (
//     <div>
//       {bool && <Child str={str}/>}

//       <button onClick={() => foo("log")}>Click</button>

//       <input type="text" onChange={(event) => console.log(event.target.value)}/>
//     </div>
//   )
// }


import React, { useState } from 'react'
import SecondTask from './SecondTask';
import SwitchColor from './SwitchColor';
import Modal from './Modal';
import Gallery from './Gallery';
import QuadraticSolver from './QuadraticEquation';
export default function App() {

  // let counter = 0;
  const [counter, setCounter] = useState(0);
   const [str,setStr] = useState('Hello')

  // const increment = () => {
  //   setCounter(counter +1)
  //   console.log(counter);
  // }

  // const decrement = () => {
  //   setCounter(counter +2)
  //   console.log(counter);
  // }
  const [isModalOpen, setIsModalOpen] = useState(false);
const [formData, setFormData] = useState(null);

  const openModal = (data) => {
    setIsModalOpen(true);
    setFormData(data);

  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      {counter}
      
      <button onClick={()=>setCounter(counter+1)}>+</button>
      <button onClick={()=>setCounter(counter-1)}>-</button>
      {str}
      <input type="text" value={str} onChange={(e)=> setStr(e.target.value)}/>
      <SwitchColor></SwitchColor>
      <SecondTask openModal={openModal}></SecondTask>
      {isModalOpen && <Modal  obj={formData} closeModal={closeModal} />}
      <Gallery></Gallery>
      <QuadraticSolver></QuadraticSolver>
    </div>
  )
}
