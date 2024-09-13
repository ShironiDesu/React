import {Todo} from "../slices/toDoSlice"

import {createAsyncThunk} from '@reduxjs/toolkit'
export const createTodp = createAsyncThunk(
    "todos/createTodo",
    async({
    title,
    category,
}:Omit<Todo,'id'|"completed">) => {
 const response = await fetch('http://localhost:3001/todos',{
    method:"POST",
    body:JSON.stringify({
        complteted:false,
        title,
        category,
        id: crypto.randomUUID()
    })
 })
 const data = await response.json()

 
 return data
})