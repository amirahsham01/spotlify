import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from '../src/layouts/DashboardLayout';
import DiscoverPage from './components/pages/Discover/index';
import Main from './Main';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route element={<DashboardLayout />}>
          {/* Store dashboard routes */}
          <Route path="/discover" element={<DiscoverPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
