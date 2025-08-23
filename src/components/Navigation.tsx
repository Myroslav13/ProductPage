import { useEffect, useState } from "react"

interface Props {
    countItems: number;
    addToCart: boolean;
    setCountItems: React.Dispatch<React.SetStateAction<number>>;
    setAddToCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navigation({countItems, addToCart, setCountItems, setAddToCart}: Props) {
    const [cartChecking, setCartChecking] = useState(false)
    const [isSideMenuShowed, setIsSideMenuShowed] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsSideMenuShowed(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <>
            <div className='div-nav d-flex align-items-center justify-content-between border-bottom border-1 position-relative'>
                <nav className="navbar navbar-expand-md p-0">
                    <div className="container-fluid gap-1 gap-md-5 align-items-center flex-row-reverse flex-md-row py-3 py-md-0">
                        <img src="images/logo.svg" alt="logo"></img>
                        
                        <button className="navbar-toggler border-0" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setIsSideMenuShowed(true)}>
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

                <div className='d-flex align-items-center justify-content-between gap-4 position-static position-md-relative'>
                    <div className="position-relative">
                        <img src='images/icon-cart.svg' className="img-cart" style={{cursor: "pointer"}} width={20} alt="icon-cart" onClick={() => setCartChecking(prev => !prev)}></img>
                        <div className="div-items-number position-absolute">{(countItems !== 0) && (addToCart === true) ? countItems : <></>}</div>
                    </div>
                    <img src='images/image-avatar.png' className="img-avatar rounded-circle" width={35} alt="image-avatar" title="You"></img>

                    {cartChecking === true ?
                        <div className="position-absolute div-cart bg-white" style={{zIndex: "9999"}}>
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

            {(isSideMenuShowed === true) ? 
                <>
                    <div className="modal-backdrop fade show"></div>
                    
                    <div className="div-modal modal show d-block bg-white" tabIndex={-1}>
                        <div className="modal-dialog ms-3 mt-2">
                            <div className="modal-content" style={{backgroundColor: "transparent", border: "none"}}>
                                <div className="modal-header pt-1 px-0 d-flex justify-content-start" style={{border: "none"}}>
                                    <button type="button" className="btn-close m-0 ps-3" data-bs-dismiss="modal" aria-label="Close" onClick={() => setIsSideMenuShowed(false)}></button>
                                </div>
                                <div>
                                    <ul className="navbar-nav gap-1 ps-3">
                                        <li className="nav-item">
                                            <a className="nav-link">Collections</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link fs-bold">Men</a>
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
                        </div>
                    </div>
                </>
                : 
                <></>
            }
        </>
    )
}

export default Navigation
