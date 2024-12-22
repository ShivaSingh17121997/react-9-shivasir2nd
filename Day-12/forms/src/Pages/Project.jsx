import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Project() {
    const navigate = useNavigate();
    const handleSetting = () => {
        navigate("/setting-routes/general")
    }
    return (
        <div style={{backgroundColor:"aqua"}}>
            <button onClick={handleSetting}>Click to go to the settings page</button>
        </div>
    )
}
