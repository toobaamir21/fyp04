const jwt = require('jsonwebtoken');
const Student = require("../models/Student");
const Driver = require("../models/Driver");
const Employee = require('../models/EmployeeModel'); 
const jwt_sec = "thiskeyforsignin";
const protect = async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1]
              console.log("this is a token", token);
            // const token2=7589584573458
            const val = jwt.verify(token,jwt_sec)
            console.log("this is a val",val.id);
            const Stu = await Student.findById(val.id).select("-password");
            const Emp = await Employee.findById(val.id).select("-password");
            const Dri = await Driver.findById(val.id).select("-password");

            if(Stu){
              req.user = Stu
            }
            else if(Dri){
              req.user = Dri
            }
            else if(Emp){
              req.user = Emp
            }

            next();

        }catch(err){
            console.log(err);
            res.status(400).send(err);
        }
    }
  
}

module.exports = protect