import React from 'react'

const SidePanel = () => {
  return (
    <div className='shadow-md p-3 lg:p-5 rounded-md'>
        <div className='flex items-center justify-between'>
            <p className='text--para mt-0 font-semibold'>Ticket Price</p>
            <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-black font-bold'>500 BDT</span>
        </div>
        <div className='mt-[30px]'>
            <p className='text--para mt-0 font-semibold text-black'>Available Time Slots:</p>
            <ul className='mt-3'>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-gray-500 font-semibold'>Sunday</p>
                    <p className='text-[15px] leading-6 text-gray-500 font-semibold'>4:00 PM - 9:30 PM</p>
                </li>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-gray-500 font-semibold'>Sunday</p>
                    <p className='text-[15px] leading-6 text-gray-500 font-semibold'>4:00 PM - 9:30 PM</p>
                </li>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-gray-500 font-semibold'>Sunday</p>
                    <p className='text-[15px] leading-6 text-gray-500 font-semibold'>4:00 PM - 9:30 PM</p>
                </li>
            </ul>
        </div>
        <button className='btn px-2 w-full '>Book Appointment</button>
    </div>
  )
}

export default SidePanel