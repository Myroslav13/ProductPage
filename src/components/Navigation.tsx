import { useState } from "react"

interface Props {
    countItems: number;
    addToCart: boolean;
    setCountItems: React.Dispatch<React.SetStateAction<number>>;
    setAddToCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navigation({countItems, addToCart, setCountItems, setAddToCart}: Props) {
    const [cartChecking, setCartChecking] = useState(false)

    return (
        <div className='d-flex align-items-center justify-content-between border-bottom border-1'>
            <nav className="navbar navbar-expand-lg p-0">
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

            <div className='d-flex align-items-center justify-content-between gap-4 position-relative'>
                <div>
                    <img src='images/icon-cart.svg' className="img-cart position-relative" style={{cursor: "pointer"}} width={20} alt="icon-cart" onClick={() => setCartChecking(prev => !prev)}></img>
                    <div className="div-items-number position-absolute">{(countItems !== 0) && (addToCart === true) ? countItems : <></>}</div>
                </div>
                <img src='images/image-avatar.png' className="img-avatar rounded-circle" width={35} alt="image-avatar"></img>

                {cartChecking === true ?
                    <div className="position-absolute div-cart bg-white">
                        <div style={{padding: "20px"}}>
                            <h6 className="text-black p-0 m-0">Cart</h6>
                        </div>

                        <hr className="m-0"></hr>

                        <div style={{padding: "20px"}}>
                            {(countItems !== 0 && addToCart === true) ?
                                <>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <img src="images/image-product-1-thumbnail.jpg" className="rounded-3" width={50} height={50} alt="image-product-1-thumbnail"></img>
                                        
                                        <div>
                                            <p className="m-0">Fall Limited Edition Sneakers</p>
                                            <p className="m-0">$125.00 x {countItems} <b className="text-black">${125 * countItems}.00</b></p>
                                        </div>

                                        <img src="images/icon-delete.svg" style={{cursor: "pointer"}} alt="icon-delete" onClick={() => {setCountItems(0); setAddToCart(false)}}></img>
                                    </div>

                                    <button className="btn-checkout w-100" style={{marginTop: "20px"}}>Checkout</button>
                                </>
                                :
                                <>
                                    <p className="text-center py-5 m-0"><b>Your cart is empty.</b></p>
                                </>
                            }
                        </div>
                    </div>
                :
                    <></>
                }
            </div>
        </div>
    )
}

export default Navigation
