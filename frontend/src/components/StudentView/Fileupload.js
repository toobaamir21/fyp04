import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'

const Fileupload = () => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    const [image,setImage] = useState()
    const [imageid,setImageId] = useState()
    const upload=async(e)=>{
         e.preventDefault()
         const formData = new FormData()
         formData.append("image",image)
         console.log("this is a formdata",formData);
         const result = await axios.post("/api/user/upload-image", formData, {
           headers: {
             "Content-Type": "multipart/form-data",
           },
         });
         
         
    }
  return (
    <div>
      <FormControl isRequired>
        <FormLabel>Upload doc</FormLabel>
        <Input
          border={"2px solid gray"}
          color={"black"}
          type={"file"}
          onChange={(e) => setImage(e.target.files[0])}
        />
        <Button type='submit' onClick={upload}>Upload</Button>
      </FormControl>
    </div>
  );
}

export default Fileupload
