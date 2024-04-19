import React, { useRef, useState, useEffect } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAdd, MdArrowDropDown, MdOutlineHistory } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";
import { FaCompass } from "react-icons/fa";
import { FaPenToSquare, FaRegMessage } from "react-icons/fa6";
import { ImAirplane } from "react-icons/im";
import { PiFootballFill } from "react-icons/pi";
import { LuImagePlus } from "react-icons/lu";
import { IoMdMic, IoMdHelpCircleOutline } from "react-icons/io";
import { SiGooglegemini } from "react-icons/si";
import { IoSettings } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { setinput, setoutput, setloading, setrecent } from './redux/slice'
import TypeWriterEffect from 'react-typewriter-effect';
import runChat from './Gemini';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



const Home = () => {

    const dispatch = useDispatch();

    const input = useSelector((state) => (state.input))
    const output = useSelector((state) => (state.output))
    const loading = useSelector((state) => (state.loading))
    const recents = useSelector((state) => (state.recent))

    const inputref = useRef("")

    const [sidebar, setsidebar] = useState(false);

    const query = async () => {

        dispatch(setinput(inputref.current.value))
        dispatch(setloading(true))

       let ans = await runChat(inputref.current.value)
        
        dispatch(setloading(false))
        dispatch(setoutput(ans))
        dispatch(setrecent(inputref.current.value))

    }

    console.log("output", output);
    console.log("input", input);
    
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

                    <h1 className={`text-slate-400 text-lg ${sidebar? "block" : "hidden"}`}>Recent</h1>

                    <div className={`history flex flex-1 flex-col max-h-[40vh] overflow-scroll ${sidebar ? "block" : "hidden"}`}>
                            {
                                recents ? (<>
                                    {
                                        recents.map((e) => {
                                            return (
                                                <>
                                                    <p className='flex gap-2 items-center text-slate-300'>
                                                        <FaRegMessage className='text-xl text-white' />
                                                        {e}
                                                    </p>
                                                </>
                                            )
                                        })
                                    }

                                </>) : (
                                    <>

                                    </>
                                )
                            }
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



                <div className="main-body flex flex-col flex-1 py-6 px-5 items-center gap-8 ">

                    <header className='w-full flex justify-between px-6'>
                        <h1 className='text-2xl flex items-center'>Gemini<MdArrowDropDown /></h1>
                        <img src="" alt="" />
                    </header>

                    <div className="gemini flex flex-col h-full">

                        {
                            loading ? (<>
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
                            </>) : (<>
                                <div className='result flex flex-col gap-8 overflow-scroll h-[70vh]'>
                                    <div>
                                        <p>{input}</p>
                                    </div>
                                    <div className='flex gap-4'>
                                    
                                        <span><SiGooglegemini className='text-blue-600 text-3xl' /></span>
                                        <p>
                                            {/* <TypeWriterEffect
                                                startDelay={10}
                                                cursorColor="white"
                                                text={output}
                                                typeSpeed={20}
                                            /> */}

                                            {
                                                output !== null ? output : <Skeleton />
                                            }

                                        </p>
                                    </div>
                                </div>
                            </>)
                        }

                        <div className="prompt flex items-center w-full">
                            <input ref={inputref}
                                className='w-full' type="text" placeholder='Enter a prompt here' />
                            <div className="flex gap-3 ic">
                                <LuImagePlus />
                                <IoMdMic />
                                <AiOutlineSend className='cursor-pointer' onClick={()=>{
                                    query()
                                    dispatch(setloading(false))
                                }} />
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
