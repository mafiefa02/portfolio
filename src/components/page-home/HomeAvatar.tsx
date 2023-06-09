"use client"

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import profile from "/public/images/profile.jpg"

export default function HomeAvatar() {
    return (
        <>
            <AnimatePresence>
                <motion.div className="md:hidden min-w-screen h-[200px] overflow-hidden border-b-[3px] border-t-[1px] border-black pointer-events-none"
                    initial={{ y: -1000 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <Image
                        src="/images/profile.jpg"
                        alt="Picture of the author"
                        width={1000}
                        height={1000}
                        quality={100}
                        className="relative top-[calc(-60vw)]"
                    />
                </motion.div>
                <motion.div className="hidden md:flex items-center justify-center md:h-[350px] md:min-w-[250px] md:w-[250px] lg:h-[400px] lg:w-[300px] ml-[4.5rem] border-4 border-black overflow-hidden shadow-2xl pointer-events-none"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                >
                    <Image src={profile} alt="Profile" width={400} height={400} className="object-cover" />
                </motion.div>
            </AnimatePresence>
        </>
    )
}