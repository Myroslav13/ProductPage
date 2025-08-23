import { useState } from 'react'

interface Props {
    countItems: number;
    setCountItems: React.Dispatch<React.SetStateAction<number>>;
    setAddToCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function Product({countItems, setCountItems, setAddToCart}: Props) {
    const [activePhoto, setActivePhoto] = useState(0)
    const [activeModalPhoto, setActiveModalPhoto] = useState(0)
    const [isModalShowed, setIsModalShowed] = useState(false)

    return (
        <>
            <div className="row align-items-start mt-0 mt-lg-4 px-0 px-lg-5">
                <div className="col-12 col-lg-5">
                    <img src={`images/image-product-${activePhoto + 1}.jpg`} className='img-fluid rounded-0 rounded-lg-4' style={{width: "100%"}} alt={`image-product-${activePhoto + 1}`} onClick={() => {setIsModalShowed(true); setActiveModalPhoto(activePhoto)}}></img>

                    <div className='d-none d-lg-flex align-items-center justify-content-between mt-4'>
                        <div className={`img-thumb ${activePhoto === 0 ? "active": ""}`}><img src="images/image-product-1-thumbnail.jpg" className="img-fluid" onClick={() => setActivePhoto(0)} alt="image-product-1-thumbnail"></img></div>
                        <div className={`img-thumb ${activePhoto === 1 ? "active": ""}`}><img src="images/image-product-2-thumbnail.jpg" className="img-fluid" onClick={() => setActivePhoto(1)} alt="image-product-2-thumbnail"></img></div>
                        <div className={`img-thumb ${activePhoto === 2 ? "active": ""}`}><img src="images/image-product-3-thumbnail.jpg" className="img-fluid" onClick={() => setActivePhoto(2)} alt="image-product-3-thumbnail"></img></div>
                        <div className={`img-thumb ${activePhoto === 3 ? "active": ""}`}><img src="images/image-product-4-thumbnail.jpg" className="img-fluid" onClick={() => setActivePhoto(3)} alt="image-product-4-thumbnail"></img></div>
                    </div>
                </div>

                <div className="div-product-data col-12 col-lg-7 d-flex flex-column align-items-start my-auto px-5 px-lg-auto">
                    <h4 className='text-uppercase' style={{fontSize: "12px", letterSpacing: "2px"}}>Sneaker Company</h4>

                    <h1 className='fw-bold fs-1'>Fall Limited Edition Sneakers</h1>

                    <p className='pt-3'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

                    <div className='d-flex d-lg-block justify-content-between align-items-center mb-2 mb-lg-0 w-100'>
                        <div className='d-flex gap-2 align-items-center mb-0 mb-lg-2'>
                            <p className='text-black fw-bold fs-4 m-0'>$125.00</p>
                            <p className='bg-black text-white fw-bold rounded-3 py-0 px-2 m-0'>50%</p>
                        </div>
                        <p className='text-decoration-line-through fw-bold mb-0 mb-lg-4'>$250.00</p>
                    </div>

                    <div className='d-flex gap-3'>
                        <div className='d-flex align-items-center gap-3' style={{backgroundColor: "#f7f8fd"}}>
                            <button className="btn-change-count" onClick={() => setCountItems(prev => prev === 0 ? 0 : prev - 1)}><img src="images/icon-minus.svg" alt="icon-minus"></img></button>
                            <p className='m-0 fw-bold text-black'>{countItems}</p>
                            <button className="btn-change-count" onClick={() => setCountItems(prev => prev + 1)}><img src="images/icon-plus.svg" alt="icon-plus"></img></button>
                        </div>

                        <button className='btn-add-to-cart' onClick={() => {countItems !== 0 ? setAddToCart(true) : setAddToCart(false)}}>
                            <i className="bi bi-cart2 pe-2"></i>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>

            {isModalShowed === true ?
                <>
                    <div className="modal-backdrop fade show"></div>
                    
                    <div className="modal show d-block" tabIndex={-1}>
                        <div className="modal-dialog">
                            <div className="modal-content" style={{backgroundColor: "transparent", border: "none"}}>
                                <div className="modal-header px-0 d-flex justify-content-end" style={{border: "none"}}>
                                    <button type="button" className="my-btn-close p-0" onClick={() => setIsModalShowed(false)}><img src="images/icon-close.svg"></img></button>
                                </div>
                                <div className="position-relative">
                                    <button className="btn-modal-prev rounded-circle position-absolute" onClick={() => setActiveModalPhoto(prev => prev === 0 ? 3 : prev - 1)}><img src="images/icon-previous.svg"></img></button>
                                    <img src={`images/image-product-${activeModalPhoto + 1}.jpg`} className='img-fluid rounded-4' style={{width: "100%"}} alt={`image-product-${activeModalPhoto + 1}`}></img>
                                    <button className="btn-modal-next rounded-circle position-absolute" onClick={() => setActiveModalPhoto(prev => prev === 3 ? 0 : prev + 1)}><img src="images/icon-next.svg"></img></button>

                                    <div className='d-flex align-items-center justify-content-center gap-4 mt-4'>
                                        <div className={`img-thumb ${activeModalPhoto === 0 ? "active": ""}`}><img src="images/image-product-1-thumbnail.jpg" className="img-fluid" onClick={() => setActiveModalPhoto(0)} alt="image-product-1-thumbnail"></img></div>
                                        <div className={`img-thumb ${activeModalPhoto === 1 ? "active": ""}`}><img src="images/image-product-2-thumbnail.jpg" className="img-fluid" onClick={() => setActiveModalPhoto(1)} alt="image-product-2-thumbnail"></img></div>
                                        <div className={`img-thumb ${activeModalPhoto === 2 ? "active": ""}`}><img src="images/image-product-3-thumbnail.jpg" className="img-fluid" onClick={() => setActiveModalPhoto(2)} alt="image-product-3-thumbnail"></img></div>
                                        <div className={`img-thumb ${activeModalPhoto === 3 ? "active": ""}`}><img src="images/image-product-4-thumbnail.jpg" className="img-fluid" onClick={() => setActiveModalPhoto(3)} alt="image-product-4-thumbnail"></img></div>
                                    </div>
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

export default Product
