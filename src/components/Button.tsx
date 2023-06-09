"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface buttonProps {
    name: string,
    link: string,
    className?: string,
    motion?: boolean,
    type: "default" | "outline" | "text",
}

export default function Button(props: buttonProps) {
    const buttonClasses = [
        {
            type: "default",
            className: "bg-black text-white border-2 border-black hover:backdrop-blur-sm px-12 py-2 hover:font-bold transition whitespace-nowrap"
        },
        {
            type: "outline",
            className: "bg-white text-black border-2 border-black hover:bg-black hover:text-white px-12 py-2 hover:font-bold transition whitespace-nowrap"
        },
        {
            type: "text",
            className: "hover:font-bold transition"
        }
    ]
    return (
        <Link href={props.link}>
            <motion.button className={`${buttonClasses.find(buttonClass => buttonClass.type === props.type)?.className} ${props.className}`}
                whileTap={{ scale: 0.9 }}
            >{props.name}</motion.button>
        </Link>
    )
}