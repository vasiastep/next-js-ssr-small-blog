import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainLayout } from '../../components/MainLayout'
import { NextPageContext } from 'next'
import axios from 'axios'
import { API_URL } from '../../constants'
import styled from 'styled-components'
import { addNewComment } from '../../redux/actions'
import { IPostWithComment } from '../../interfaces'

const CommentSection = styled.div`
  margin-top: 5rem;
`

const Section = styled.section`
  text-align: justify;
`
const Comment = styled.div`
  padding: 1rem 2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 90%;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export default function Post({ post }: { post: IPostWithComment }) {
  const [comment, setComment] = useState<string>('')
  const [error, setError] = useState<string>('')
  const dispatch = useDispatch()
  const [comments, setComments] = useState(post.comments)
  const { list } = useSelector((state) => state.post)

  const addComment = async () => {
    if (comment) {
      dispatch(addNewComment(comment, post))

      setComment('')
    } else {
      return setError('Type something if you want to add comment!')
    }
  }

  useEffect(() => {
    setComments(post.comments.concat(list))
  }, [list])

  return (
    <MainLayout title="Post">
      <h1 className="postTitle">{post?.title}</h1>
      <Section>
        <p>{post?.body}</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          mollitia expedita culpa vel esse, ullam eum dolores facere quis
          deserunt neque, repudiandae quibusdam eos eaque consectetur ipsam
          molestiae laboriosam ducimus. Neque, odio saepe. Sed error quo unde
          similique possimus sequi vitae saepe exercitationem tempora illo culpa
          et accusamus dolorem suscipit, blanditiis voluptas hic, facere est
          amet modi. Obcaecati quo, nostrum veritatis molestias culpa,
          necessitatibus commodi at a, sit quasi ducimus enim perspiciatis
          veniam quam neque? Magni provident repellendus distinctio numquam rem
          accusamus, repudiandae ratione, quidem ipsam aliquid quisquam sequi
          aspernatur. Doloribus, harum inventore officiis consectetur quidem
          commodi, delectus sint sequi ipsum laudantium iure. Nihil quo libero
          rem sequi ab adipisci suscipit fugit, corporis ducimus magni
          perferendis sint eveniet alias aut totam ullam nisi hic ratione
          nostrum pariatur nam. Vel, quae officia? Dolor ducimus deserunt ipsum
          illum nisi voluptas. Iste, nemo animi repellat architecto id tempora
          iure nisi commodi sint eaque expedita magni consequatur enim
          reiciendis minus cupiditate quas rerum provident voluptate sed.
          Consequuntur officiis beatae pariatur harum a voluptates fuga eveniet!
          Ut reiciendis voluptas unde hic necessitatibus dolor consectetur fugit
          consequuntur earum corporis tempore, quasi quae a impedit, sint amet
          odit deserunt exercitationem expedita voluptatum! Officiis quaerat
          voluptates et reprehenderit.
        </p>
      </Section>
      <CommentSection>
        <h2>Was it interesting for you?</h2>
        <textarea
          className="comment-area"
          name="comment"
          placeholder="Leave a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <div>
          <button className="btn" onClick={addComment}>
            Add comment
          </button>
          <p className="error-text">{error}</p>
        </div>

        <div className="comments-list">
          {comments.length
            ? comments.map((comment) => (
                <Comment key={comment.id}>
                  <div className="avatar"></div>
                  <div className="comment-info">
                    <div className="author">anonymous@gmail.com</div>
                    <div>{comment.body}</div>
                  </div>
                </Comment>
              ))
            : null}
        </div>
      </CommentSection>
    </MainLayout>
  )
}

Post.getInitialProps = async ({ query }: NextPageContext) => {
  const response = await axios.get(
    `${API_URL}/posts/${query.postId}?_embed=comments`
  )

  return { post: response.data }
}
