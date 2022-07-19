import Layout from "../components/layout/Layout"

export default function ComingSoon() {
    return (
        <Layout>
            <div className="h-[calc(100vh-6em)] flex justify-center items-center font-bold">
                <p className="text-7xl mt-2 drop-shadow-2xl text-primary cursor-pointer hover:animate-pulse">coming soon.</p>
            </div>
        </Layout>
    )
}