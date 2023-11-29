import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// components
import Home from './pages/Home'
import Nav from './components/Nav'
import Order from './pages/Order';
import Test from './pages/Test';
import Account from './pages/Account';

function App() {
  return (
    <div className='grid grid-cols-1 grid-rows-[1fr_4.3rem] w-[100dvw] h-[100dvh] min-w-[260px]'>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/account" element={<Account/>} />
        </Routes>
        <Nav/>
      </Router>
    </div>
  )
}

export default App
