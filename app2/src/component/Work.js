import React from 'react'
import w from '../assets/atten.jpeg'
import wx from '../assets/cl.jpeg'

const Work = () => {
  return (
    <div name ='work' className=' bg-[#0a192f] w-full md:h-screen text-gray-300' >
        <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className=' py-6'>//check out some of my recent work</p>
            </div>
            <div  style={{backgroundImage:`url(${w})`}}className ='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' >
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
    React JS Application

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button>
                                    Demo

                                </button>

                            </a>
                            <a href='/'>
                                <button>
                                    Code

                                </button>

                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Work
