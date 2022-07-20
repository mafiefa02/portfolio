import Layout from "../components/layout/Layout"

export default function NotFound() {
    return (
        <Layout>
            <div className="h-[calc(100vh-6em)] flex justify-center items-center font-bold">
                <p className="text-7xl mt-2 text-primary cursor-pointer">not found.</p>
            </div>
        </Layout>
    )
}