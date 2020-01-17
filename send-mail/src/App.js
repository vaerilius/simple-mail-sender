import React, { useState } from 'react'
import axios from 'axios';
import {
  FormControl,
  Input,
  FormHelperText,
  InputLabel,
  Button,
  Box,
  Container
} from '@material-ui/core/'
import './App.css'

const App = () => {
  const [message, setmessage] = useState('')
  const [email, setemail] = useState('')
  const [subject, setsubject] = useState('')

  const handleClick = async () => {
    const data = {
      message,
      subject,
      email
    }
    const response = await axios.post('http://localhost:3000/mail', data)
    console.log(response)
  }
  return (
    <div>
      <Container fixed>
        <FormControl>
          <InputLabel htmlFor='my-input1'>Message</InputLabel>
          <Input id='my-input1' 
          value={message}
          onChange={({target}) => setmessage(target.value)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='my-input2'>Email address</InputLabel>
          <Input id='my-input2'
                    value={email}
                    onChange={({target}) => setemail(target.value)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='my-input3'>Subject</InputLabel>
          <Input id='my-input3' 
                    value={subject}
                    onChange={({target}) => setsubject(target.value)}
          />

          <Button onClick={handleClick}>send Mail</Button>
        </FormControl>
      </Container>
    </div>
  )
}

export default App
