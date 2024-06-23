import React from 'react'

const Header = () => {
    return (
        <div className='flex py-3 justify-between items-center'>
            <div className='flex gap-2 md:gap-5'>
                <div className='flex gap-4 item-center justify-between text-xl md:text-3xl md:font-bold'>
                    <h2 className='-rotate-45'><i class="fa-solid fa-rocket"></i></h2>
                    <h2 className='font-bold'>Hoster</h2>
                </div>
                <button className='rounded-full bg-orange-400 text-xs md:text-lg text-white px-2 py-1'>Hoster is hiring</button>
            </div>
            <div>
            <ul className='hidden lg:flex lg:gap-5 lg:mt-3  lg:text-zinc-600  '>
                <li><a href="#">Plans</a></li>
                <li><a href="#">Find Domain</a></li>
                <li><a href="#">Why Hoster</a></li>
            </ul>
            </div>
            <div className=' hidden lg:flex lg:gap-6 lg:item-center '>
                <a className='inline-block px-2 py-3' href="">sign in</a>
                <a className='px-7 py-3 bg-blue-500 inkine-block  text-white rounded-lg' href="">Join Waitlist</a>
            </div>
                <h2 className='text-xl md:text-3xl font-bold lg:hidden'><i class="fa-solid fa-bars"></i></h2>
        </div>
    )
}

export default Header