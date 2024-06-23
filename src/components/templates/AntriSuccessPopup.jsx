import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const AntriSuccessPopup = ({isBack, sendIsBack}) => {
  
  useEffect(()=>{
    console.log(isBack);
  }, [])

  return (
    <div className='relative w-[80%] bg-white border border-aksen rounded-lg flex flex-col justify-center items-center py-5'>
        <button onClick={() => sendIsBack(false)} className='back w-6 h-6 text-[14px] font-medium absolute right-3 top-3 rounded-full bg-slate-400 flex items-center justify-center'>X</button>
        <div className="no-antrian py-[50px]">
            <h3 className='text-center text-lg font-medium'>Nomor Antrian Anda</h3>
            <h2 className='text-center text-2xl font-bold'>A009</h2>
        </div>
        <Link to={'/antrian'} className='w-[90%]'>
            <button className='bg-aksen py-2 rounded-lg w-full font-medium text-white'>Detail antrian</button>
        </Link>
    </div>
  )
}

export default AntriSuccessPopup