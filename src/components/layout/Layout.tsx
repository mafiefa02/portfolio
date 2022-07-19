import Nav from "../Nav"
import Footer from "../Footer"

export default function Layout(props: any) {
    return (
        <>
            <Nav />
            {props.children}
            <Footer />
        </>
    )
}