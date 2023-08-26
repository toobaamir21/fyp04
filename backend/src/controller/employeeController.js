const Employee = require("../models/EmployeeModel");
const generateJWT = require("../middleware/generateJWT");

// For user registration
const registerEmployee = async (req, res) => {
  try {
    const { fname, lname, cnicNumber, role, phoneNumber,description, email, pass } =
      req.body;
    const data = await Employee.findOne({ email });
    if (data) {
      throw new Error("user already exixts");
    }
    const userData = await Employee.create({
      fname,
      lname,
      cnicNumber,
      role,
      phoneNumber,
      description,
      email,
      pass,
    });
    res.status(201).json({
      _id: userData._id,
      fname: userData.fname,
      lname: userData.lname,
      cnicNumber: userData.cnicNumber,
      role: userData.role,
      phoneNumber: userData.phoneNumber,
      description: userData.description,
      email: userData.email,
      password: userData.password,
      token: generateJWT(userData._id),
    });
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};

//For Read Users
const getAllUsers = async (req, res) => {
  try {
    const result = await Employee.find().sort({ updatedAt: 1 });
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(200).json({ msg: "There is no users" });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "users not found", error: err });
  }
};

//Get users by id
const getUserById = async (req, res) => {
  try {
    const id = req.query.getId;
    const result = await Employee.find({ _id: id });
    if (result) {
      res.status(200).json({ result });
    } else {
      res.status(200).json({ msg: "There is no users" });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "users not found", error: err });
  }
};

//Update User By Id
const updateUserById = async (req, res) => {
  try {
    const { fname, lname, cnicNumber, role, phoneNumber,description, email, pass } =
    req.body;
    const id = req.query.updId;
    const updateParam = {
      fname,
      lname,
      cnicNumber,
      role,
      phoneNumber,
      description,
      email,
      pass,
    };
    const result = await Employee.findByIdAndUpdate({ _id: id }, updateParam, {
      new: true,
    });
    if (result) {
      res.status(200).json({ result, msg: "Updated Successfully" });
    } else {
      res.status(200).json({ msg: "There is no user found" });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "users not found", error: err });
  }
};

//Delete user BY Id
const deleteUserById = async (req, res) => {
  try {
    const id = req.query.dltId;
    const result = await Employee.findByIdAndDelete({ _id: id });
    if (result) {
      res.status(200).json({ msg: "Deleted", result });
    } else {
      res.status(200).json({ msg: "There is no users" });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "users not found", error: err });
  }
};

module.exports = {
  registerEmployee,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
