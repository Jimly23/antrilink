import {FaHeart, FaHome, FaTicketAlt, FaUser} from 'react-icons/fa'
import {BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Home'
import Antrian from './pages/Antrian'
import Favorit from './pages/Favorit'
import Profile from './pages/Profile'
import Search from './pages/Search';
import DetailMerchant from './pages/DetailMerchant';
import DetailAntrian from './pages/DetailAntrian';
import Pengaturan from './pages/Pengaturan';
import MoreKategori from './pages/MoreKategori';
import { useEffect, useState } from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import axios from 'axios'
import { dataMock } from './api/api';

const Layout = () => {
  const location = useLocation();
  const [menuActiveId, setMenuActiveId] = useState(1);
  const [credential, setCredential] = useState('')

  const handleMenuActive = (menuId) => {
    setMenuActiveId(menuId);
  };

  const shouldShowBottomMenu = !['/register', '/'].includes(location.pathname);

  return (
    <div className='relative max-w-[500px] mx-auto overflow-x-hidden'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Home />} />
        <Route path='/antrian' element={<Antrian />} />
        <Route path='/favorit' element={<Favorit />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/search' element={<Search />} />
        <Route path='/pengaturan' element={<Pengaturan />} />
        <Route path='/detail-merchant' element={<DetailMerchant />} />
        <Route path='/detail-antrian' element={<DetailAntrian />} />
        <Route path='/more-kategori' element={<MoreKategori />} />
      </Routes>
      {shouldShowBottomMenu && (
        <div className="bottom-menu fixed bottom-0 w-full z-[2] max-w-[500px] py-5 flex justify-around bg-dominan text-slate-300 border-t">
          <Link to={'/dashboard'}>
            <FaHome
              size={25}
              onClick={() => handleMenuActive(1)}
              className={`${menuActiveId === 1 ? 'text-aksen' : ''}`}
            />
          </Link>
          <Link to={'/antrian'}>
            <FaTicketAlt
              onClick={() => handleMenuActive(2)}
              className={`${menuActiveId === 2 ? 'text-aksen' : ''}`}
              size={25}
            />
          </Link>
          <Link to={'/favorit'}>
            <FaHeart
              onClick={() => handleMenuActive(3)}
              className={`${menuActiveId === 3 ? 'text-aksen' : ''}`}
              size={25}
            />
          </Link>
          <Link to={'/profile'}>
            <FaUser
              onClick={() => handleMenuActive(4)}
              className={`${menuActiveId === 4 ? 'text-aksen' : ''}`}
              size={25}
            />
          </Link>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App
