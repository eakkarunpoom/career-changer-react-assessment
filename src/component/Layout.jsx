import Navbar from "./Navbar"

const Layout = ({children}) => {
    return(
        <div>
            <Navbar />
            <hr />
            {children}
        </div>
    )
}

export default Layout;