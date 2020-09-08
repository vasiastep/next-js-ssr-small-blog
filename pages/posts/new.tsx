import { useState } from 'react'
import { MainLayout } from '../../components/MainLayout'
import styled from 'styled-components'
import { IPost } from '..'
import axios from 'axios'
import { API_URL } from '../../constants'
import Router from 'next/router'

const Head = styled.h2`
  text-align: center;
`

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export default function CreatePost() {
  const [post, setPost] = useState<IPost>({
    title: '',
    body: '',
    id: '',
  })
  const [error, setError] = useState<string>('')

  const handleInputChange = (e) => {
    e.persist()
    if (error) {
      setError('')
    }
    setPost((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const addPost = async () => {
    if (post.body && post.title) {
      await axios.post(`${API_URL}/posts`, {
        title: post.title,
        body: post.body,
      })

      Router.push('/')
    } else {
      return setError('Field should not be empty')
    }
  }

  return (
    <MainLayout title="Create post">
      <Head>Add new</Head>
      <FormContainer>
        <input
          type="text"
          name="title"
          placeholder="Post title"
          className="title-input"
          value={post.title}
          onChange={handleInputChange}
        />
        <textarea
          name="body"
          placeholder="Post content"
          className="textarea"
          value={post.body}
          onChange={handleInputChange}
        />
        <p className="error-text">{error}</p>
        <button className="btn" onClick={addPost}>
          Submit
        </button>
      </FormContainer>
    </MainLayout>
  )
}
