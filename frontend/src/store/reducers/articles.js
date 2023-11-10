import { createSlice } from '@reduxjs/toolkit';
import {
    getCategories,
    addArticle,
    getPaginateArticles,
    changeStatusArticle,
    homeLoadMore
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
        updateCategories:(state,action)=>{
            state.categories = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        /// ADD ARTICLE
        .addCase(addArticle.pending,(state)=>{ state.loading = true; })
        .addCase(addArticle.fulfilled,(state,action)=>{
            state.loading = false;
            state.lastAdded = action.payload
        })
        .addCase(addArticle.rejected,(state,action)=>{ state.loading = false;})
        // GET PAGINATE ARTICLES
        .addCase(getPaginateArticles.pending,(state)=>{ state.loading = true; })
        .addCase(getPaginateArticles.fulfilled,(state,action)=>{
            state.loading = false;
            state.adminArticles = action.payload
        })
        .addCase(getPaginateArticles.rejected,(state,action)=>{ state.loading = false;})
        // HOME LOAD MORE
        .addCase(homeLoadMore.fulfilled,(state,action)=>{
            state.homeSort.skip = action.payload.sort.skip;
            state.articles = action.payload.newState;
        })
        /// CHANGE STATUS ARTICLE
        .addCase(changeStatusArticle.fulfilled,(state,action)=>{
            state.adminArticles.docs = action.payload;
        })
        /// GET CATEGORY
        .addCase(getCategories.fulfilled,(state,action)=>{
            state.categories = action.payload;
        })
    }
});

export const { updateCategories } = articlesSlice.actions;
export default articlesSlice.reducer;