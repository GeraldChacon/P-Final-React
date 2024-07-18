const Carousel = () => {
    return (
        <div>
            <div id = "carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                       <img src="oferta-camas.png" className="d-block w-100" alt="Ofertas Camas"/>
                    </div>
                    <div className="carousel-item">
                        <img src="oferta-alimentos.png" className="d-block w-100" alt="Oferas Alimentos"/>
                    </div>
                    <div className="carousel-item">
                        <img src="oferta-bocaditos.png" className="d-block w-100" alt="Ofertas Bocaditos"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
            </div >
        </div>
    )
}

export default Carousel