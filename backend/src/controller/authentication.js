require("dotenv").config();
const Student = require("../models/Student");
const Driver = require("../models/Driver");
const Employee = require("../models/EmployeeModel");
const generateToken = require("../middleware/generateJWT");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const sinupdata = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send(errors.array());
  }
  try {
    if (req.body.value == 1) {
      let stu = await Student.findOne({ email: req.body.email });
      if (stu) {
        return res.status(500).send({ email: "User already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.pass, salt);
      stu = await Student.create({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        phone: req.body.phone,
        role: req.body.value,
        pass: secPass,
      });
      res.send(stu);
      console.log("saving to student db");
    } else if (req.body.value == 2) {
      let dri = await Driver.findOne({ email: req.body.email });
      if (dri) {
        return res.status(500).send({ email: "User already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.pass, salt);
      dri = await Driver.create({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        phone: req.body.phone,
        role: req.body.value,
        pass: secPass,
      });
      res.send(dri);
      console.log("saving to driver db");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
};

//for driver and student login
const authUser = async (req, res) => {
  try {
    const { email, pass } = req.body;
    const stu = await Student.findOne({ email });
    const dri = await Driver.findOne({ email });
    const emp = await Employee.findOne({ email });
    if (stu && (await stu.matchPassword(pass))) {
      res.status(200).json({
        _id: stu._id,
        fname: stu.fname,
        lname: stu.lname,
        email: stu.email,
        role: stu.role,
        token: generateToken(stu._id),
      });
    } else if (dri && (await dri.matchPassword(pass))) {
      res.status(200).json({
        _id: dri._id,
        fname: dri.fname,
        lname: dri.lname,
        email: dri.email,
        role: dri.role,
        token: generateToken(dri._id),
      });
    }
    //for employee login
    else if (emp && (await emp.matchPassword(pass))) {
      res.status(200).json({
        _id: emp._id,
        fname: emp.fname,
        lname: emp.lname,
        email: emp.email,
        role: emp.role,
        token: generateToken(emp._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid id or password");
    }
  } catch (err) {
    res.status(400).send("user not found");
    console.log(err);
  }
};

module.exports = { sinupdata, authUser };
