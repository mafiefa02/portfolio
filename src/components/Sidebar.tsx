import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Sidebar() {
    return (
        <>
            <div className='transition flex flex-row fixed left-0 top-[46%] gap-2 ml-6 items-center w-auto'>
                <div className={"flex flex-col items-center justify-center rounded-full dark:bg-neutral-900 bg-primary pt-6 pl-4 pb-6 pr-4 lg:gap-8 md:gap-6 gap-4"}>
                    <a target={"_blank"} href={'https://github.com/mafiefa02'}><FaGithub className={"lg:text-[25px] md:text-[22px] sm:text-[20px] text-[18px] opacity-50 hover:opacity-100"} color={"white"} /></a>
                    <a target={"_blank"} href={'https://instagram.com/mafiefa'}><FaInstagram className={"lg:text-[25px] md:text-[22px] sm:text-[20px] text-[18px] opacity-50 hover:opacity-100"} color={"white"} /></a>
                    <a target={"_blank"} href={'https://linkedin.com/in/mafiefa'}><FaLinkedin className={"lg:text-[25px] md:text-[22px] sm:text-[20px] text-[18px] opacity-50 hover:opacity-100"} color={"white"} /></a>
                </div>
            </div>
        </>
    )
}
