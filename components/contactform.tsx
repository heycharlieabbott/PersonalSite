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
    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" method="POST">
    <input type="hidden" name="form-name" value="contact"/>
      <div className="mb-4 flex flex-col gap-6 justify-evenly">
        <Input size="lg" label="Name" id="name" name="name" required/>
        <Input size="lg" label="Email"id="email" name="email" required />
        {/* <Input containerProps={{className:'h-40 '}} label="Message" /> */}
            
        <textarea autoFocus className='indent-1 border-2 rounded-md border-blue-gray-100 max-w-screen-lg sm:w-96' rows={4} cols={46} name="message" required></textarea>
        
      </div>
      <div data-netlify-recaptcha="true"></div>
      <Button className="mt-6" fullWidth type='submit'>
    Send Message
    </Button> 
    </form>  
  </Card> 
    </div>
  )
}

export default ContactForm


{/* <form name="contact" netlify netlify-honeypot="bot-field" hidden>
     <input type="text"  name="name">
     <input type="email" name="email">
     <textarea name="message"></textarea>
      <div data-netlify-recaptcha="true"></div>
</form>  */}