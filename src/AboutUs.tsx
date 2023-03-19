import React from 'react'

const AboutUs = () => {
    return (
        <main className='flex'>
            <section className='max-w-2xl mx-auto mt-16'>
                <div>
                    <h1 className='font-bold text-5xl'>ABOUT US.</h1>
                    <p className='mt-10 text-textColorTertiary'>Avira caters to thoughtful shoppers who appreciate unique designs and top quality pieces you just can’t find elsewhere. We are constantly curating fresh new collections and looking for the next big thing our customers will love. Founded in Vienna in 2019, we are proud to be your Online Clothing Shop that you can rely on for our expert service and care.
                    </p>
                    <p className='mt-4 text-textColorTertiary'>
                        We are here to serve you and make sure you find the Perfect Look for every occasion. Our passion for fashion is the reason why we are here. Weabsolutely love what we do, and our goal is to help our customers by providing them with unique outfit and accessories that make them stand-outfrom the crowd.
                    </p>
                </div>
                <div className='flex justify-between mt-24 text-5xl font-bold'>
                    <div>
                        <h1>50k+</h1>
                        <p className=' text-textColorAcc text-lg font-semibold mt-2'>Happy Customers</p>
                    </div>
                    <div>
                        <h1>60+</h1>
                        <p className=' text-textColorAcc text-lg font-semibold mt-2'>Top Partners</p>
                    </div>
                    <div>
                        <h1>5+</h1>
                        <p className=' text-textColorAcc text-lg font-semibold mt-2'>Years of Trust</p>
                    </div>
                </div>
            </section>
            <img src="./src/assets/about_us.png" alt="girl" />
        </main>
    )
}

export default AboutUs