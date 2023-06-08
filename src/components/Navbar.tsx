"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "./Button"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"

interface NavbarProps { }

export default function Navbar(props: NavbarProps) {
    const navbarButtons = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Experiences",
            link: "/experiences"
        },
        {
            name: "Contact Me",
            link: "/contact"
        }
    ]

    const [isNavbarOpen, setIsNavbarOpen] = useState(false)
    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen)
    }

    return (
        <>
            <nav className={`sticky top-0 flex flex-row w-full justify-between px-12 py-6 ${isNavbarOpen ? 'md:border-b-2 md:border-black md:shadow-lg' : `border-b-2 border-black shadow-lg`} transition`}>
                <p className={`font-bold text-xl`}>Afief&apos;s <span className="font-bold hidden md:contents">| </span><span className="font-light hidden md:contents">personal place</span></p>
                <div className="hidden md:flex flex-row gap-12">
                    {navbarButtons.map((button, index) => {
                        return (
                            <Button type="text" key={index} link={button.link} name={button.name} />
                        )
                    })}
                </div>
                <div className="flex md:hidden cursor-pointer">
                    <FontAwesomeIcon icon={isNavbarOpen ? faX : faBars} size="xl" color="#000000" onClick={toggleNavbar} />
                </div>
            </nav>
            <div className={`flex-col justify-center items-center gap-12 min-h-screen md:hidden ${isNavbarOpen ? 'flex' : 'hidden'} bg-white bg-opacity-70 backdrop-blur-sm`}>
                {navbarButtons.map((button, index) => {
                    return (
                        <Button type="text" key={index} link={button.link} name={button.name} className="text-xl" />
                    )
                })}
            </div>
        </>
    )
}