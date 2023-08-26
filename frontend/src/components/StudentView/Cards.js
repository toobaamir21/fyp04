import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Button, Heading } from "@chakra-ui/react";
import Navbar from '../Navbar';

const Cards = ({id,fname,role,description,setTutorId,handleClick}) => {
    // console.log(`from card ${id} and setTutoId ${setTutorId}`);
  return (
    <>
      <Card boxShadow=" 0 3px 6px gray, 0 4px 6px lightgray">
        <CardHeader>
          <Heading size="md">{role}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{description}</Text>
        </CardBody>
        <CardFooter>
          <Button
            w={"10vw"}
            borderRadius="3px"
            boxShadow="0px 1px 4px -2px #333"
            textShadow="0px -1px white"
            colorScheme='whatsapp'
            onClick={() => {
              handleClick();
              setTutorId(id);
            }}
          >
            {fname}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default Cards
