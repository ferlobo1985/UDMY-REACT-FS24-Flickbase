import { createSlice } from '@reduxjs/toolkit';
import {
    getCategories
} from '../actions/articles'

export const articlesSlice = createSlice({
    name:'articles',
    initialState:{
        homeSort:{
            sortby:"_id",
            order:"desc",
            limit:8,
            skip:0
        },
        loading:false,
        articles:[],
        current:null,
        categories:[]
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        /// GET CATEGORY
        .addCase(getCategories.fulfilled,(state,action)=>{
            state.categories = action.payload;
        })
    }
});

/// action......
export default articlesSlice.reducer;