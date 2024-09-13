import React, { useState } from 'react';
import { createTodp } from './store/thunks/createTodo'; 
import { useDispatch } from 'react-redux';

export default function App() {
  const [value, setValue] = useState<string>(''); 
  const [category, setCategory] = useState('home'); 
  const dispatch = useDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const clickHandler = () => {
    //@ts-ignore
    dispatch(
      createTodp({
        category,
        title: value,
      })
    );
  };

  return (
    <div>
      <input value={value} type="text" onChange={changeHandler} />
      <select name="category" id="category" onChange={selectChange} value={category}>
        <option value={'home'}>Home</option>
        <option value={'work'}>Work</option>
        <option value={'hobby'}>Hobby</option>
        <option value={'travel'}>Travel</option>
        <option value={'food'}>Food</option>
      </select>
      <button onClick={clickHandler}>Добавить</button> 
    </div>
  );
}
