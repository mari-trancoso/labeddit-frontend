import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/constants'

const PostsPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const headers = {
      authorization: localStorage.getItem('token')
    }
    
    getAllPosts(headers)
    
  }, [])

  const getAllPosts = async (headers) => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`, {headers})

      setPosts(response.data)
      console.log(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <>  
            <p>Enviado por: {post.creator.nickname}</p>
            <ul>{post.content}</ul>
            <ul>{post.comments}</ul>
          </>
        )
      })}
    </>
    
  )
}

export default PostsPage