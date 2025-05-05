const {Router} = require("express");
const newUserRouter = Router();
const indexController = require("../controllers/indexController")

const { body, validationResult } = require("express-validator");
const { createUsernamePost } = require("../controllers/indexController");

const validateUser = [
  body("nameInput").trim().isAlpha().withMessage('must only contain letters').isLength({min: 1,max: 10}).withMessage('must be within 1 to 10 characters'),
]

newUserRouter.get("/",(req,res)=>{
    res.render("form")
})
 
newUserRouter.post("/",validateUser,indexController.createUsernamePost);

module.exports = newUserRouter;