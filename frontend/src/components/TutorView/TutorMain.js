import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import SideBtn from "./SideBtn";
import {
  Box,
  Accordion,
} from "@chakra-ui/react";
import QnA from "./QnA";
import Navbar from "../Navbar";

const TutorMain = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const [sideBtn, setSideBtn] = useState([]);
  const [tutorId, setTutorId] = useState(user._id);
  const [queryId, setQueryId] = useState();
  const [qnaId, setQnaId] = useState();
  const [answer, setAnswer] = useState();
  const [qnaValues, setQnaValues] = useState();
  const getMyQueries = async () => {
    try {
      console.log(`my id ${tutorId}`);

      const { data } = await axios.get(
        `/api/user/getempquery?resId=${tutorId}`
      );

      setSideBtn(data);
      console.log("my values", sideBtn);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMyQueries();
  }, []);
  //console.log(`from btn ${queryId}`);
  // console.log(`from qnaId ${qnaId}`);
  // console.log(`from qnaValues ${qnaValues}`);
  const answerQuery = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const requestBody = {
        questionId: qnaId,
        answer: answer,
        status: true,
      };
      const { data } = await axios.patch(
        `/api/user/answerquery?ansQueryId=${queryId}`,
        requestBody,
        config
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
    <Navbar/>
     
    
      <Box display={"flex"}>
        <Box w={"30%"} p={4}>
          {sideBtn?.map((elem, index) => {
            return (
              <SideBtn
                key={index}
                id={elem._id}
                stuFname={elem.requestId.fname}
                stuLname={elem.requestId.lname}
                stuEmail={elem.requestId.email}
                QnAData={elem.QnA}
                setQnaValues={setQnaValues}
                setQueryId={setQueryId}
              />
            );
          })}
        </Box>
        <Box w={"70%"} mt={4}>
          <Accordion>
            {qnaValues?.map((elem, index) => {
              return (
                <QnA
                  key={index}
                  id={elem._id}
                  Question={elem.question}
                  Answer={elem.answer}
                  qnaStatus={elem.status}
                  setQnaId={setQnaId}
                  setAnswer={setAnswer}
                  answerQuery={answerQuery}
                />
              );
            })}
          </Accordion>
        </Box>
      </Box>
    </>
  );
};

export default TutorMain;
