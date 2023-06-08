import Button from "@/components/Button"
import Link from "next/link"

export default function NotFound() {
    return (
        <main>
            <div className="flex flex-col justify-center items-center gap-4 h-[calc(100vh-160px)]">
                <h1 className="text-6xl">404</h1>
                <p>Page not found</p>
                <Button type="default" link="/" name="Back" />
            </div>
        </main >
    )
}