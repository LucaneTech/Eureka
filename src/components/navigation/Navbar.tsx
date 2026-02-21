import { Link, Outlet } from "react-router-dom"
import Footer from "./Footer"


const Navbar = ({bgColor}: {bgColor: string}) =>{
    return(
        <>

        <div  className={`${bgColor} flex md:flex-row justify-center gap-6 items-center p-3`} >
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/services"}>Services</Link>
            </li>
        </div>

        <Outlet/>

        <Footer/>

        </>
    )
}

export default Navbar