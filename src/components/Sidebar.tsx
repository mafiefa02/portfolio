import { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa'

export default function Sidebar() {
    const [isActive, setisActive] = useState(false)
    if (isActive) {
        return (
            <>
                <div className='transition flex flex-row fixed left-0 top-[19.5em] gap-2 ml-6 items-center justify-center shadow-xl'>
                    <div className={'sidebar-icons flex flex-col gap-8 items-center justify-center rounded-full bg-neutral-900 pt-6 pb-6 pl-4 pr-4'}>
                        <a target={"_blank"} href={'https://github.com/mafiefa02'}><FaGithub className={'opacity-50 hover:opacity-100'} size={30} color={"white"} /></a>
                        <a target={"_blank"} href={'https://instagram.com/mafiefa'}><FaInstagram className='opacity-50 hover:opacity-100' size={30} color={"white"} /></a>
                        <a target={"_blank"} href={'https://linkedin.com/in/mafiefa02'}><FaLinkedin className='opacity-50 hover:opacity-100' size={30} color={"white"} /></a>
                    </div>
                    <div className={'flex justify-center items-center'}><FaAngleDoubleLeft className='opacity-10 hover:opacity-100' size={30} color={"white"} onClick={() => setisActive(!isActive)} /></div>
                </div>
            </>
        )
    } else {
        return (
            <div className='transition flex flex-row fixed left-0 top-[25em] gap-2 ml-6 items-center justify-center shadow-xl'>
                <div className={'flex justify-center items-center'}><FaAngleDoubleRight className='opacity-10 hover:opacity-100' size={30} color={"white"} onClick={() => setisActive(!isActive)} /></div>
            </div>
        )
    }
}