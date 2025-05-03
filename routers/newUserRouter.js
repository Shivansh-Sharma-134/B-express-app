const {Router} = require("express");
const users = require("../data/db");
const newUserRouter = Router();

newUserRouter.get("/",(req,res)=>{
    res.render("form")
})
 
newUserRouter.post("/",(req,res)=>{
    users.push({
        firstName: req.body.firstNameInput,
        lastName: req.body.lastNameInput,
        added: new Date(),
        userId: crypto.randomUUID()
    });
    res.redirect("/");
})

module.exports = newUserRouter;