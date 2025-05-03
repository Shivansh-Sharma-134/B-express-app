const {Router} = require("express");
const indexRouter = Router();

const messages = require("../data/db")


  indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard" ,messages : messages });
    console.log(messages)
  });

  indexRouter.get("/new", (req, res) => {
    res.render("form", { title: "add new message" ,messages : messages });
  });

  indexRouter.get("/:messageId", (req, res) => {
    const message = messages.find(msg => msg.messageId === req.params.messageId);

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("message", { title: "Message Detail", message });
  });
module.exports = indexRouter;