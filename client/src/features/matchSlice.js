import { createSlice } from "@reduxjs/toolkit";
export const matchSlice=createSlice({
name: "match",
initialState:{
    match:null,
},
reducers: {
    setmatchInfo:(state,action)=>{
        state.match=action.payload.match;
    },
},
}
    );
export const{setmatchInfo}=matchSlice.actions;
export const selectMatch=(state)=>state.match.match;
export default matchSlice.reducer;