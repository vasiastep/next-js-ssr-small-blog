import { useEffect, useState } from 'react'
import { MainLayout } from '../components/MainLayout'
import axios from 'axios'
import { NextPageContext } from 'next'
import { API_URL } from '../constants'
import Link from 'next/link'
import { IPost } from '../interfaces'

export default function Home({ posts }: { posts: IPost[] }) {
  const [latestPosts, setLatestPosts] = useState<IPost[]>()
  useEffect(() => {
    setLatestPosts(posts.splice(posts.length - 7, posts.length))
  }, [])

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
                <div className="post">
                  <h1 className="post-title">{post.title}</h1>
                  <div className="post-body">{post.body}</div>
                </div>
              </Link>
            ))
          : null}
      </div>
    </MainLayout>
  )
}

Home.getInitialProps = async (ctx: NextPageContext) => {
  // const response = await axios.get(`${API_URL}/posts?_limit=15`)
  const response = await axios.get(`${API_URL}/posts`)

  return { posts: response.data }
}
