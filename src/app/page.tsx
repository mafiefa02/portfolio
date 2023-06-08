import Image from "next/image"
import { Tooltip } from "react-tooltip"
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
import profile from "/public/images/profile.jpg"
import Button from "@/components/Button"

export default function Home() {
  return (
    <main>
      <div className='flex flex-col md:flex-row items-center justify-between md:justify-center w-full self-center md:min-h-[calc(100vh-(78px+8rem))] min-h-[calc(100vh-(78px+4rem))]'>
        <div className="md:hidden min-w-screen h-[200px] overflow-hidden border-b-[3px] border-t-[1px] border-black pointer-events-none">
          <Image
            src="/images/profile.jpg"
            alt="Picture of the author"
            width={1000}
            height={1000}
            quality={100}
            className="relative top-[calc(-60vw)]"
          />
        </div>
        <div className="hidden md:flex items-center justify-center md:h-[350px] md:min-w-[250px] md:w-[250px] lg:h-[400px] lg:w-[300px] ml-[4.5rem] border-4 border-black overflow-hidden shadow-2xl pointer-events-none">
          <Image src={profile} alt="Profile" width={400} height={400} className="object-cover" />
        </div>
        <div className="flex flex-col justify-center min-h-[550px] h-[calc(100vh-(200px+78px+8rem))] md:min-h-[calc(100vh-(78px+8rem))] items-start gap-0 px-[4.5rem]">
          <div className="w-full"><p className="font-light text-left text-xl mb-1">Hello, I am</p></div>
          <div className="w-full"><h1 className="font-bold text-left text-4xl md:text-[2.9rem]">Afief Abdurrahman</h1></div>
          <div className="max-w-[360px] mt-2"><p className="font-light text-left">currently an undergraduate physics student at <span className="font-bold"><a data-tooltip-id="itb" data-tooltip-content="A university located in Bandung, Indonesia. As in 2023, Bandung Institute of Technology or ITB is a top 3 university in Indonesia" href="https://itb.ac.id">Bandung Institute of Technology</a></span></p></div>
          <Tooltip id="itb" className="font-bold max-w-xs break-words" />
          <div className="w-full mt-6 mb-3"><p className="font-bold">Tech/Design Stacks</p></div>
          <div className="flex flex-col gap-2 md:hidden">
            <div className="flex flex-row gap-6 max-w-xs">
              <Image data-tooltip-id="javascript" data-tooltip-content="Javascript" src={javascript} alt="Javascript" width={38} height={38} />
              <Image data-tooltip-id="illustrator" data-tooltip-content="Adobe Illustrator" src={illustrator} alt="Illustrator" width={38} height={38} />
              <Image data-tooltip-id="tailwind" data-tooltip-content="TailwindCSS" src={tailwindcss} alt="TailwindCSS" width={38} height={38} />
              <Image data-tooltip-id="css" data-tooltip-content="CSS3" src={css} alt="CSS" width={31} height={31} />
              <Image data-tooltip-id="typescript" data-tooltip-content="Typescript" src={typescript} alt="TypeScript" width={38} height={38} />
              <Tooltip id="javascript" className="font-bold" />
              <Tooltip id="illustrator" className="font-bold" />
              <Tooltip id="tailwind" className="font-bold" />
              <Tooltip id="css" className="font-bold" />
              <Tooltip id="typescript" className="font-bold" />
            </div>
            <div className="flex flex-row gap-6 max-w-xs">
              <Image data-tooltip-id="nextjs" data-tooltip-content="Next.js" src={nextjs} alt="Next.js" width={38} height={38} />
              <Image data-tooltip-id="prisma" data-tooltip-content="Prisma" src={prisma} alt="Prisma" width={33} height={33} />
              <Image data-tooltip-id="react" data-tooltip-content="ReactJS" src={react} alt="ReactJS" width={38} height={38} />
              <Image data-tooltip-id="figma" data-tooltip-content="Figma" src={figma} alt="Figma" width={25} height={25} />
              <Image data-tooltip-id="py" data-tooltip-content="Python" src={python} alt="Python" width={35} height={35} />
              <Tooltip id="nextjs" className="font-bold" />
              <Tooltip id="prisma" className="font-bold" />
              <Tooltip id="react" className="font-bold" />
              <Tooltip id="figma" className="font-bold" />
              <Tooltip id="py" className="font-bold" />
            </div>
          </div>
          <div className="md:flex hidden flex-row w-full gap-3">
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
          </div>
          <div className="flex flex-row gap-2 md:gap-6 w-full mt-6">
            <Button type="default" link="mailto:mafiefa.business@gmail.com" name="Contact Me!" className="px-6 md:px-12" />
            <Button type="outline" link="google.com" name="Download CV" className="px-6 md:px-12" />
          </div>
        </div>
      </div>
    </main>
  )
}
