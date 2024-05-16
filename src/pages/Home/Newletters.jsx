import React from 'react'
import { Link } from 'react-router-dom'

const Newletters = () => {
  return (
    <div className='bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16'>
        <h2 className='title mb-8'> Follow products and discounts on Instagram</h2>

        {/* insta grid */}
        <div className='flex flex-wrap gap-4 items-center justify-center mb-20'>
            <Link to="/">
                <img src="/images/instagram1.png" alt=''/>
            </Link>
            <Link to="/">
                <img src="/images/instagram2.png" alt=''/>
            </Link>
            <Link to="/">
                <img src="/images/instagram3.png" alt=''/>
            </Link>
            <Link to="/">
                <img src="/images/instagram4.png" alt=''/>
            </Link>
            <Link to="/">
                <img src="/images/instagram5.png" alt=''/>
            </Link>
            <Link to="/">
                <img src="/images/instagram6.png" alt=''/>
            </Link>
        </div>
    </div>
  )
}

export default Newletters