export default function Hero() {
    return (
        <div className="h-[calc(100vh-6em)] flex justify-center items-center">
            <div className="flex flex-col justify-center items-center font-bold gap-3">
                <p className="text-2xl lg:text-4xl md:text-2xl sm:text-3xl sm:self-center lg:self-start md:self-start">hello, i am</p>
                <div className="flex lg:flex-row md:flex-row gap-[1em] sm:flex-col flex-col">
                    <p className="self-center sm:self-center text-6xl lg:text-7xl md:text-5xl sm:text-7xl sm:drop-shadow-lg drop-shadow-2xl text-primary cursor-pointer hover:animate-pulse">afief</p>
                    <p className="hidden lg:contents md:contents sm:hidden text-3xl lg:text-7xl md:text-5xl sm:text-5xl sm:drop-shadow-lg drop-shadow-2xl text-primary cursor-pointer hover:animate-pulse">abdurrahman</p>
                </div>
            </div>
        </div>
    )
}