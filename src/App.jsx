import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
// components
import Home from './pages/Home'
import Nav from './components/Nav'
import Order from './pages/Order';
import Test from './pages/Test';
function App() {
  return (
    <div className='grid grid-cols-1 grid-rows-[1fr_4.3rem] w-[100dvw] h-[100dvh]'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        {/* 魔法span，防止Nav跑上去 */}
        <Nav/>
      </Router>
    </div>
  )
}

export default App
