import React from "react";
import {
  Box,
  Button,
  Text,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  FormControl,Input,
} from "@chakra-ui/react";
import { ArrowRightIcon} from '@chakra-ui/icons'
const AdminAccordion = ({ Question, Answer, id, setQnaId, qnaStatus,setAnswer,answerQuery }) => {
  return (
    <>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight={"bold"} >
              {Question}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {/* {qnaStatus === false ? (
            <Box display={'flex'}>
            <FormControl isRequired mr={2}>
              <Input
                border={"2px solid gray"}
                placeholder="Write Answer"
                color={"black"}
                type={"text"}
                onChange={(e) => setAnswer(e.target.value)}
                />
            </FormControl>
             <Button colorScheme='teal' size='sm' mt={1} onClick={()=>{answerQuery()}}>
             <ArrowRightIcon />
           </Button>
                </Box>
          ) : ( */}
            <Text>{Answer}</Text>
          {/* )} */}

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
    </>
  );
};

export default AdminAccordion;
