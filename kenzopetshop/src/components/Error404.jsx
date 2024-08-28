import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <div className="container my-5">
            <div className="row my-5">
                <div className="col text-center">
                    <div className="alert alert-light" role="alert">
                        <h1><img src="/emoji-frown-fill.svg" alt="carita" width={130} /></h1>
                        <h2>Error 404!.</h2>
                        <h3>La página que buscas no existe!</h3>
                        <Link to={"/"} className="btn btn-primary rounded-pill mt-5">Volver al Inicio</Link>
                    </div>
                </div>
            </div>
        </div> 
        
    )
}

export default Error404