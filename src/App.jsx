import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// components
import Home from './pages/Home'
import Nav from './components/Nav'
import Order from './pages/Order';

function App() {
  return (
    <div className='flex flex-col w-[100dvw] h-[100dvh]'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>
      {/* <Home/> */}
      <Nav/>
    </div>
  )
}

export default App
