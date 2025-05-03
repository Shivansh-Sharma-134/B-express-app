const {Router} = require("express");
const indexRouter = Router();
const users = require("../data/db")


  indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini userboard" ,users : users });
    console.log(users)
  });

  indexRouter.get("/new", (req, res) => {
    res.render("form", { title: "add new user" ,users : users });
  });

  indexRouter.get("/:userId", (req, res) => {
    const user = users.find(user => user.userId === req.params.userId);

  if (!user) {
    return res.status(404).send("user not found");
  }

  res.render("userDetail", { title: "user Detail", user });
  });


module.exports = indexRouter;