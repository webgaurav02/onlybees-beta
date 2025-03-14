import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


//Assets
import arrow from "../../../public/arrow.svg"

const ComingSoon = () => {
    return (
        <div className='min-h-[80svh] flex flex-col gap-5 justify-center items-center'>
            <div className='h-fit overflow-y-hidden'>
                <h1 className='md:text-9xl text-8xl text-center font-coolvetica leading-none animate-riseUp'>COMING SOON...</h1>
            </div>
            <h2 className='text-md w-3/4 text-center font-semibold uppercase'>The dev team is working hard to bring this page back to life</h2>
            <p className=''>meanwhile, why don&apos;t you try going</p>
            <Link
                href="/"
                passHref
                className="lg:text-center text-left"
            >
                <button role="button" className="flex flex-row gap-3 border-2 justify-center items-center hover:scale-105 text-gray-600 py-3 px-5 rounded-lg btn-inner-container">
                    <span className='font-medium'>Back Home</span>
                    <span className="arrow-container">
                        <Image priority src={arrow} alt="Arrow" />
                    </span>
                </button>
            </Link>
        </div>
    )
}

export default ComingSoon