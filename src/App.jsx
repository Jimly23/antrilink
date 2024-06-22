import {FaHeart, FaHome, FaTicketAlt, FaUser} from 'react-icons/fa'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
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
import { useState } from 'react';

function App() {

  const [menuActiveId, setMenuActiveId] = useState(1)
  const handleMenuActive = (menuId) => {
    setMenuActiveId(menuId)
  }

  return (
    <Router>
      <div className='relative max-w-[500px] mx-auto overflow-x-hidden'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/antrian' element={<Antrian />}/>
          <Route path='/favorit' element={<Favorit />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/search' element={<Search />}/>
          <Route path='/pengaturan' element={<Pengaturan />}/>
          <Route path='/detail-merchant' element={<DetailMerchant />}/>
          <Route path='/detail-antrian' element={<DetailAntrian />}/>
          <Route path='/more-kategori' element={<MoreKategori />}/>
        </Routes>
        <div className="fixed bottom-0 w-full z-[2] max-w-[500px] py-5 flex justify-around bg-dominan text-slate-300 border-t">
          <Link to={'/'}><FaHome size={25} onClick={() => handleMenuActive(1)} className={`${menuActiveId === 1? 'text-aksen': ''}`}/></Link>
          <Link to={'/antrian'}><FaTicketAlt onClick={() => handleMenuActive(2)} className={`${menuActiveId === 2? 'text-aksen': ''}`} size={25}/></Link>
          <Link to={'/favorit'}><FaHeart onClick={() => handleMenuActive(3)} className={`${menuActiveId === 3? 'text-aksen': ''}`} size={25}/></Link>
          <Link to={'/profile'}><FaUser onClick={() => handleMenuActive(4)} className={`${menuActiveId === 4? 'text-aksen': ''}`} size={25}/></Link>
        </div>
      </div>
    </Router>
  )
}

export default App
