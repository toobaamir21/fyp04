import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
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
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import axios from "axios";

const AdSideBtn = ({ empFname, empLname, empRole, empEmail, id,getAllEmployees,setTutorId,getQueries }) => {
  const [empId, setEmpId] = useState();
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [role, setRole] = useState();
  const [cnic, setCnic] = useState();
  const [phone, setPhone] = useState();
  const [desc, setDesc] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure()
  console.log(`empId ${empId}`);
  const dltemployee = async()=>{
    try{
        if(window.confirm("Do You Really Want To Delete This User?")){
            await axios.delete(`/api/user/dltemployee?dltId=${empId}`);
            getAllEmployees()
        }
    }catch(err){
        console.log(err);
    }
  };
  const updateUser = async()=>{
    try{
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
      await axios.patch(`/api/user/updateemployee?updId=${empId}`,userParam,config);
      getAllEmployees()
    }catch(err){
      console.log(err);
    }
  }
  return (
    <>
      <Box
        m={2}
        display={"flex"}
        onClick={() => {
          setTutorId(id);
        }}
      >
        <Button
          colorScheme="teal"
          display={"block"}
          w={"15vw"}
          h={"10vh"}
          
          fontSize={"15px"}
          textAlign={"center"}
        >
          <div>
            {empFname} {empLname}
          </div>
          <div>{empRole}</div>
        </Button>
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="teal"
            variant={"outline"}
            mt={1}
            ml={1}
            onClick={() => {
              setEmpId(id);
            }}
          >
            ...
          </MenuButton>
          <MenuList>
            <MenuItem onClick={onOpen}>
              <EditIcon mr={2} />
              Edit
            </MenuItem>
            <MenuItem
              onClick={() => {
                dltemployee();
              }}
            >
              <DeleteIcon mr={2} color={"red"} />
              Delete
            </MenuItem>
            <MenuItem
              onClick={() => {
                getQueries();
              }}
            >
              Show Queries
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update User</ModalHeader>
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
                placeholder="CNIC"
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
                placeholder="Phone"
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
              onClick={() => {
                updateUser();
                onClose();
              }}
            >
              Update
            </Button>
            <Button colorScheme="red" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AdSideBtn;
