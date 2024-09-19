import { Routes, BrowserRouter, Route } from 'react-router-dom';
import IndexPage from './index/page';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  );
}
