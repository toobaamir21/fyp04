import { Box, Button, Heading, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent,  ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Logout from './Logout';

const Navbar = () => {
     const [user, setUser] = useState({});
     useEffect(() => {
       const username = JSON.parse(localStorage.getItem("userInfo"));
       setUser(username);
     }, []);
     const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box display="flex">
        <Box
          display="flex"
          justifyContent="space-between"
          w="100vw"
          alignItems={"center"}
          color={"black"}
          p={"5px 10px 5px 10px"}
          flexDirection="row"
          h={"10vh"}
        >
          <Text fontSize={"2vw"} fontWeight={"bold"} color={"gray"}>
            KU Students Solutions
          </Text>

          <Menu>
            <MenuButton
              colorScheme={"blue"}
              as={Button}
              color={"white"}
              borderRadius="3px"
              boxShadow="0px 1px 4px -2px #333"
              textShadow="0px -1px white"
            >
              {user.fname}
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Button bg={"transparent"} onClick={onOpen}>
                  User Profile
                </Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader textAlign={"center"}>User Info</ModalHeader>
                    <ModalBody textAlign={"center"}>
                      <Heading fontSize={"xl"}>Name</Heading>
                      <Text>
                        {user.fname} {user.lname}
                      </Text>
                      <Heading fontSize={"xl"}> Email</Heading>
                      <Text>{user.email}</Text>
                    </ModalBody>
                    <ModalCloseButton />
                  </ModalContent>
                </Modal>
              </MenuItem>
              <MenuItem>
                <Logout />
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </>
  );
}

export default Navbar
