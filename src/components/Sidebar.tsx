import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Sidebar.module.css'

export default function Sidebar() {
    return (
        <>
            <div className='transition flex flex-row fixed left-0 top-[50%] gap-2 ml-6 items-center w-auto'>
                <div className={'sidebar-icons flex flex-col gap-8 items-center justify-center rounded-full bg-neutral-900 pt-6 pb-6 pl-4 pr-4'}>
                    <a target={"_blank"} href={'https://github.com/mafiefa02'}><FaGithub className={styles.sidebarIcon} color={"white"} /></a>
                    <a target={"_blank"} href={'https://instagram.com/mafiefa'}><FaInstagram className={styles.sidebarIcon} color={"white"} /></a>
                    <a target={"_blank"} href={'https://linkedin.com/in/mafiefa'}><FaLinkedin className={styles.sidebarIcon} color={"white"} /></a>
                </div>
            </div>
        </>
    )
}
