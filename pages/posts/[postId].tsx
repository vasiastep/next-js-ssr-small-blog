import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NextPageContext } from 'next';
import axios from 'axios';

import { IPostWithComment, IComment } from '../../interfaces';

import { MainLayout } from '../../components/MainLayout';
import { addNewComment, setNewComments } from '../../redux/actions';
import { API_URL } from '../../constants';
import {
  Section,
  CommentSection,
  CommentList,
  CommentTextArea,
  Button,
  ErrorText,
  Comment,
  Avatar,
  Author,
  CommentInfo,
  PostTitleHeader,
} from '../../components/styledComponents';

export default function Post({
  post,
}: {
  post: IPostWithComment;
}): JSX.Element {
  const [comment, setComment] = useState<string>('');
  const [error, setError] = useState<string>('');
  const dispatch = useDispatch();
  const [comments, setComments] = useState<IComment[]>(post.comments);
  const { list } = useSelector((state) => state.post);

  const addComment = async () => {
    if (comment) {
      dispatch(addNewComment(comment, post));

      setComment('');
    } else {
      return setError('Type something if you want to add comment!');
    }
  };

  useEffect(() => {
    if (!list.length) {
      setComments(post.comments);
    } else {
      setComments(list);
    }
  }, [list]);

  useEffect(() => {
    return () => {
      dispatch(setNewComments([]));
    };
  }, []);

  return (
    <MainLayout title="Post">
      <PostTitleHeader>{post?.title}</PostTitleHeader>
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
        <CommentTextArea
          name="comment"
          placeholder="Leave a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></CommentTextArea>
        <div>
          <Button onClick={addComment}>Add comment</Button>
          <ErrorText>{error}</ErrorText>
        </div>

        <CommentList>
          {comments.length
            ? comments.map((comment) => (
                <Comment key={comment.id}>
                  <Avatar></Avatar>
                  <CommentInfo>
                    <Author>anonymous@gmail.com</Author>
                    <div>{comment.body}</div>
                  </CommentInfo>
                </Comment>
              ))
            : null}
        </CommentList>
      </CommentSection>
    </MainLayout>
  );
}

Post.getInitialProps = async ({ query }: NextPageContext) => {
  const response = await axios.get(
    `${API_URL}/posts/${query.postId}?_embed=comments`
  );

  return { post: response.data };
};
