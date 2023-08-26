import React from "react";
import {
  Box,
  Button,
  Text,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  FormControl,Input, Accordion,
} from "@chakra-ui/react";
import { ArrowRightIcon} from '@chakra-ui/icons'
const QnA = ({ Question, Answer, id, setQnaId, qnaStatus,setAnswer,answerQuery }) => {
  return (
    <>
      <Accordion width={"50vw"}  defaultIndex={[0]} allowMultiple>
        <AccordionItem border={".5px solid black"}>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontWeight={"bold"}
                onClick={() => {
                  setQnaId(id);
                }}
              >
                {Question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {qnaStatus === false ? (
              <Box display={"flex"}>
                <FormControl isRequired mr={2}>
                  <Input
                    border={"2px solid gray"}
                    placeholder="Write Answer"
                    color={"black"}
                    type={"text"}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                </FormControl>
                <Button
                  colorScheme="teal"
                  size="sm"
                  mt={1}
                  onClick={() => {
                    answerQuery();
                  }}
                >
                  <ArrowRightIcon />
                </Button>
              </Box>
            ) : (
              <Text>{Answer}</Text>
            )}

            {/* <Button
            colorScheme="teal"
            size="sm"
            onClick={() => {
              setQnaId(id);
            }}
          >
            Response
          </Button> */}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default QnA;
