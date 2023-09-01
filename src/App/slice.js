import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const upstoxSlice = createSlice({
  name: 'upstox',
  initialState,
  reducers: {
    addToWatchList : (state , action )=>{
      
        console.log("action is : " ,action.payload);
        console.log("The value is given as : ",state.value);
        
        state.value.push(action.payload);
    },
    removeToWatchList : (state , action) =>{
      const removeItem = state.value.filter((item)=> item.id !== action.payload.id);
      console.log(removeItem);
      state.value =removeItem;
    }
  },
})


export const { addToWatchList , removeToWatchList} = upstoxSlice.actions

export default upstoxSlice.reducer;