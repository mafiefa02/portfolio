import Layout from "../components/layout/Layout"

export default function ComingSoon() {
    return (
        <Layout>
            <div className="h-[calc(100vh-6em)] flex justify-center items-center font-bold">
                <div className="flex lg:flex-row md:flex-row gap-[1em] sm:flex-col flex-col">
                    <p className="self-center sm:self-center text-5xl lg:text-7xl md:text-6xl sm:text-6xl sm:drop-shadow-lg drop-shadow-2xl text-primary cursor-pointer">coming</p>
                    <p className="contents text-5xl lg:text-7xl md:text-6xl sm:text-6xl sm:drop-shadow-lg drop-shadow-2xl text-primary cursor-pointer">soon.</p>
                </div>
            </div>
        </Layout>
    )
}