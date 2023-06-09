import React from 'react'

const arrowRight =
    <svg width="26" height="12" viewBox="0 0 26 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 1L25 6M25 6L20 11M25 6H1" stroke="#2D2D2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

const data = [
    {
        text: 'Brands Everyone’s Crushing on',
        heading: 'Explore All'
    },
    {
        text: '456 Items',
        heading: 'Footwear'
    },
    {
        text: '680 Items',
        heading: 'Sweaters'
    },
    {
        text: '341 Items',
        heading: 'Denims'
    },
]


const HomePage = () => {
    return (
        <main className='p-16 w-4/5 grid grid-rows-[auto_auto] grid-cols-[1.4fr_1fr_1fr] h-fit gap-x-8 gap-y-8 mx-auto justify-center pt-10 pb-0 max-w-1440'>
            <div className='row-start-1 row-end-3  relative '>
                <img className='' src="./src/assets/image1.png" alt="" />
                <div className='absolute top-6 left-6'>
                    <p className='text-textColorAcc font-semibold text-sm'>
                        {data[0].text}
                    </p>
                    <a href='#' className='flex items-center gap-4 text-2xl font-semibold text-textColorPrimary'>
                        <h1>
                            {data[0].heading}
                        </h1>
                        {arrowRight}
                    </a>
                </div>
            </div>
            <div className='col-start-2 col-end-4 h-fit relative shadow-[0_1px_2px_0_rgba(0,0,0,0.25)] ml--1'>
            <img src="./src/assets/image6.png" alt="" />
                <div className='absolute top-6 left-6'>
                    <p className='text-textColorAcc font-semibold text-sm'>
                        {data[1].text}
                    </p>
                    <a href='#' className='flex items-center gap-4 text-2xl font-semibold text-textColorPrimary'>
                        <h1>
                            {data[1].heading}
                        </h1>
                        {arrowRight}
                    </a>
                </div>
            </div>
            <div className='relative '>
            <img src="./src/assets/image10.png" alt="" />
                <div className='absolute top-6 left-6'>
                    <p className='text-textColorAcc font-semibold text-sm'>
                        {data[2].text}
                    </p>
                    <a href='#' className='flex items-center gap-4 text-2xl font-semibold text-textColorPrimary'>
                        <h1>
                            {data[2].heading}
                        </h1>
                        {arrowRight}
                    </a>
                </div>
            </div>
            <div className='relative'>
            <img src="./src/assets/image9.png" alt="" />
                <div className='absolute top-6 left-6'>
                    <p className='text-textColorAcc font-semibold text-sm'>
                        {data[3].text}
                    </p>
                    <a href='#' className='flex items-center gap-4 text-2xl font-semibold text-textColorPrimary'>
                        <h1>
                            {data[3].heading}
                        </h1>
                        {arrowRight}
                    </a>
                </div>
            </div>
        </main>
    )
}

export default HomePage