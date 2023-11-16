import React from 'react'

const Error = ({err}) => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
        <h3 className='text-black text-[20px] leading-[30px] font-semibold'>{err}</h3>
    </div>
  )
}

export default Error