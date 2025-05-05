const pool = require("./pool")

async function getAllUsernames() {
    const {rows} = await pool.query("SELECT * FROM usernames");
    console.log(rows)
    return rows;
}

async function insertUser(username, email, age, bio ) {
    await pool.query("INSERT INTO usernames (username, email, age, bio) VALUES ($1,$2,$3,$4)",[username, email, age, bio]);
    
}

async function deleteUser(userId) {
    await pool.query("DELETE FROM usernames WHERE id = $1",[userId])
}

module.exports ={
    getAllUsernames,
    insertUser,
    deleteUser
}
