/*
 * @Author: cully fung
 * @Date: 2022-08-16 23:35:32
 * @LastEditTime: 2022-08-26 09:29:16
 * @LastEditors: cully fung
 * @Description:
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
