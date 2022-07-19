export default function Nav() {
    return (
        <div className="nav-container transition-all duration-500 shadow-xl shadow-neutral-900 min-w-screen min-h-3em bg-background p-9">
            <div className="nav flex gap-[3em] justify-center items-center">
                <a href="/" className="transition duration-500 active:duration-200 hover:opacity-100 font-bold opacity-50 active:text-primary">HOME</a>
                <a href="/" className="transition duration-500 active:duration-200 hover:opacity-100 font-bold opacity-50 active:text-primary">PROFILE</a>
            </div>
        </div>
    )
}