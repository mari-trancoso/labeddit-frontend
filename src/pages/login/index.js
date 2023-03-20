import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import axios from 'axios'
import {BASE_URL} from "../../constants/constants"
import {goToPostsPage, goToSignupPage} from "../../routes/coordinator"
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const body = {
    email: email,
    password: password}
  

  const login = async (body) => {
    try{
      const response =  await axios.post(`${BASE_URL}/users/login`, body)
      localStorage.setItem('token', response.data.token)
      goToPostsPage(navigate)

      console.log(response.data)


    } catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <FormControl>
        <Input 
          type='email' 
          placeholder='E-mail' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          type='password' 
          placeholder='Senha' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button onClick={() => login(body)}>Continuar</Button>
      <Button onClick={() => goToSignupPage(navigate)}>Crie uma conta</Button>
    </>
  )
}

export default LoginPage