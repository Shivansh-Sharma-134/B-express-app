const {Router} = require("express");
const messages = require("../data/db");
const newMessageRouter = Router();

newMessageRouter.get("/",(req,res)=>{
    res.render("form")
})
 
newMessageRouter.post("/",(req,res)=>{
    messages.push({
        text: req.body.messageInput,
        user: req.body.authorNameInput,
        added: new Date(),
        messageId: crypto.randomUUID()
    });
    res.redirect("/");
})

module.exports = newMessageRouter;