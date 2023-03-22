import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { goToLoginPage } from '../../routes/coordinator'
import { BASE_URL } from '../../constants/constants'
import axios from 'axios'

const SignUpPage = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')

  const signup = async () => {

    const body = {
      nickname: nickname,
      email: email,
      password: password}

    try{
      const response = await axios.post(`${BASE_URL}/users/signup`, body)
      localStorage.setItem('token', response.data.token)

      goToLoginPage(navigate)

      console.log(response.data.token)

    }catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <FormControl>
        <Input 
          type='nickname'  
          placeholder='Apelido' 
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
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
      <Button onClick={() => signup()}>Cadastrar</Button>
    </>
    
  )
}

export default SignUpPage