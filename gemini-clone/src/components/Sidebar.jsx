import { useState } from 'react'
import Images from '../assets/assets.js'

function MenuItem({ icon, label, expanded }) {
    return (
        <div className="relative group w-full">
            <div className={`flex items-center rounded-full hover:bg-gray-200 cursor-pointer transition-all duration-200 ${expanded ? 'w-full px-3 py-3 gap-4' : 'w-12 h-12 justify-center'}`} >
                <img src={Images[icon]} alt={label} className="h-5 w-5" />
                {expanded && (<span className="text-sm">{label}</span>)}
            </div>

            {/* Tooltip only when sidebar is collapsed */}
            {!expanded && (
                <div className=" absolute left-14 top-1/2 -translate-y-1/2 bg-white text-black shadow-lg border border-gray-200 text-sm px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50 " >
                    {label}
                </div>
            )}
        </div>
    )
}

const Sidebar = () => {
    const [expanded, setExpanded] = useState(false)
    return (
        <div className={` select-none h-screen ${expanded ? 'w-72' : 'w-20'} bg-white flex flex-col justify-between py-3 px-2 transition-all duration-300 `} >
            <div className={` w-full flex flex-col gap-2 ${expanded ? 'items-start' : 'items-center'} `} >
                <div className="relative group w-full">
                    <div onClick={() => setExpanded(prev => !prev)} className={` flex items-center rounded-full hover:bg-gray-200 transition-all duration-200 ${expanded ? 'w-full px-3 py-3 gap-3' : 'w-12 h-12 justify-center'} `} >
                        <img src={Images.gemini} alt='gemini' className='h-6 w-6' />
                        {expanded && (<h2 className='font-medium text-xl'> Gemini </h2>)}
                    </div>
                    {!expanded && (
                        <div className=" absolute left-14 top-1/2 -translate-y-1/2 bg-white text-black text-sm px-3 py-1 rounded-lg shadow-lg border border-gray-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 " >
                            Open Sidebar
                        </div>
                    )}
                </div>
                <MenuItem icon='newChat' label='New Chat' expanded={expanded} />
                <MenuItem icon='search' label='Search Chats' expanded={expanded} />
                <MenuItem icon='library' label='Library' expanded={expanded} />

                {expanded && (
                    <>
                        <div className='mt-6 px-3 text-sm text-gray-500'> Notebooks </div>
                        <div className='mt-6 px-3 flex gap-3'>
                            <img src={Images.history} alt='history' className='h-5 w-5 mt-1' />
                            <div>
                                <p className='font-medium text-sm'> Gemini Apps activity is off </p>
                                <p className='text-sm underline cursor-pointer'> Turn it on here </p>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <div className={` w-full flex flex-col gap-2 ${expanded ? 'items-start' : 'items-center'} `} >
                <MenuItem icon='setting' label='Settings' expanded={expanded} />
                <div className={` flex items-center rounded-full cursor-pointer transition-all duration-200 ${expanded ? 'w-full px-2 py-2 gap-3' : 'w-12 h-12'} `} >
                    <img src={Images.vIcon} alt='profile' className='h-8 w-8 rounded-full object-cover transition-transform duration-200 ease-out hover:scale-110' />
                    {expanded && (<span className='text-base'> Vivek Kumar Dwivedi </span>)}
                </div>
            </div>
        </div>
    )
}

export default Sidebar