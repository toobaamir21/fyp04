import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

const Btn = ({
  tchFname,
  tchLname,
  id,
  setQueryId,
  QnAData,
  setQnaValues,
}) => {
  return (
    <>
      <Box m={2} >
        <Button
          colorScheme="whatsapp"
          display={"block"}
          w={"15vw"}
          h={"10vh"}
          fontSize={"15px"}
          textAlign={"center"}
          onClick={() => {
            setQueryId(id);
            setQnaValues(QnAData);
          }}
        >
          <div>
            {tchFname} {tchLname}
          </div>
        </Button>
      </Box>
    </>
  );
};

export default Btn;
