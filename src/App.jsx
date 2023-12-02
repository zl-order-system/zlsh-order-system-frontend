import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// components
import Home from './pages/Home'
import Nav from './components/Nav'
import Order from './pages/Order';
import Test from './pages/Test';
import Account from './pages/Account';
import Login from './pages/Login';
import Manage from './pages/Manage';

function App() {
  return (
    <div className='grid grid-cols-1 grid-rows-[1fr_4.3rem] w-[100dvw] h-[100dvh]'>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/manage" element={<Manage/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        {window.location.pathname !== '/login' && <Nav />}
      </Router>
    </div>
  )
}

export default App
