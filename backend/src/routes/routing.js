const express = require('express')
const router = express.Router()
const protect = require('../middleware/protect')


//From Employee Controller
const {registerEmployee,getAllUsers,getUserById,updateUserById,deleteUserById} = require('../controller/employeeController');


//From qNa Controller
const {createQuery,updateQuery,getQueryByTeacherId,getQueryByStudentId, uploadfile} = require('../controller/qNaController');

const {body} = require('express-validator')

const { authUser, sinupdata } = require('../controller/authentication');
const { otpCheck, resetfunc } = require('../controller/resetpass');

  router.post('/',[
    body('fname').isLength({min:3}),
    body('lname').isLength({min:3}),
    body('email').isEmail(),
    body('pass').isLength({min:5})

],sinupdata)
router.post("/login", authUser);
router.post('/forgotpass',otpCheck)
router.post("/resetyourpass/:id/:token", resetfunc);


//routes for employees
//create employee
router.route('/createemployee').post(registerEmployee);

//Get all employees
router.route('/getallemployees').get(getAllUsers);

//Get a specific user
router.route('/getemployee').get(getUserById);

//Update an emloyee
router.route('/updateemployee').patch(updateUserById);

//Delete an Employee
router.route('/dltemployee').delete(deleteUserById);




//Routes For QnA 
//create Query
// router.route('/createquery').post(createQuery);
router.route("/createquery").post(protect,createQuery)
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix+file.originalname);
  },
});

const upload = multer({ storage: storage });
router.post("/upload-image",upload.single("image"),uploadfile)
//Update Query Or Answer Query
router.route('/answerquery').patch(updateQuery);

//Get Query By Employee's Id
router.route('/getempquery').get(getQueryByTeacherId);

//Get Query By Student's Id
router.route('/getstuquery').get(getQueryByStudentId)


module.exports = router