import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/constants'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import commentsIcon from '../../assets/commentsIcon.png'
import likeIcon from '../../assets/liked-icon.png'
import dislikeIcon from '../../assets/disliked-icon.png'
import { goToCommentsPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'

const PostsPage = () => {
  const navigate = useNavigate()
  
  const [posts, setPosts] = useState([])

  const [content, setContent] = useState("")

  const body = { content: content }

  useEffect(() => {
    const headers = {
      authorization: localStorage.getItem('token')
    }

    getAllPosts(headers)

  }, [])

  const getAllPosts = async (headers) => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })

      setPosts(response.data)
      console.log(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  const createPost = async (headers) => {
    const body = { content: content }
    try {
      await axios.post(`${BASE_URL}/posts`, body, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      getAllPosts()

    } catch (error) {
      console.log(error)
      console.log(body)
    }
  }

  const likeOrDislikePost = async(id, like) => {
    const body = {
      "like": like,
    }
    
    try {
      await axios.put(`${BASE_URL}/posts/${id}/like`, body, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      getAllPosts()

    } catch (error) {
      console.log(error)
      console.log(body)
    }
  }

  return (
    <>
      <h1>Posts</h1>
      <Input
        type='content'
        placeholder='Escreva seu post...'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button onClick={() => createPost(body)}>Postar</Button>
      {posts.map((post) => {
        return (
          <>
            <p>Enviado por: {post.creator.nickname}</p>
            <ul>{post.content}</ul>
            <ul>{post.comments}</ul>
            <Button onClick={() => goToCommentsPage(navigate)}><img src={commentsIcon} /></Button>
            <ul>{post.likes}</ul>
            <Button onClick={()=>likeOrDislikePost(post.id, true)}><img src={likeIcon} /></Button>
            <Button onClick={()=>likeOrDislikePost(post.id, false)}><img src={dislikeIcon} /></Button>
          </>
        )
      })}
    </>

  )
}

export default PostsPage