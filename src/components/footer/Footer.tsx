import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faLine, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import footerStyle from "./Footer.module.css"
import { Tooltip } from "react-tooltip"

interface footerProps { }

export default function Footer(props: footerProps) {
    const year = new Date().getFullYear()
    const socialMedia = [
        {
            name: "GitHub",
            link: "https://github.com/mafiefa02",
            icon: faGithub,
        },
        {
            name: "LinkedIn",
            link: "https://linkedin.com/in/mafiefa",
            icon: faLinkedin
        },
        {
            name: "E-mail",
            link: "mailto:mafiefa.business@gmail.com",
            icon: faEnvelope
        },
        {
            name: "LINE",
            link: "https://line.me/ti/p/ZJ0tDwknYZ",
            icon: faLine
        },
        {
            name: "Instagram",
            link: "https://instagram.com/mafiefa",
            icon: faInstagram
        }
    ]
    return (
        <footer className="flex flex-col gap-3 md:flex-row w-full px-12 py-6 md:justify-between items-center fixed bottom-0 bg-black -z-50">
            <div className="flex flex-row gap-4">
                {socialMedia.map((social, index) => {
                    return (
                        <>
                            <Link href={social.link} key={index} data-tooltip-id={social.name} data-tooltip-content={social.name}>
                                <FontAwesomeIcon icon={social.icon} size="lg" color="#FFFFFF" className={footerStyle.icons} />
                            </Link>
                            <Tooltip id={social.name} className="font-bold" />
                        </>
                    )
                })}
            </div>
            <p className="text-white md:text-base text-xs">&#169; {year} Afief Abdurrahman</p>
        </footer>
    )
}