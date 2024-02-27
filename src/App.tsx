import { HashRouter as Router, Route, Routes, useNavigate, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';
// components
import { Home } from './pages/Home/Home'
import { Nav } from './components/Nav'
import { Account } from './pages/Account/Account';
import { Login } from './pages/Login/Login';
import { Manage } from './pages/Manage/Manage';
import { Meals } from './pages/Meals/Meals';
// import Intro from './pages/Intro/Intro'
import { setToken } from './util/token';
import { Page } from './util/types/pages';


function App() {
  const [hash, setHash] = useState(window.location.hash.split("?")[0])
  window.addEventListener('hashchange', () => {setHash(window.location.hash.split("?")[0])})
  return (
    <div className='grid grid-cols-1 grid-rows-[1fr_4.3rem] w-[100dvw] h-[100dvh] min-w-[260px]'>
      <Router>
        <TokenManager/>
        <Routes>
          <Route path={Page.LOGIN} element={<Login/>} />
          <Route path={Page.HOME} element={<Home/>} />
          <Route path={Page.MANAGE} element={<Manage/>} />
          <Route path={Page.ACCOUNT} element={<Account/>} />
          <Route path={Page.MEALS} element={<Meals/>} />
          {/* <Route path="/intro" element={<Intro/>} /> */}
        </Routes>
        {hash !== '#/login' && <Nav/>}
      </Router>
    </div>
  )
}

function TokenManager() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    const token = searchParams.get("token");
    // console.log('#/login'.split("?")[0]);
    // console.log(window.location.hash)
    if (token == null || token == "") return;
    setToken(token)
    navigate("/");
  })
  return <></>
}

export default App
