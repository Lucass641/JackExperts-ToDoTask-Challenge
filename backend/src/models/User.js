const mysql = require('mysql')

const User = ('User', {
    name: String,
    email: String,
    password: String,
})

module.exports = User