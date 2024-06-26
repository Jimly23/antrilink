import React from 'react'

const InputBox = ({type, icon, sendOnChange, name, placeholder}) => {
  return (
    <div className="flex items-center border py-3 px-4 rounded-lg mb-3 bg-white">
        {icon}
        <input type={type} onChange={sendOnChange} name={name} placeholder={placeholder} className='bg-transparent border-none w-full outline-none' />
    </div>
  )
}

export default InputBox