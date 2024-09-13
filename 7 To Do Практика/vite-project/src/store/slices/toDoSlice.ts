import {createSlice} from '@reduxjs/toolkit'
import { createTodp } from '../thunks/createTodo'
export type Todo = {
title:string,
id:string,
completed:boolean,
category:'home'|'work'|"hobby"|"travel"|'food'
}
export type State = {
    error:string,
   status: 'idle'| 'loading' |'error'|'success',
   data:Todo[]
}
const initialState:State ={
status:'idle',
data:[],
error:''
}

const todosSlice = createSlice({
    name:'todos',
    initialState,
    //@ts-ignore
    extraReducers: (builder) => {
        builder.addCase(createTodp.fulfilled, (state, action) => {
          state.data=action.payload;
          state.status="success";
          state.error = '';
        })
        .addCase(createTodp.pending, (state, action)=>{
state.status = 'loading',
state.error = '',
state.data = []
        })
        .addCase(createTodp.rejected, (state, action)=>{
      state.status = 'error';
      //@ts-ignore
      state.error = action.payload;
      state.data = []
        })
        
    }
})

export default todosSlice.reducer