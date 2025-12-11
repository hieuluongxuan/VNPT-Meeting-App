import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlockDetail from './pages/BlockDetail';
import MeetingsList from './pages/MeetingsList';
import MeetingDetail from './pages/MeetingDetail';
import FirefilesSync from './pages/FirefilesSync';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#020617',
        color: 'white',
      }}
    >
      <header style={{ padding: '12px 16px', borderBottom: '1px solid #1f2937' }}>
        <strong>VNPT-IT AI Meeting Co-Pilot</strong> — DEBUG HEADER
      </header>

      <main style={{ padding: '16px' }}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/block-detail" element={<BlockDetail />} />
            <Route path="/meetings" element={<MeetingsList />} />
            <Route path="/meeting-detail" element={<MeetingDetail />} />
            <Route path="/fireflies-sync" element={<FirefilesSync />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </HashRouter>
      </main>
    </div>
  );
};

export default App;
