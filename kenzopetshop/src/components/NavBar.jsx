import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div className="container-fluid bg-primary-subtle py-3">
            <div className="row">
                <div className="col d-flex">
                    <Link to={"/"}>
                        <img src={"/kenzoacuarela.png"} className="rounded-circle" alt="logo" width={40} />
                    </Link>
                    <h3 className="px-3">Kenzo Pet Shop</h3>
                </div>
                
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <NavLink to={"/category/perros"} className="nav-link text-black">Perros</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/category/gatos"} className="nav-link text-black">Gatos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/category/accesorios"} className="nav-link text-black">Accesorios</NavLink>
                        </li>
                    </ul>
                    
                </div>
                <div className="col">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar