import React from 'react'
import { SiNike } from "react-icons/si";


const Body = () => {
    return (
        <div className='flex flex-col  justify-between items-center lg:flex-row lg:gap-x-28'>
            <div className='border-2 w-60 h-60 rounded-full overflow-hidden mt-10 md:w-80 md:h-80 order-1'>
                {/* <img className='border-2 w-60 h-60 rounded-[76% 24% 85% 15% / 38% 47% 53% 62%]' src="https://images.unsplash.com/photo-1534939618208-e604c88fcffb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2l0aCUyMG1vZGVybiUyMGJvcmRlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />  */}
                <img className='border-2 w-60 h-60  rounded-full md:w-80 md:h-80' src="https://images.unsplash.com/photo-1532002865847-acfb08feb0a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2l0aCUyMG1vZGVybiUyMGJvcmRlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                {/* <img className='border-2 w-60 h-60 rounded-[76% 24% 85% 15% / 38% 47% 53% 62%]' src="https://plus.unsplash.com/premium_photo-1669069604760-34f036f1d902?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2l0aCUyMG1vZGVybiUyMGJvcmRlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />  */}
            </div>
            <div className='lg:flex-1'>
            <div className='w-full mt-20'>
                <h1 className='font-bold text-4xl md:text-6xl font-serif '>Host your website in less than 5 minutes.</h1>
                <p className='text-md md:text-xl md:mt-10 mt-5 tracking-tighter'>With Hoster, get your website up and running in no less than 5 minutes with the most competative pricing packages available online.</p>
            </div>
            <div className='w-full mt-10 '>
                <form className='md:flex gap-4' action="">
                    <input className=' md:w-96 w-full md:placeholder:text-zinc-700 md:placeholder:text-xl px-4 py-3 rounded-md outline-none ring-offset-0' type="email" placeholder='Enter e-mail address' />
                    <input className='md:w-80  px-4 w-full py-3 text-xl text-white font-bold rounded-md bg-blue-500 ' type="submit" value="Join Waitlist" />
                </form>
                <div className='flex items-center gap-2 mt-5'>
                    <SiNike className='bg-green-500 rounded-full text-white text-lg font-bold' />
                    <p className='md:text-xl'>No spam, ever, Unsubscribe anytine.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Body