"use client"

import { useEffect, useState } from "react"
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
            name: "Education",
            link: "/#education"
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

    useEffect(() => {
        if (isNavbarOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [isNavbarOpen])

    return (
        <>
            <nav className={`sticky top-0 flex flex-row self-start w-full justify-between px-12 py-6 ${isNavbarOpen ? 'md:border-b-2 md:border-black md:shadow-lg md:bg-opacity-80 md:backdrop-blur-sm' : `border-b-2 border-black shadow-lg bg-opacity-80 backdrop-blur-sm`} md:mb-16 bg-white z-50`}>
                <p className={`font-bold text-xl`}>Afief&apos;s <span className="font-bold">| </span><span className="font-light">personal place</span></p>
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
            <div className={`fixed top-[calc(0px+76px)] w-full flex-col justify-center items-center gap-12 h-[calc(100%-76px)] md:hidden ${isNavbarOpen ? 'flex' : 'hidden'} bg-white bg-opacity-80 backdrop-blur-sm z-50`}>
                {navbarButtons.map((button, index) => {
                    return (
                        <Button type="text" key={index} link={button.link} name={button.name} className="text-xl" />
                    )
                })}
            </div>
        </>
    )
}