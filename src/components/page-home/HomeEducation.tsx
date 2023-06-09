"use client"

import { motion } from "framer-motion"
import { faCircle, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import cordova from "/public/images/education/smpitcordova.png"
import granada from "/public/images/education/smaitgranada.jpg"
import itb from "/public/images/education/itb.jpg"

export default function HomeAbout() {
    return (
        <>
            <div className="flex flex-row gap-8 w-full items-center justify-center mt-2 md:mt-16 px-8 mb-16">
                <div className="w-max whitespace-nowrap">
                    <motion.p className="text-center text-4xl font-bold"
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >Education</motion.p>
                </div>
                <motion.hr className="md:hidden w-full h-[3px] bg-black" style={{ color: "#141414" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    viewport={{ once: false, amount: "all" }}
                />
            </div>
            <div className="flex flex-row justify-center px-8 gap-12">
                <div className="flex flex-col items-center justify-start">
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    ><FontAwesomeIcon icon={faCircle} color="#141414" /></motion.span>
                    <motion.span className="md:inline-block hidden"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    ><FontAwesomeIcon icon={faEllipsisVertical} color="#141414" /></motion.span>
                    <motion.span className="md:inline-block hidden"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    ><FontAwesomeIcon icon={faEllipsisVertical} color="#141414" /></motion.span>
                    <motion.span className="md:inline-block hidden"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    ><FontAwesomeIcon icon={faEllipsisVertical} color="#141414" /></motion.span>
                    <motion.span className="md:inline-block hidden"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    ><FontAwesomeIcon icon={faEllipsisVertical} color="#141414" /></motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    ><FontAwesomeIcon icon={faEllipsisVertical} color="#141414" /></motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    ><FontAwesomeIcon icon={faEllipsisVertical} color="#141414" /></motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    ><FontAwesomeIcon icon={faEllipsisVertical} color="#141414" /></motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    ><FontAwesomeIcon icon={faEllipsisVertical} color="#141414" /></motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    ><FontAwesomeIcon icon={faCircle} color="#141414" /></motion.span>
                    <motion.span className="md:inline-block hidden"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    ><FontAwesomeIcon icon={faEllipsisVertical} color="#141414" /></motion.span>
                    <motion.span className="md:inline-block hidden"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    ><FontAwesomeIcon icon={faEllipsisVertical} color="#141414" /></motion.span>
                    <motion.span className="md:inline-block hidden"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    ><FontAwesomeIcon icon={faEllipsisVertical} color="#141414" /></motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    ><FontAwesomeIcon icon={faEllipsisVertical} color="#141414" /></motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    ><FontAwesomeIcon icon={faEllipsisVertical} color="#141414" /></motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    ><FontAwesomeIcon icon={faEllipsisVertical} color="#141414" /></motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    ><FontAwesomeIcon icon={faEllipsisVertical} color="#141414" /></motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    ><FontAwesomeIcon icon={faCircle} color="#141414" /></motion.span>
                </div>
                <div className="flex flex-col gap-11">
                    <div className="flex flex-row items-center gap-8">
                        <motion.div className="md:flex hidden border-[3px] border-black shadow-lg w-[250px] h-[160px] overflow-hidden"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Image src={cordova} alt="Cordova Islamic Junior Highschool" width={250} height={250} />
                        </motion.div>
                        <motion.div className="flex flex-col"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="font-bold text-xl lg:text-3xl">Cordova Islamic Junior Highschool</p>
                            <div className="flex flex-col w-max">
                                <p className="font-light text-md md:text-lg">Samarinda, Kalimantan Timur, Indonesia</p>
                                <div className="flex flex-row justify-between items-center">
                                    <p className="font-bold">Natural Science Major</p>
                                    <hr className="w-[8px] md:w-[40px] h-[2px] bg-black" style={{ color: "#141414" }}></hr>
                                    <p className="font-bold">2015 - 2018</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex flex-row items-center gap-8">
                        <motion.div className="md:flex hidden border-[3px] border-black shadow-lg w-[250px] h-[160px] overflow-hidden"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Image src={granada} alt="Granada Islamic Highschool" width={250} height={250} />
                        </motion.div>
                        <motion.div className="flex flex-col"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="font-bold text-xl lg:text-3xl">Granada Islamic Highschool</p>
                            <div className="flex flex-col w-max">
                                <p className="font-light text-md md:text-lg">Samarinda, Kalimantan Timur, Indonesia</p>
                                <div className="flex flex-row justify-between items-center">
                                    <p className="font-bold">Natural Science Major</p>
                                    <hr className="w-[8px] md:w-[40px] h-[2px] bg-black" style={{ color: "#141414" }}></hr>
                                    <p className="font-bold">2018 - 2021</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex flex-row items-center gap-8">
                        <motion.div className="md:flex hidden border-[3px] border-black shadow-lg w-[250px] h-[160px] overflow-hidden"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Image src={itb} alt="Bandung Institute of Technology" width={250} height={250} />
                        </motion.div>
                        <motion.div className="flex flex-col"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="font-bold text-xl lg:text-3xl">Bandung Institute of Technology</p>
                            <div className="flex flex-col w-max">
                                <p className="font-light text-md md:text-lg">Bandung, Jawa Barat, Indonesia</p>
                                <div className="flex flex-row justify-between items-center">
                                    <p className="font-bold">Physics Major</p>
                                    <hr className="w-[15px] md:w-[30px] lg:w-[35px] h-[2px] bg-black" style={{ color: "#141414" }}></hr>
                                    <p className="font-bold">2021 - now</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}