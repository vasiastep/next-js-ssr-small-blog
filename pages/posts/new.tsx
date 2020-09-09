import { useState } from 'react';
import { MainLayout } from '../../components/MainLayout';
import { IPost } from '../../interfaces';
import axios from 'axios';
import { API_URL } from '../../constants';
import Router from 'next/router';
import {
  Head,
  FormContainer,
  PostTitleInput,
  PostBodyTextarea,
  ErrorText,
  Button,
} from '../../components/styledComponents';

export default function CreatePost(): JSX.Element {
  const [post, setPost] = useState<IPost>({
    title: '',
    body: '',
    id: '',
  });
  const [error, setError] = useState<string>('');

  const handleInputChange = (e) => {
    e.persist();
    if (error) {
      setError('');
    }
    setPost((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addPost = async () => {
    if (post.body && post.title) {
      await axios.post(`${API_URL}/posts`, {
        title: post.title,
        body: post.body,
      });

      Router.push('/');
    } else {
      return setError('Field should not be empty');
    }
  };

  return (
    <MainLayout title="Create post">
      <Head>Add new</Head>
      <FormContainer>
        <PostTitleInput
          type="text"
          name="title"
          placeholder="Post title"
          value={post.title}
          onChange={handleInputChange}
        />
        <PostBodyTextarea
          name="body"
          placeholder="Post content"
          className="textarea"
          value={post.body}
          onChange={handleInputChange}
        />
        <ErrorText>{error}</ErrorText>
        <Button onClick={addPost}>Submit</Button>
      </FormContainer>
    </MainLayout>
  );
}
