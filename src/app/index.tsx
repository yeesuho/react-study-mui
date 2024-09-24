import { Routes, BrowserRouter, Route } from 'react-router-dom';
import IndexPage from './index/page';
import Layout from './layout';
import PostsPage from './posts/page';
import PostCreatePage from './posts/create/page';
import Proivder from './provider';


export default function App() {
  return (
    <Proivder>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<IndexPage />} />
            <Route path='/posts' element={<PostsPage />} />
            <Route path='/posts/create' element={<PostCreatePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Proivder>
  );
}
