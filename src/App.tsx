import { HashRouter as Router, Route, Routes, useNavigate, useLocation} from 'react-router-dom';
import { useEffect } from 'react';
// components
import { Home } from './pages/Home/Home'
import { Nav } from './components/Nav'
import { AccountWrapper } from './pages/Account/Account';
import { Login } from './pages/Login/Login';
import { Manage } from './pages/Manage/Manage';
import { Meals } from './pages/Meals/Meals';
// import Intro from './pages/Intro/Intro'
import { getToken, setToken } from './util/token';
import { Page } from './util/types/types';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  // const [hash, setHash] = useState(window.location.hash.split("?")[0])
  // window.addEventListener('hashchange', () => {setHash(window.location.hash.split("?")[0])})
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Router>
        <Main/>
      </Router>
    </QueryClientProvider>
  )
}

function Main() {
  const {pathname} = useLocation();

  return (
    <>
    {process.env.MODE === "staging" && <div className='bg-[#5e5e5e] fixed top-3 right-3 px-3 opacity-40 text-2xl rounded-md'>staging</div>}
    <div className='grid grid-cols-1 grid-rows-[1fr_4.3rem] w-[100dvw] h-[100dvh] min-w-[260px]'>
      <TokenManager/>
      <Routes>
        <Route path={Page.LOGIN} element={<Login/>} />
        <Route path={Page.HOME} element={<Home/>} />
        <Route path={Page.MANAGE} element={<Manage/>} />
        <Route path={Page.ACCOUNT} element={<AccountWrapper/>} />
        <Route path={Page.MEALS} element={<Meals/>} />
      </Routes>
      {navCheck(pathname) && <Nav/>}
    </div>
    </>
  )
}

function TokenManager() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    if (getToken() === null)
      navigate("/login");
  })

  useEffect(() => {
    const token = searchParams.get("token");
    // console.log('#/login'.split("?")[0]);
    // console.log(window.location.hash)
    if (token == null || token == "") return;
    setToken(token)
    navigate("/");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <></>
}

const navCheck = (hash: string) =>
  [Page.ACCOUNT, Page.HOME, Page.MANAGE, Page.MEALS]
    .filter(v => hash === v)
    .length !== 0;

export default App
