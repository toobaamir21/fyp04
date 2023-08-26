import React from 'react'
import {
  Box, Button, Heading, ListItem, OrderedList, UnorderedList,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import "./qna.css"
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
const QnA = () => {
  return (
    <div>
      <Navbar />
      <Box h={"100vh"}>
        <Box textAlign={"center"}>
          {/* <h1 className="head">FAQ</h1> */}
          <h2 className="faq">FAQs</h2>
          {/* <h3 className="sml">Have questions? We are here to help</h3> */}
        </Box>

        <Box display={"flex"} justifyContent={"center"} marginTop={"1vw"}>
          <Accordion allowMultiple>
            <AccordionItem border={".5px solid gray"} width={"50vw"}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box className="ques" as="span" flex="1" textAlign="left">
                        Who is the chairperson of UBIT?
                      </Box>
                      {isExpanded ? (
                        <FaMinus className="icon" />
                      ) : (
                        <FaPlus className="icon" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="ans" pb={4}>
                    Ans. The current chairperson is <b>Dr. Nadeem Mehmood</b>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem border={".5px solid gray"} width={"50vw"}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box className="ques" as="span" flex="1" textAlign="left">
                        Who is the student advisor?
                      </Box>
                      {isExpanded ? (
                        <FaMinus className="icon" />
                      ) : (
                        <FaPlus className="icon" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="ans" pb={4}>
                    Ans. There are three student advisors in UBIT, Sir Farhan,
                    Humaira Bashir and Sir Badar.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem border={".5px solid gray"} width={"50vw"}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box className="ques" as="span" flex="1" textAlign="left">
                        When does the perfoma become available of any semester?
                      </Box>
                      {isExpanded ? (
                        <FaMinus className="icon" />
                      ) : (
                        <FaPlus className="icon" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="ans" pb={4}>
                    Ans. You can ask the department office about performa, admit
                    card, enrollment card etc.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem border={".5px solid gray"} width={"50vw"}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box className="ques" as="span" flex="1" textAlign="left">
                        When does admission start for morning?
                      </Box>
                      {isExpanded ? (
                        <FaMinus className="icon" />
                      ) : (
                        <FaPlus className="icon" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="ans" pb={4}>
                    Ans. Admission starts usually around October for morning. It
                    also appears on the KU official website.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem border={".5px solid gray"} width={"50vw"}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box className="ques" as="span" flex="1" textAlign="left">
                        When does admission start for evening?
                      </Box>
                      {isExpanded ? (
                        <FaMinus className="icon" />
                      ) : (
                        <FaPlus className="icon" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="ans" pb={4}>
                    Ans. Admission starts usually around November for evening.
                    It also appears on the KU official website.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem border={".5px solid gray"} width={"50vw"}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box className="ques" as="span" flex="1" textAlign="left">
                        How to get the repeater form?
                      </Box>
                      {isExpanded ? (
                        <FaMinus className="icon" />
                      ) : (
                        <FaPlus className="icon" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="ans" pb={4}>
                    Ans. You can get the repeater form from the admin building.
                    <UnorderedList>
                      <ListItem>Fill the form</ListItem>
                      <ListItem>Attest it from the department</ListItem>
                      <ListItem>
                        Then attest it from the admin building
                      </ListItem>
                      <ListItem>Submit in the bank</ListItem>
                    </UnorderedList>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem border={".5px solid gray"} width={"50vw"}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box className="ques" as="span" flex="1" textAlign="left">
                        What is the marks updation process for repeated course?
                      </Box>
                      {isExpanded ? (
                        <FaMinus className="icon" />
                      ) : (
                        <FaPlus className="icon" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="ans" pb={4}>
                    Ans. You can ask about this to the department office or
                    directly go to the semester cell.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem border={".5px solid gray"} width={"50vw"}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box className="ques" as="span" flex="1" textAlign="left">
                        What is the official KU website?
                      </Box>
                      {isExpanded ? (
                        <FaMinus className="icon" />
                      ) : (
                        <FaPlus className="icon" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="ans" pb={4}>
                    Ans. The official KU website is:
                    <Link to={"https://uok.edu.pk/"}>
                      <u> https://uok.edu.pk/</u>
                    </Link>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <Box marginTop={"4vh"} textAlign={"center"}>
              <Button
                width={"50vw"}
                borderRadius="3px"
                boxShadow="0px 1px 4px -2px #333"
                textShadow="0px -1px white"
                colorScheme="whatsapp"
              >
                <Link to={"/qna/askme"}>Ask Me</Link>
              </Button>
            </Box>
          </Accordion>
        </Box>
      </Box>
    </div>
  );
}

export default QnA
