import React from 'react';
import {
    Box,
   

    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Accordion,
  } from "@chakra-ui/react";

const QueryAccordion = ({id,Question,Answer}) => {
  return (
    <>
      
        
          <Accordion width={"50vw"} defaultIndex={[0]} allowMultiple>
            <AccordionItem border={".5px solid black"}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {Question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{Answer}</AccordionPanel>
            </AccordionItem>
          </Accordion>
       
     
    </>
  );
}

export default QueryAccordion
