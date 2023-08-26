import React, { useState } from "react";
import { useEffect } from "react";
// import {Box,Text} from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Text,
  Button,
  Card,
  CardBody, 
  CardFooter,
  Image,
  Stack,
  Heading,
  Divider,
  ButtonGroup
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import Navbar from "./Navbar";

const Student = () => {

  return (
    <>
      <Navbar />

      <Box
        display="flex"
        justifyContent="space-evenly"
        w="100vw"
        alignItems={"center"}
        bg={"white"}
        color={"black"}
        p={"5px 10px 5px 10px"}
        borderWidth={"5px"}
        flexDirection="row"
        height="90%"
      >
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://www.mantralabsglobal.com/wp-content/uploads/2020/05/Customer-Service-chatbots.png"
              alt="QnA Forum"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">QnA Forum</Heading>
              <Text>
                This feature helps you to finding answers of your admin related
                queries.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button
                variant="solid"
                borderRadius="3px"
                boxShadow="0px 1px 4px -2px #333"
                textShadow="0px -1px white"
                colorScheme="whatsapp"
              >
                <Link to={"/qna"}> Goto QnA Forum</Link>
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://th.bing.com/th/id/OIP.fiehj1hHdS2Cs6iDELw9ZQHaCu?pid=ImgDet&rs=1"
              alt="Tracking App"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="4">
              <Heading size="md">Tracking App</Heading>
              <Text>
                This feature is for tracking the points which helps to track
                points from everywhere
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button
                borderRadius="3px"
                boxShadow="0px 1px 4px -2px #333"
                textShadow="0px -1px white"
                variant="solid"
                colorScheme="whatsapp"
              >
                Goto Tracking App
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
};

export default Student;
