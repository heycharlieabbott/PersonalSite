import React from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";

type Props = {}

const ContactForm = (props: Props) => {
  return (
    <div>
    <Card color="transparent" shadow={false}>
    <Typography variant="h4" color="blue-gray">
      Say Hello
    </Typography>
    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
      <div className="mb-4 flex flex-col gap-6 justify-evenly">
        <Input size="lg" label="Name" />
        <Input size="lg" label="Email" />
        {/* <Input containerProps={{className:'h-40 '}} label="Message" /> */}
            
            <textarea autoFocus name='message' className='indent-1 border-2 rounded-md border-blue-gray-100 max-w-screen-lg sm:w-96' rows={4} cols={46}></textarea>
        
      </div>
      
    </form>  
    <Button className="mt-6" fullWidth>
    Send Message
    </Button>
  </Card> 
    </div>
  )
}

export default ContactForm