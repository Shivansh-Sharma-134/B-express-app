const db = require("../data/queries");
const { validationResult } = require("express-validator");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.render("index", {title: "usernames", usernames: usernames})
}

async function createUsernamePost(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).render("form", {
          title: "Create user",
          errors: errors.array(),
          old: req.body 
        });
      }
  const { nameInput,emailInput,ageInput,bioInput } = req.body;
  await db.insertUser(nameInput, emailInput, ageInput, bioInput);
  res.redirect("/");
}

async function deleteUser(req, res){
    const id = req.params.userId;

  await db.deleteUser(id);
  res.redirect("/");
  };

module.exports = {
  getUsernames,
  createUsernamePost,
  deleteUser
};
