const jwt = require("jsonwebtoken");

const generateJWT = (id)=>{
     return jwt.sign({ id }, "thiskeyforsignin", {
       expiresIn: "7d",
     });
}

module.exports = generateJWT;