const {Router} = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController");


  indexRouter.get("/", indexController.getUsernames);

  indexRouter.get("/new", (req, res) => {
    res.render("form", { title: "add new user" });
  });

  indexRouter.get("/delete/:userId", indexController.deleteUser )


module.exports = indexRouter;