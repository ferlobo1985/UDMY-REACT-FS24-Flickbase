const { authService } = require('../services');
const httpStatus = require('http-status');

const authController = {
    async register(req,res){
        try{
            const { email,password } = req.body;
            const user = await authService.createUser(email,password);



        } catch(error){
            res.status(httpStatus.BAD_REQUEST).send(error.message);
        }
    },
}


module.exports = authController;