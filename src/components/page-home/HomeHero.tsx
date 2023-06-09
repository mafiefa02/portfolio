"use client"

import Image from "next/image"
import { Tooltip } from "react-tooltip"
import { motion } from "framer-motion"
import Button from "../Button"

// import assets
import illustrator from "/public/icons/adobe-illustrator.svg"
import css from "/public/icons/css-3.svg"
import figma from "/public/icons/figma.svg"
import javascript from "/public/icons/javascript.svg"
import nextjs from "/public/icons/nextjs.svg"
import prisma from "/public/icons/prisma.svg"
import react from "/public/icons/react.svg"
import typescript from "/public/icons/typescript-icon.svg"
import tailwindcss from "/public/icons/tailwindcss-icon.svg"
import python from "/public/icons/python.svg"

export default function HomeHero() {
    return (
        <div className="flex flex-col justify-center min-h-[550px] h-[calc(100vh-(200px+78px+8rem))] md:min-h-[calc(100vh-(78px+8rem))] items-start gap-0 px-[4.5rem]">
            <motion.div className="w-full"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            ><p className="font-light text-left text-xl mb-1">Hello, I am</p></motion.div>
            <motion.div className="w-full"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            ><h1 className="font-bold text-left text-[2.472rem] md:text-[2.9rem]">Afief Abdurrahman</h1></motion.div>
            <motion.div className="max-w-[360px] mt-2"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
            ><p className="font-light text-left">currently an undergraduate physics student at <span className="font-bold"><a data-tooltip-id="itb" data-tooltip-content="A university located in Bandung, Indonesia. As in 2023, Bandung Institute of Technology or ITB is a top 3 university in Indonesia" href="https://itb.ac.id">Bandung Institute of Technology</a></span></p></motion.div>
            <Tooltip id="itb" className="font-bold max-w-xs break-words" />
            <motion.div className="w-full mt-6 mb-3"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
            ><p className="font-bold">Tech/Design Stacks</p></motion.div>
            <div className="flex flex-row gap-6 md:hidden max-w-xs justify-center">
                <motion.div className="flex flex-col gap-4 items-center"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.7, type: "spring" }}
                >
                    <Image data-tooltip-id="tailwind" data-tooltip-content="TailwindCSS" src={tailwindcss} alt="TailwindCSS" width={38} height={38} className="h-1/2" />
                    <Tooltip id="tailwind" className="font-bold" />
                    <Image data-tooltip-id="css" data-tooltip-content="CSS3" src={css} alt="CSS" width={31} height={31} />
                    <Tooltip id="css" className="font-bold" />
                </motion.div>
                <motion.div className="flex flex-col gap-4 items-center"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.9, type: "spring" }}
                >
                    <Image data-tooltip-id="javascript" data-tooltip-content="Javascript" src={javascript} alt="Javascript" width={38} height={38} />
                    <Tooltip id="javascript" className="font-bold" />
                    <Image data-tooltip-id="illustrator" data-tooltip-content="Adobe Illustrator" src={illustrator} alt="Illustrator" width={38} height={38} />
                    <Tooltip id="illustrator" className="font-bold" />
                </motion.div>
                <motion.div className="flex flex-col gap-4 items-center"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.1, type: "spring" }}
                >
                    <Image data-tooltip-id="typescript" data-tooltip-content="Typescript" src={typescript} alt="TypeScript" width={38} height={38} />
                    <Tooltip id="typescript" className="font-bold" />
                    <Image data-tooltip-id="nextjs" data-tooltip-content="Next.js" src={nextjs} alt="Next.js" width={38} height={38} />
                    <Tooltip id="nextjs" className="font-bold" />
                </motion.div>
                <motion.div className="flex flex-col gap-4 items-center"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.3, type: "spring" }}
                >
                    <Image data-tooltip-id="prisma" data-tooltip-content="Prisma" src={prisma} alt="Prisma" width={33} height={33} />
                    <Tooltip id="prisma" className="font-bold" />
                    <Image data-tooltip-id="react" data-tooltip-content="ReactJS" src={react} alt="ReactJS" width={38} height={38} />
                    <Tooltip id="react" className="font-bold" />
                </motion.div>
                <motion.div className="flex flex-col gap-4 items-center"
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.5, type: "spring" }}
                >
                    <Image data-tooltip-id="figma" data-tooltip-content="Figma" src={figma} alt="Figma" width={25} height={25} />
                    <Tooltip id="figma" className="font-bold" />
                    <Image data-tooltip-id="py" data-tooltip-content="Python" src={python} alt="Python" width={35} height={35} />
                    <Tooltip id="py" className="font-bold" />
                </motion.div>
            </div>
            <motion.div className="md:flex hidden flex-row w-full gap-3"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.7 }}
            >
                <Image data-tooltip-id="javascript" data-tooltip-content="Javascript" src={javascript} alt="Javascript" width={38} height={38} />
                <Image data-tooltip-id="illustrator" data-tooltip-content="Adobe Illustrator" src={illustrator} alt="Illustrator" width={38} height={38} />
                <Image data-tooltip-id="css" data-tooltip-content="CSS3" src={css} alt="CSS" width={31} height={31} />
                <Image data-tooltip-id="figma" data-tooltip-content="Figma" src={figma} alt="Figma" width={25} height={25} />
                <Image data-tooltip-id="nextjs" data-tooltip-content="Next.js" src={nextjs} alt="Next.js" width={38} height={38} />
                <Image data-tooltip-id="prisma" data-tooltip-content="Prisma" src={prisma} alt="Prisma" width={33} height={33} />
                <Image data-tooltip-id="react" data-tooltip-content="ReactJS" src={react} alt="ReactJS" width={38} height={38} />
                <Image data-tooltip-id="typescript" data-tooltip-content="Typescript" src={typescript} alt="TypeScript" width={38} height={38} />
                <Image data-tooltip-id="py" data-tooltip-content="Python" src={python} alt="Python" width={35} height={35} />
                <Tooltip id="javascript" className="font-bold" />
                <Tooltip id="illustrator" className="font-bold" />
                <Tooltip id="css" className="font-bold" />
                <Tooltip id="figma" className="font-bold" />
                <Tooltip id="nextjs" className="font-bold" />
                <Tooltip id="prisma" className="font-bold" />
                <Tooltip id="react" className="font-bold" />
                <Tooltip id="typescript" className="font-bold" />
                <Tooltip id="py" className="font-bold" />
            </motion.div>
            <motion.div className="flex flex-row justify-between md:gap-6 w-full mt-6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.7 }}
            >
                <Button type="default" link="mailto:mafiefa.business@gmail.com" name="Contact Me!" className="px-12" />
                <Button type="outline" link="google.com" name="Download CV" className="px-6 md:px-12" />
            </motion.div>
        </div>
    )
}