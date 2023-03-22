import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants/constants'
import axios from 'axios'

const CommentsPage = () => {

  const [comments, setComments] = useState([])

  useEffect(() => {
    const headers = {
      authorization: localStorage.getItem('token')
    }

    getComments(headers)

  }, [])

  const getComments = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/comments/:id`, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })

      setComments(response.data)
      console.log(response.data)

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <h1>Comentários</h1>
  )
}

export default CommentsPage