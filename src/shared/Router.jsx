import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../layouts/layout/Layout';
import DetailPage from '../pages/DetailPage/DetailPage';
import MainPage from '../pages/MainPage/MainPage';
import SeacrhResultPage from '../pages/SearchResultPage/page';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="detail/:id" element={<DetailPage />} />
          <Route path="/search/:keyword" element={<SeacrhResultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
