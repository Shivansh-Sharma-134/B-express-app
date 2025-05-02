const {Router} = require("express");
const { title } = require("process");

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];


  app.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard" ,messages : messages });
  });


module.exports = indexRouter;