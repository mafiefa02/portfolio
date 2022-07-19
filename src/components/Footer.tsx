export default function Footer() {
    let newDate = new Date();
    let year = newDate.getFullYear();

    return (
        <div className="footer-container flex p-3 text-sm justify-center items-center opacity-50"><p>&copy; {year} Afief Abdurrahman</p></div>
    )
}