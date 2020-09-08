import React from 'react'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'

import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/post.css'

import { store } from '../redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default MyApp
