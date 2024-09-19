import { Routes, BrowserRouter, Route } from 'react-router-dom';
import IndexPage from './index/page';
import Layout from './layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<IndexPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
