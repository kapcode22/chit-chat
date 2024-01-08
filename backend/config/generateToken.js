const jwt = require('jsonwebtoken');

const generateToken = (id)=>{
    return jwt.sign({id},"indreshKumar",{
        expiresIn:'30d'
    })
}

module.exports = generateToken;