import Link from "next/link"

interface buttonProps {
    name: string,
    link: string,
    className?: string,
    mobile?: boolean
    type: "default" | "outline" | "text"
}

export default function Button(props: buttonProps) {
    const buttonClasses = [
        {
            type: "default",
            className: "bg-black text-white border-2 border-black hover:bg-white hover:bg-opacity-80 hover:backdrop-blur-sm hover:text-black px-12 py-2 hover:font-bold transition whitespace-nowrap"
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
            <button className={`${buttonClasses.find(buttonClass => buttonClass.type === props.type)?.className} ${props.className}`}>{props.name}</button>
        </Link>
    )
}