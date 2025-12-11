import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import BlockDetail from './pages/BlockDetail';
import MeetingsList from './pages/MeetingsList';
import MeetingDetail from './pages/MeetingDetail';
import FirefliesSync from './pages/FirefliesSync';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/block-detail" element={<BlockDetail />} />
        <Route path="/meetings" element={<MeetingsList />} />
        <Route path="/meeting-detail" element={<MeetingDetail />} />
        <Route path="/fireflies-sync" element={<FirefliesSync />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </HashRouter>
  );
};

export default App;