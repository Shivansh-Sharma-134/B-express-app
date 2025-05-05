#! /usr/bin/env node

const {Client} = require ("pg");

const SQL =`
CREATE TABLE IF NOT EXISTS usernames (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR(255),
email VARCHAR(255),
age VARCHAR(25),
bio VARCHAR(255)
);

INSERT INTO usernames (username, email, age, bio)
VALUES
    ('Bryan','brian@mail.com',34,'A teacher'),
    ('Neha','neha@mail.com',30,'A musician'),
    ('Raj','raj@mail.com',24,'A student')

`;


async function main() {
    console.log("seeding")
    const client= new Client({
        connectionString: "postgresql://shivadmin:master@localhost:5432/top_users"
    })

    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done')
}

main()