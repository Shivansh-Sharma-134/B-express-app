const {Router} = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController");


  indexRouter.get("/", indexController.getUsernames);

  indexRouter.get("/new", (req, res) => {
    res.render("form", { title: "add new user" });
  });

  indexRouter.get("/:userId", (req, res) => {
    const user = users.find(user => user.userId === req.params.userId);

  if (!user) {
    return res.status(404).send("user not found");
  }

  res.render("userDetail", { title: "user Detail", user });
  });


module.exports = indexRouter;