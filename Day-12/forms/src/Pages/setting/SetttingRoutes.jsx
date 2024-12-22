import React from 'react';
import {Routes, Route} from 'react-router-dom';
import General from './General';
import Lable from './Lable';
import Members from './Members';
import State from './State';

export default function SettingRoutes() {
  return (
    <div>
        <Routes>
        <Route path='/general' element={<General/>}/>
        <Route path='/lable' element={<Lable/>}/>
        <Route path='/members' element={<Members/>}/>
        <Route path='/state' element={<State/>}/>
        </Routes>
    </div>
  )
}
