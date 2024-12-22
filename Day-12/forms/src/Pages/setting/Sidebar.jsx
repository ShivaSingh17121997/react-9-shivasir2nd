import React from 'react'
import SettingRoutes from './SetttingRoutes'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div style={{ width: '200px', backgroundColor: '#f4f4f4' }}>
            <h2>Settings</h2>
            <ul>
                <li><Link to="/setting-routes/general">General</Link></li>
                <li><Link to="/setting-routes/lable">Label</Link></li>
                <li><Link to="/setting-routes/members">Members</Link></li>
                <li><Link to="/setting-routes/state">state</Link></li>

            </ul>
        </div>
    )
}
