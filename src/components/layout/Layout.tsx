import Nav from "../Nav"
import Footer from "../Footer"
import GlobalStyle from "../../styles/global"

export default function Layout(props: any) {
    return (
        <>
            <div className="min-w-screen min-h-screen bg-background">
                <GlobalStyle />
                <Nav />
                {props.children}
                <Footer />
            </div>
        </>
    )
}