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
  const { nameInput } = req.body;
  await db.insertUsername(nameInput);
  res.redirect("/");
}

module.exports = {
  getUsernames,
  createUsernamePost
};
