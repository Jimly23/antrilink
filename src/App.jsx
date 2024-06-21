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

function App() {

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
        </Routes>
        <div className="fixed bottom-0 w-full z-[2] max-w-[500px] py-5 flex justify-around bg-slate-700 text-slate-300 border-t-2">
          <Link to={'/'}><FaHome size={25}/></Link>
          <Link to={'/antrian'}><FaTicketAlt size={25}/></Link>
          <Link to={'/favorit'}><FaHeart size={25}/></Link>
          <Link to={'/profile'}><FaUser size={25}/></Link>
        </div>
      </div>
    </Router>
  )
}

export default App
