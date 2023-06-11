import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface educationProps {
    image: StaticImageData,
    name: string,
    location: string,
    major: string,
    yearStart: number,
    yearEnd?: number,
}

export default function Education(props: educationProps) {
    return (
        <div className="flex flex-row justify-center items-center gap-12">
            <motion.div className="md:flex hidden w-[130px] h-[130px] overflow-hidden"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Image src={props.image} alt={props.name} width={250} height={250} />
            </motion.div>
            <motion.div className="flex flex-col"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <p className="font-bold text-xl lg:text-3xl mb-2">{props.name}</p>
                <div className="flex flex-col w-max">
                    <p className="font-light text-md md:text-lg lg:text-xl">{props.location}</p>
                    <div className="flex flex-row justify-between items-center">
                        <p className="font-bold whitespace-nowrap">{props.major}</p>
                        <hr className={`w-full h-[2px] mx-4 bg-black`} style={{ color: "#141414" }}></hr>
                        <p className="font-bold whitespace-nowrap">{props.yearStart} - {props.yearEnd ?? "now"}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}