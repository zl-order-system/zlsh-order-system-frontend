import { BrowserRouter as Router, Route, Routes, useNavigate, useSearchParams} from 'react-router-dom';
import { useEffect } from 'react';
// components
import Home from './pages/Home'
import Nav from './components/Nav'
import Test from './pages/Test';
import Account from './pages/Account';
import Login from './pages/Login';
import Manage from './pages/Manage';
import Meals from './pages/Meals';
import { setToken } from './utils/token';


function App() {
  return (
    <div className='grid grid-cols-1 grid-rows-[1fr_4.3rem] w-[100dvw] h-[100dvh] min-w-[260px]'>
      <Router>
        <TokenManager/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/manage" element={<Manage/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/meals" element={<Meals/>} />
        </Routes>
        {window.location.pathname !== '/login' && <Nav />}
      </Router>
    </div>
  )
}

function TokenManager() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = params.get("token");
    if (token == null || token == "") return;
    setToken(token)
    navigate("/");
  })
  return <></>
}

export default App
