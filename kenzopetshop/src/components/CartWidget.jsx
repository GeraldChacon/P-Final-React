const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn btn-primary position-relative">
                <img src="/cart4.svg" alt="Carrito" width={20}/> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> 0 <span className="visually-hidden">unread messages</span>
                </span>
            </button>
        </div>
    )
}

export default CartWidget