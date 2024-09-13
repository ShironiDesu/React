import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "./slices/toDoSlice";
import { createTodp } from "./thunks/createTodo";

export const store =  configureStore({
    reducer:{
        todos:toDoSlice
    }
});
export type RootState = ReturnType<typeof store.getState>
const data = await createTodp({
    title:"Купить одежду",
    category:'home',
});
console.log(data,'data');
