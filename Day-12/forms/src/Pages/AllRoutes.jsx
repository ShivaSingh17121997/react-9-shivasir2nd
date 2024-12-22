import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Project from './Project';
import Views from './Views';
// import SettingRoutes from './setting/SetttingRoutes';
import SettingsPage from './setting/SettingPage';

export default function () {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Project />} />
                <Route path='/views' element={<Views />} />
                <Route path='/setting-routes/*' element={<SettingsPage/>} />
            </Routes>
        </div>
    )
}
