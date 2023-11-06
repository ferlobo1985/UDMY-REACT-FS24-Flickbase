const httpStatus = require('http-status');
const { Article } = require('../models/article')
const { Category } =  require('../models/category');
const { ApiError } = require('../middleware/apiError');


const addArticle = async(body) => {
    try{
        const article = new Article({
            ...body,
            score:parseInt(body.score)
        });
        await article.save();
        return article;
    }catch(error){
        throw error;
    }
}

const getArticleById = async(_id,user) => {
    try{
        if(user.role === 'user'){
            throw new ApiError(httpStatus.BAD_REQUEST,'Sorry you are not allowed')
        }
        const article = await Article.findById(_id).populate('category');
        if(!article) throw new ApiError(httpStatus.NOT_FOUND,'Article not found');
        return article;
    }catch(error){
        throw error;
    }
}

const updateArticleById = async(_id,body) => {
    try{
        const article = await Article.findOneAndUpdate(
            {_id},
            {"$set":body },
            { new:true }
        ).populate('category');;
        if(!article) throw new ApiError(httpStatus.NOT_FOUND,'Article not found')
        return article;
    }catch(error){
        throw error;
    }
}

const deleteArticleById = async(_id) => {
    try{
        const article = await Article.findByIdAndRemove(_id);
        if(!article) throw new ApiError(httpStatus.NOT_FOUND,'Article not found')
        return article;
    }catch(error){
        throw error;
    }
}

const getUsersArticleById  = async(_id) => {
    try{
        const article = await Article.findById(_id).populate('category');
        if(!article) throw new ApiError(httpStatus.NOT_FOUND,'Article not found')

        if(article.status === 'draft'){
            throw new ApiError(httpStatus.BAD_REQUEST,'Sorry you are not allowed')
        }
        return article;
    }catch(error){
        throw error;
    }
}



const addCategory = async(body)=>{
    try{
        //// validation
        const category = new Category({
            ...body
        });
        await category.save();
        return category;
    }catch(error){
        throw error;
    }
}


const findAllCategories = async() => {
    try{
        const categories = await Category.find();
        return categories;
    }catch(error){
        throw error;
    }
}

module.exports = {
    addCategory,
    findAllCategories,
    addArticle,
    getArticleById,
    updateArticleById,
    deleteArticleById,
    getUsersArticleById
}
