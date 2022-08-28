/*
 * @Author: cully fung
 * @Date: 2022-08-16 23:35:32
 * @LastEditTime: 2022-08-28 09:59:43
 * @LastEditors: cully fung
 * @Description:
 */
import routes from '@/router'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Layout from '@/layout/index'
import Rank from './views/rank'
import Page404 from './views/error/Page404'
import Recommend from './views/recommend'
import Singer from './views/singer'
import Playlist from './views/playlist'
import Empty from './layout/empty'

function App() {
  return (
    <BrowserRouter>
      {/* {routes} */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="rank" element={<Rank />} />
          <Route path="singer" element={<Singer />} />
          <Route path="recommend" element={<Recommend />} />
        </Route>
        <Route path="/" element={<Empty />}>
          <Route path="playlist/:id" element={<Playlist />}></Route>
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
