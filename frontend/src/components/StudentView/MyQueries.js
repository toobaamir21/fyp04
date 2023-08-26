import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  Box,
  Accordion,
} from "@chakra-ui/react";

import Btn from "./Btn";
import QueryAccordion from "./QueryAccordion";
import Navbar from "../Navbar";

const StudentMain = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  console.log("this is a userid",user._id);
  const [btn, setBtn] = useState([]);
  const [studentId, setStudentId] = useState(user._id);
  const [queryId, setQueryId] = useState();
   const [qnaValues, setQnaValues] = useState();
  const getMyQueries = async () => {
    try {
      console.log(`my id ${studentId}`);

      const { data } = await axios.get(
        `/api/user/getstuquery?reqId=${studentId}`
      );
      console.log("this is a data",data);
      setBtn(data);
      console.log("my values", btn);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMyQueries();
  }, []);
  
  
  return (
    <>
      <Navbar />
      <Box display={"flex"}>
        <Box w={"30%"} p={4}>
          {btn?.map((elem, index) => {
            return (
              <Btn
                key={index}
                id={elem._id}
                tchFname={elem.responseId.fname}
                tchLname={elem.responseId.lname}
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
                <QueryAccordion
                  key={index}
                  id={elem._id}
                  Question={elem.question}
                  Answer={elem.answer}
                />
              );
            })}
          </Accordion>
        </Box>
      </Box>
    </>
  );
};

export default StudentMain;
