import { Link } from "react-router-dom";
import Switcher from "./Switcher";

export default function Nav() {
    return (
        <div className="nav-container transition-none duration-500 shadow-xl dark:shadow-neutral-900 min-w-screen min-h-3em dark:bg-background bg-gray-200 shadow-gray-300 p-9">
            <div className="nav flex gap-[3em] justify-center items-center">
                <Link to="/" className="transition duration-500 active:duration-200 dark:hover:opacity-100 font-bold dark:opacity-50 dark:active:text-primary dark:text-white text-black hover:text-primary">HOME</Link>
                <Link to="/profile" className="transition duration-500 active:duration-200 dark:hover:opacity-100 font-bold dark:opacity-50 dark:active:text-primary dark:text-white text-black hover:text-primary">PROFILE</Link>
                <Link to={"/blog"} className="transition duration-500 active:duration-200 dark:hover:opacity-100 font-bold dark:opacity-50 dark:active:text-primary dark:text-white text-black hover:text-primary">BLOG</Link>
            </div>
        </div>
    )
}