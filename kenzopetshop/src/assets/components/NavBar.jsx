import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div className="container-fluid bg-primary-subtle py-3">
            <div className="row">
                <div className="col d-flex">
                    <img src="kenzoacuarela.png" className="rounded-circle" alt="logo" width={40} />
                    <h3 className="px-3">Kenzo Pet Shop</h3>
                </div>
                
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Perros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Gatos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Accesorios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Servicios</a>
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