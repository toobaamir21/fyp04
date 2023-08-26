import React from 'react'
import {Box,Button,Text} from '@chakra-ui/react'

const SideBtn = ({stuFname,stuLname,id,stuEmail,setQueryId,QnAData,setQnaValues}) => {
    
  return (
    <>
      <Box m={2}>
        <Button
          colorScheme="teal"
          w={"15vw"}
          h={"10vh"}
          display={"block"}
          fontSize={"15px"}
          textAlign={"center"}
          onClick={() => {
            setQueryId(id);
            setQnaValues(QnAData);
          }}
        >
          <div>
            {stuFname} {stuLname}
          </div>
          <div>{stuEmail}</div>
        </Button>
      </Box>
    </>
  );
}

export default SideBtn
