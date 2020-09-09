import { ADD_COMMENT } from './types';
import axios from 'axios';
import { API_URL } from '../constants';
import { IPostWithComment, IComment } from '../interfaces';

export const addNewComment = (
  commentText: string,
  post: IPostWithComment
) => async (dispatch: any): Promise<boolean> => {
  await axios.post(`${API_URL}/comments`, {
    postId: post.id,
    body: commentText,
  });

  const { data: updatedPost } = await axios.get(
    `${API_URL}/posts/${post.id}?_embed=comments`
  );

  dispatch(setNewComments(updatedPost.comments));

  return Promise.resolve(true);
};

export const setNewComments = (comments: IComment[]) => ({
  type: ADD_COMMENT,
  payload: comments,
});
