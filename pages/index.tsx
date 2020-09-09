import { useEffect, useState } from 'react';
import { MainLayout } from '../components/MainLayout';
import axios from 'axios';
import { API_URL } from '../constants';
import Link from 'next/link';
import { IPost } from '../interfaces';
import { PostWrap, PostTitle, PostBody } from '../components/styledComponents';

export default function Home({ posts }: { posts: IPost[] }): JSX.Element {
  const [latestPosts, setLatestPosts] = useState<IPost[]>();
  useEffect(() => {
    setLatestPosts(posts.splice(posts.length - 7, posts.length));
  }, []);

  return (
    <MainLayout title="Home">
      <div>
        {latestPosts
          ? latestPosts.map((post) => (
              <Link
                href="/posts/[postId]"
                as={`/posts/${post.id}`}
                key={post.id}
              >
                <PostWrap>
                  <PostTitle>{post.title}</PostTitle>
                  <PostBody>{post.body}</PostBody>
                </PostWrap>
              </Link>
            ))
          : null}
      </div>
    </MainLayout>
  );
}

Home.getInitialProps = async () => {
  const response = await axios.get(`${API_URL}/posts`);

  return { posts: response.data };
};
