import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorGlobal, successGlobal } from '../reducers/notifications';
import { getAuthHeader } from '../../utils/tools'

import axios from 'axios';


export const getCategories = createAsyncThunk(
    'articles/getCategories',
    async(obj,{dispatch})=>{
        try{
            const request = await axios.get(`/api/articles/categories`,getAuthHeader());
            return request.data;
        }catch(error){
            dispatch(errorGlobal(error.response.data.message))
            throw error;
        }
    }
)