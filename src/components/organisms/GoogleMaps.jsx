import React from 'react'

const GoogleMaps = ({linkMaps}) => {
  return (
    <div className='box-antri text-[14px] border border-slate-300 p-1 rounded-lg font-medium mb-2'>
        <iframe src={`${linkMaps}`} style={{border: 'border-0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-[200px] 2s:h-[250px] 3s:h-[300px]'></iframe>
    </div>
  )
}

export default GoogleMaps