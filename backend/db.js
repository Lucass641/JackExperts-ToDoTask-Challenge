import mysql from  "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "QWE!@#qwe123",
    database: "new_schema"
})