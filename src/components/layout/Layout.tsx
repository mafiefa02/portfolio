import Nav from "../Nav"
import Footer from "../Footer"
import GlobalStyle from "../../styles/global"
import Sidebar from "../Sidebar"
import Switcher from "../Switcher"
import ScrollToTopButton from "../ScrollToTopButton"

export default function Layout(props: any) {
    return (
        <>
            <div className="min-w-screen min-h-screen dark:bg-background bg-gray-200">
                <GlobalStyle />
                <Nav />
                <Sidebar />
                {props.children}
                <Switcher />
                <ScrollToTopButton />
                <Footer />
            </div>
        </>
    )
}