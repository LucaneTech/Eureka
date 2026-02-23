import { Footer } from "./Footer"
import { Link, Outlet } from "react-router-dom"
import { Button } from "../ui/Button"
const Navbar = ({bgColor}: {bgColor: string}) =>{
    return(
        <>
        <nav className={`${bgColor}`}>
            {/* our logo section */}
            <div className="">
                <img src="#" alt="#"/>

            </div>

            <ul>
                <li><Link to="/">Acceuil</Link></li>
                <li><Link to="/services">Services</Link></li>
            </ul>

            <div>
                <Button text="test Button" variant="ligth" to="/services"/>
            </div>

            
        </nav>

        <Outlet/>

        <Footer/>

        </>
    )
}

export default Navbar