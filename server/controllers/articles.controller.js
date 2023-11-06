const httpStatus = require('http-status');
const { articlesService } = require('../services')


const articlesController = {
    async createCategory(req,res,next){
        try{
            const category = await articlesService.addCategory(req.body);
            res.json(category);
        } catch(error){
            next(error)
        }
    }
}


module.exports = articlesController;