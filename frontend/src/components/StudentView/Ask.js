import React, { useEffect, useState, } from "react";
import {
  SimpleGrid,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
// import { InfoContext } from "../../Context/InfoProvider";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Fileupload from "./Fileupload";
const Ask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = JSON.parse(localStorage.getItem("userInfo"))
  const [requestId, setRequestId] = useState();
  const [tutorId, setTutorId] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [question, setQuestion] = useState();
  const [cards, setCards] = useState([]);
  const getCards = async () => {
    try {
      
      const { data } = await axios.get("/api/user/getallemployees");
      setCards(data);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    setRequestId(user._id);
    getCards();
  }, []);

  const createQuery = async()=>{
    try{
          const user = JSON.parse(localStorage.getItem("userInfo"));
          console.log("this is a token",user.token);
          const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const reqParam = {
        name: name,
        email: email,
        requestId: requestId,
        responseId: tutorId,
        question: question,
      };
      const { data } = await axios.post(
        "/api/user/createquery",
        reqParam,
        config
      );
      console.log(data);
    }catch(err){
      console.log(err);
    }
  };

  return (
    <>
    <Navbar/>
    <div className = "ask-container">
      <Heading textAlign={"center"} as="h2" size="2xl">
        ASK ME
      </Heading>
      <Heading marginTop={".5vw"} textAlign={"center"} as="h5" size="sm">
        We are here to answer your queries!
      </Heading>
      <Heading marginTop={".5vw"} textAlign={"center"} as="h5" size="sm">
        
      <Button colorScheme='whatsapp'><Link to={'/qna/askme/myqueries'}>My Queries</Link></Button>
      </Heading>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        templateRows="repeat(auto-fit, minmax(300px, 1fr))"
        p={"2vw"}
        
      >
        {cards?.map((val, index) => {
          return (
            <Cards
              key={index}
              id={val._id}
              fname={val.fname}
              lname={val.lname}
              role={val.role}
              description={val.description}
              handleClick={onOpen}
              setTutorId={setTutorId}
            />
          );
        })}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Write A Query</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <VStack spacing={"5px"} fontFamily={"Playfair Display"}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>
                      <Input
                        border={"2px solid gray"}
                        color={"black"}
                        type={"text"}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input
                        border={"2px solid gray"}
                        color={"black"}
                        type={"text"}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Enter Query</FormLabel>
                      <Input
                        border={"2px solid gray"}
                        color={"black"}
                        type={"text"}
                        onChange={(e) => setQuestion(e.target.value)}
                      />
                    </FormControl>
                    <Fileupload/>
                  </VStack>
          </ModalBody>

          <ModalFooter>
          <Button
                    colorScheme="green"
                    mr={3}
                    onClick={() => {
                      createQuery();
                      onClose();
                    }}
                  >
                    Send
                  </Button>
                  <Button colorScheme="red" onClick={onClose}>
                    Cancel
                  </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
</>
  );
};

export default Ask;
