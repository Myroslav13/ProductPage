function Navigation() {
    return (
        <div className='d-flex align-items-center justify-content-between py-2 border-bottom border-1'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid gap-5 align-items-center">
                    <img src="images/logo.svg" alt="logo"></img>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
            
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav gap-3">
                            <li className="nav-item">
                                <a className="nav-link">Collections</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Men</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Women</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className='d-flex align-items-center justify-content-between gap-4'>
                <img src='images/icon-cart.svg' width={20} alt="icon-cart"></img>
                <img src='images/image-avatar.png' className="img-avatar rounded-circle" width={35} alt="image-avatar"></img>
            </div>
        </div>
    )
}

export default Navigation
