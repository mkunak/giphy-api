import { FC } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';

import IntroLayout from '../layouts/Intro';
import MainLayout from '../layouts/Main';

import StartPage from '../pages/Start';
import AboutPage from '../pages/About';
import GifsPage from '../pages/Gifs';

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<IntroLayout><StartPage /></IntroLayout>} />
      <Route
        path="/about"
        element={<IntroLayout><AboutPage /></IntroLayout>} />
      <Route
        path="/gifs"
        element={<MainLayout><GifsPage /></MainLayout>} />
      <Route
        path="*"
        element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
