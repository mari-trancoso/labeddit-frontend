import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../constants/constants'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CommentsPage = () => {

  const params = useParams()

  const [comments, setComments] = useState([])
  const [content, setContent] = useState("")

  useEffect(() => {
    const headers = {
      authorization: localStorage.getItem('token')
    }

    getComments(headers)

  }, [])

  const getComments = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/comments/${params.id}`, {
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
    <>
      <h1>Comentários</h1>
      { comments.map((comment) => {
        return(
          <>
            <p>Enviado por: </p>
            <ul>{comment.content}</ul>
          </>
        )
        
      })}
    </>
    
  )
}

export default CommentsPage