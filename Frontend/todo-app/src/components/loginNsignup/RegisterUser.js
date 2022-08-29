import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
    Input,
    Box
} from '@chakra-ui/react'

import React from 'react'


const RegisterUser = () => {

    const [user, setUser] = React.useState({})

    const handleForm = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (event) => {
        console.log(user)
        await fetch(`http://localhost:8080/register`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "content-type": "application/json" }
        })
        alert("Sign up Successfull");
    }

  return (
    <Box>
          <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input required onChange={handleForm} name="email" type='email' />
              <FormHelperText>We'll never share your email.</FormHelperText>
              <FormLabel>Password</FormLabel>
              <Input required onChange={handleForm} name="password" type='password' />
              <FormHelperText>We'll never share your Password</FormHelperText>
              <Button onClick={()=>handleSubmit()}>Submit</Button>
          </FormControl>
    </Box>
  )
}

export default RegisterUser