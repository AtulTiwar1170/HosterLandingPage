import React from 'react'

const Footer = () => {
    return (
        <div className='w-full md:flex md:justify-between md:items-center md:mt-44'>
            <ul className='flex gap-5 mt-3 font-bold text-zinc-600 md:text-xl'>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twiter</a></li>
            </ul>
            <div className='gap-3 flex  my-3'>
                <img className='rounded-full h-16 w-16' src="https://images.unsplash.com/photo-1534939618208-e604c88fcffb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2l0aCUyMG1vZGVybiUyMGJvcmRlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <div>
                    <p className='font-serif'>Have any Question?</p>
                    <a className='font-bold font-serif' href="#">Talk to an specilist.</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
