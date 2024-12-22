// settings/SettingsPage.jsx
import React from 'react';
import SettingsRoutes from './SetttingRoutes'; // Import your Routes component for settings
import Sidebar from './Sidebar';

function SettingsPage() {
  return (
    <div style={{ display: 'flex', justifyContent:"space-between", height:"100vh" }}>
      <div>
      <Sidebar />  
      </div>
      <div style={{ marginLeft: '220px', padding: '20px' }}>
        <SettingsRoutes />  
      </div>
    </div>
  );
}

export default SettingsPage;
