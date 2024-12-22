
import './App.css'
import Navbar from './components/Navbar'
import AllRoutes from './Pages/AllRoutes'

function App() {

  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <Navbar/>
      <AllRoutes/>
    </div>
  )
}

export default App
