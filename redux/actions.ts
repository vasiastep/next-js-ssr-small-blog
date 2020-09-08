import { ADD_COMMENT } from './types'
import axios from 'axios'
import { API_URL } from '../constants'

export const addNewComment = (comment, post) => async (dispatch) => {
  const { data } = await axios.post(`${API_URL}/comments`, {
    postId: post.id,
    body: comment,
  })

  console.log(data)

  dispatch({ type: ADD_COMMENT, payload: data })
}
