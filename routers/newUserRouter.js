const {Router} = require("express");
const users = require("../data/db");
const newUserRouter = Router();

const { body, validationResult } = require("express-validator");

const validateUser = [
  body("firstNameInput").trim().isAlpha().withMessage('must only contain letters').isLength({min: 1,max: 10}).withMessage('must be within 1 to 10 characters'),
  body("lastNameInput").trim().isAlpha().withMessage('must only contain letters').isLength({min: 1,max: 10}).withMessage('must be within 1 to 10 characters')
]

newUserRouter.get("/",(req,res)=>{
    
    res.render("form")
})
 
newUserRouter.post("/",validateUser,(req,res)=>{
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).render("form", {
          title: "Create user",
          errors: errors.array(),
          old: req.body 
        });
      }

    users.push({
        firstName: req.body.firstNameInput,
        lastName: req.body.lastNameInput,
        added: new Date(),
        userId: crypto.randomUUID()
    });
    res.redirect("/");
})

module.exports = newUserRouter;