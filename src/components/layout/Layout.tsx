import Nav from "../Nav"
import Footer from "../Footer"

export default function Layout(props: any) {
    return (
        <>
            <div className="min-w-screen min-h-screen bg-background">
                <Nav />
                {props.children}
                <Footer />
            </div>
        </>
    )
}