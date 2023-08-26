const fileupload = require("../models/FileUpload");
const qnamodel = require("../models/questionModel");


const uploadfile = async(req,res)=>{
       const imageName = req.file.filename
       try {
        await fileupload.create({image:imageName})
        res.send({status:"ok"})
       } catch (error) {
          res.send({ status: error });
       }
      //res.send("uploaded")
}
const createQuery = async (req, res) => {
  try {
    const { name, email, requestId, responseId, question } = req.body;
    const qnaParam = {
      name,
      email,
      requestId,
      responseId,
      QnA: [{ question: question }],
    };
    const checkData = await qnamodel.findOne({
      $and: [{ requestId: requestId }, { responseId: responseId }],
    });
    if (checkData) {
      const QnAVal = checkData.QnA;
      console.log(`checkData.QnA ${QnAVal}`);
      const updVal = { QnA: [...QnAVal, { question: question }] };
      const data = await qnamodel.findByIdAndUpdate(
        { _id: checkData._id },
        updVal,
        { new: true }
      );
      if (data) {
        res.status(201).json({ data });
      } else {
        res.status(404).json({ msg: "Error Occured" });
      }
    } else if (!checkData) {
      const qnaData = await qnamodel.create(qnaParam);
      console.log(qnaData);
      res.status(201).send( qnaData );
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const updateQuery = async (req, res) => {
  try {
    const id = req.query.ansQueryId; // The ID of the document
    const { questionId, answer } = req.body; // The questionId and new answer

    const updateParams = {
      $set: { 
      "QnA.$[element].answer": answer,
      "QnA.$[element].status": true},
    };

    const updateOptions = {
      new: true,
      arrayFilters: [{ "element._id": questionId }], // Filter to find the matching array element
    };

    const updatedData = await qnamodel.findOneAndUpdate(
      { _id: id }, // Find the document by its ID
      updateParams, // Update the specific question's answer
      updateOptions // Use the arrayFilters to identify the array element
    );

    if (updatedData) {
      res.status(200).send( updatedData );
    } else {
      res.status(404).json({ msg: "Data not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

//find query by teacher's ID
const getQueryByTeacherId = async (req, res) => {
  try {
    const id = req.query.resId;
    const queryData = await qnamodel
      .find({ responseId: id })
      .sort({ updatedAt: -1 })
      .populate("requestId", "-pass")
      .populate("responseId", "-pass");
    if (queryData) {
      res.status(200).send(queryData);
    } else {
      res.status(200).json({ msg: "You Have No Queries" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

//find query by studdents's ID
const getQueryByStudentId = async (req, res) => {
  try {
    const id = req.query.reqId;
    const queryData = await qnamodel
      .find({ requestId: id })
      .sort({ updatedAt: -1 })
      .populate("requestId", "-pass")
      .populate("responseId", "-pass");
    if (queryData) {
      res.status(200).send( queryData );
    } else {
      res.status(200).json({ msg: "You Have No Queries" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

module.exports = {
  createQuery,
  updateQuery,
  getQueryByTeacherId,
  getQueryByStudentId,
  uploadfile,
};
