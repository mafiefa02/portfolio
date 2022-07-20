import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Sidebar() {
    return (
        <>
            <div className='transition flex flex-row fixed left-0 top-[45%] gap-2 ml-6 items-center w-auto'>
                <div className={'sidebar-icons flex flex-col gap-8 items-center justify-center rounded-full bg-neutral-900 pt-6 pb-6 pl-4 pr-4'}>
                    <a target={"_blank"} href={'https://github.com/mafiefa02'}><FaGithub className={'opacity-50 hover:opacity-100'} size={30} color={"white"} /></a>
                    <a target={"_blank"} href={'https://instagram.com/mafiefa'}><FaInstagram className='opacity-50 hover:opacity-100' size={30} color={"white"} /></a>
                    <a target={"_blank"} href={'https://linkedin.com/in/mafiefa'}><FaLinkedin className='opacity-50 hover:opacity-100' size={30} color={"white"} /></a>
                </div>
            </div>
        </>
    )
}
