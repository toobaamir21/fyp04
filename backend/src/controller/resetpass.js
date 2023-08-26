
const jwt = require("jsonwebtoken");
const sgmail = require("@sendgrid/mail");
const JWT_SECRET = "some secrets remain secret.";
// const API_KEY =
//   "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";
// sgmail.setApiKey(API_KEY);
const otpCheck = async (req, res) => {
  const { email } = req.body;
  const stu = await Student.findOne({ email });
  const secret = JWT_SECRET + stu.pass;
  const payload = {
    email: stu.email,
    id: stu._id,
  };
  const token = jwt.sign(payload, secret, { expiresIn: "15m" });

  const link = `http://localhost:3000/resetyourpass/${stu._id}/${token}`;

  console.log(link);
  // console.log(stu.email);
  res.send(email);
  const message = {
    to: email,
    from: "toobaamir50@gmail.com",
    subject: "otp email",
    text: "Hello from sendgrid",
    html: link,
  };
  sgmail
    .send(message)
    .then((response) => console.log("emailsent"))
    .catch((error) => console.log(error.message));
};
const resetfunc = async (req, res) => {
  const { pass, id, token } = req.body;

  console.log(pass);
  console.log("URL ID IS:", id);
  const stu = await Student.findOne({ _id: id });
  console.log("your id is:", stu._id);
  if (!stu) {
    res.send("Invalid Id");
    console.log("invalid id");
    return;
  }
  const secret = JWT_SECRET + stu.pass;
  try {
    const payloading = jwt.verify(token, secret);
    console.log(payloading);
    const salt = await bcrypt.genSalt(10);
    const secpass = await bcrypt.hash(pass, salt);
    let passupdate = await Student.findOneAndUpdate(
      { _id: id },
      { $set: { pass: secpass } }
    );
    console.log(passupdate);
    res.status(201).send("passupdate");
    return;
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};
module.exports = { otpCheck, resetfunc };
