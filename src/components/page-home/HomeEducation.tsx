"use client"

import { motion } from "framer-motion"
import { faCircle, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import cordova from "/public/images/education/smpitcordova.png"
import granada from "/public/images/education/smaitgranada.png"
import itb from "/public/images/education/itb.png"

import Education from "./section-education/Education"

export default function HomeEducation() {
    return (
        <section id="education" className="education mt-2 md:mt-28 mb-32">
            <div className="flex flex-row gap-8 w-full items-center justify-center px-8 mb-16">
                <div className="w-max whitespace-nowrap">
                    <motion.p className="text-center text-4xl md:text-5xl font-bold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
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
            <div className="flex flex-row justify-center px-8 gap-4 md:gap-8 lg:gap-12">
                <div className="flex flex-col items-center justify-start md:pt-8">
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
                    ><FontAwesomeIcon icon={faEllipsisVertical} color="#141414" /></motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    ><FontAwesomeIcon icon={faCircle} color="#141414" /></motion.span>
                </div>
                <div className="flex flex-col gap-11 w-max items-start pl-8 md:pl-12 lg:pl-8">
                    <Education image={itb} name="Bandung Institute of Technology" location="Bandung, Jawa Barat, Indonesia" major="Physics" yearStart={2021} />
                    <Education image={granada} name="Granada Islamic Senior Highschool" location="Samarinda, Kalimantan Timur, Indonesia" major="Natural Science Major" yearStart={2018} yearEnd={2021} />
                    <Education image={cordova} name="Cordova Islamic Junior Highschool" location="Samarinda, Kalimantan Timur, Indonesia" major="Natural Science Major" yearStart={2015} yearEnd={2018} />
                </div>
            </div>
        </section>
    )
}