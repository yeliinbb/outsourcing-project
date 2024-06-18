import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import DetailPage from '../pages/DetailPage/DetailPage';
import Layout from '../layouts/layout/Layout';

import YoutubeTest from '../components/YoutubeTest';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="detail/:id" element={<DetailPage />} />
          <Route path="/youtube" element={<YoutubeTest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
