import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  Input,
  Accordion
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Navbar from "../Navbar";
import AdSideBtn from "./AdSideBtn";
import AdminAccordion from "./AdminAccordion";

const AdminMain = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const [employees, setEmployees] = useState([]);
  const [adminId, setAdminId] = useState(user._id);
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [role, setRole] = useState();
  const [cnic, setCnic] = useState();
  const [phone, setPhone] = useState();
  const [desc, setDesc] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [tutorId, setTutorId] = useState();
  const [qna,setQna] = useState([])
  const [qnaData,setQnaData] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure();
  const getAllEmployees = async () => {
    try {
      const { data } = await axios.get(`/api/user/getallemployees`);
      setEmployees(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  const createUser = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const userParam = {
        fname:fname,
        lname:lname,
        cnicNumber:cnic,
        role:role,
        phoneNumber:phone,
        description:desc,
        email:email,
        pass:pass,
      };
      const {data} = await axios.post('/api/user/createemployee',userParam,config);
      getAllEmployees()
    } catch (err) {
      console.log(err);
    }
  };
  const getQueries = async ()=>{
    try{
      console.log(`tutorId ${tutorId}`);
      const {data} = await axios.get(`/api/user/getempquery?resId=${tutorId}`);
      setQna(data);
      setQnaData(data[0].QnA)
      console.log(`qna ${qna}`);
    }catch(err){console.log(err);}
  }
  return (
    <>
      <Navbar/>
      <Box display={"flex"}>
        <Box w={"30%"} p={4}>
          <Box m={2}>
            <Button
              colorScheme="teal"
              size="lg"
              variant="outline"
              display={"block"}
              w={"71%"}
              fontWeight={"bold"}
              fontSize={"20px"}
              textAlign={"center"}
              onClick={onOpen}
            >
              <AddIcon mr={1} />
              Add New User
            </Button>
          </Box>
          {employees?.map((elem, index) => {
            if (elem._id !== adminId) {
              return (
                <AdSideBtn
                  key={index}
                  id={elem._id}
                  empFname={elem.fname}
                  empLname={elem.lname}
                  empRole={elem.role}
                  empEmail={elem.email}
                  getAllEmployees={getAllEmployees}
                  setTutorId={setTutorId}
                  getQueries={getQueries}
                />
              );
            }
          })}
        </Box>
        <Box w={"70%"} mt={4}>
          <Accordion>
            {qnaData?.map((elem,index)=>{
              return(
                <AdminAccordion 
                key={index}
                Question={elem.question}
                Answer={elem.answer}
                />
              )
            })}
          </Accordion>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired m={2}>
              <Input
                border={"2px solid gray"}
                placeholder="First Name"
                color={"black"}
                type={"text"}
                onChange={(e) => setFname(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired m={2}>
              <Input
                border={"2px solid gray"}
                placeholder="Last Name"
                color={"black"}
                type={"text"}
                onChange={(e) => setLname(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired m={2}>
              <Input
                border={"2px solid gray"}
                placeholder="CNIC Number"
                color={"black"}
                type={"text"}
                onChange={(e) => setCnic(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired m={2}>
              <Input
                border={"2px solid gray"}
                placeholder="Designation"
                color={"black"}
                type={"text"}
                onChange={(e) => setRole(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired m={2}>
              <Input
                border={"2px solid gray"}
                placeholder="Phone Number"
                color={"black"}
                type={"text"}
                onChange={(e) => setPhone(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired m={2}>
              <Input
                border={"2px solid gray"}
                placeholder="Description"
                color={"black"}
                type={"text"}
                onChange={(e) => setDesc(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired m={2}>
              <Input
                border={"2px solid gray"}
                placeholder="Email"
                color={"black"}
                type={"text"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired m={2}>
              <Input
                border={"2px solid gray"}
                placeholder="Password"
                color={"black"}
                type={"text"}
                onChange={(e) => setPass(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="green"
              variant="outline"
              mr={3}
              onClick={()=>{createUser();onClose()}}
            >
              Create
            </Button>
            <Button colorScheme="red" variant="outline" onClick={onClose} >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdminMain;
