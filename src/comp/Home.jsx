import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAdd, MdArrowDropDown, MdOutlineHistory } from "react-icons/md";
import { FaCompass } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { ImAirplane } from "react-icons/im";
import { PiFootballFill } from "react-icons/pi";
import { LuImagePlus } from "react-icons/lu";
import { IoMdMic, IoMdHelpCircleOutline } from "react-icons/io";
import { IoSettings } from "react-icons/io5";



const Home = () => {

    const [sidebar, setsidebar] = useState(false);


    return (
        <>
            <main className='flex h-screen w-screen'>

                <div className={` sidebar justify-between ${sidebar ? "expanded" : "collapsed"}`}>



                    <div className='flex flex-col gap-12'>

                        <div onClick={() => { setsidebar(!sidebar) }} className='flex justify-center items-center  hover:rounded-full h-10 w-10  hover:bg-slate-700'><GiHamburgerMenu className='text-white text-lg' /></div>

                        <div className='options flex-1 bg-slate-950 rounded-full px-2 py-2 gap-3'>
                            <MdAdd className='text-slate-600 text-xl hover:bg-slate-700' />
                            <p className={`text-white ${sidebar ? "block" : "hide"}`}>New Chat</p>
                        </div>

                    </div>


                    <div className='bottom text-white flex flex-col gap-6'>
                        <div className='options'>
                            <IoMdHelpCircleOutline className='text-2xl' />
                            <p className={sidebar ? "block" : "hide"}>Help</p>
                        </div>
                        <div className='options'>
                            <MdOutlineHistory className='text-2xl' />
                            <p className={sidebar ? "block" : "hide"}>History</p>
                        </div>
                        <div className='options'>
                            <IoSettings className='text-2xl' />
                            <p className={sidebar ? "block" : "hide"}>Settings</p>
                        </div>
                    </div>

                </div>



                <div className="main-body flex flex-col flex-1 py-6 px-5 items-center gap-8">

                    <header className='w-full flex justify-between px-6'>
                        <h1 className='text-2xl flex items-center'>Gemini<MdArrowDropDown /></h1>
                        <img src="" alt="" />
                    </header>

                    <div className="gemini flex flex-col h-full">
                        <div className='text-5xl font-medium'>
                            <span><h1 className='user'>Hello, User</h1></span>
                            <h1 className='pt-2'>How can I help you today?</h1>
                        </div>

                        <div className='flex gap-4'>
                            <div className='card active relative'>
                                <p>Ideas to surprise a friend on their birthday</p>
                                <FaCompass className='text-2xl absolute right-4 bottom-4 ' />
                            </div>
                            <div className='card relative'>
                                <p>Find flights and weather for an upcoming trip</p>
                                <ImAirplane className='text-blue-500 text-2xl absolute right-4 bottom-4 ' />
                            </div>
                            <div className='card relative'>
                                <p>I’m sick and need help crafting a text message for my boss</p>
                                <FaPenToSquare className='text-2xl absolute right-4 bottom-4 ' />
                            </div>
                            <div className='card relative'>
                                <p>Help me understand American football</p>
                                <PiFootballFill className='text-2xl absolute right-4 bottom-4 ' />
                            </div>
                        </div>


                        <div className="prompt flex items-center w-full">
                            <input className='w-full' type="text" placeholder='Enter a prompt here' />
                            <div className="flex gap-3 ic">
                                <LuImagePlus />
                                <IoMdMic />
                            </div>
                        </div>
                    </div>
                    <span className='text-xs'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</span>

                </div>
            </main>
        </>
    )
}

export default Home
