import { useState } from 'react'

function Product() {
    const [countItems, setCountItems] = useState(0)
    const [activePhoto, setActivePhoto] = useState(0)

    return (
        <div className="row align-items-start mt-4 px-5">
            <div className="col-12 col-lg-5">
                <img src={`images/image-product-${activePhoto + 1}.jpg`} className='img-fluid rounded-4' style={{width: "100%"}} alt={`image-product-${activePhoto + 1}`}></img>

                <div className='d-flex align-items-center justify-content-between mt-4'>
                    <div className={`img-thumb ${activePhoto === 0 ? "active": ""}`}><img src="images/image-product-1-thumbnail.jpg" className="img-fluid" onClick={() => setActivePhoto(0)} alt="image-product-1-thumbnail"></img></div>
                    <div className={`img-thumb ${activePhoto === 1 ? "active": ""}`}><img src="images/image-product-2-thumbnail.jpg" className="img-fluid" onClick={() => setActivePhoto(1)} alt="image-product-2-thumbnail"></img></div>
                    <div className={`img-thumb ${activePhoto === 2 ? "active": ""}`}><img src="images/image-product-3-thumbnail.jpg" className="img-fluid" onClick={() => setActivePhoto(2)} alt="image-product-3-thumbnail"></img></div>
                    <div className={`img-thumb ${activePhoto === 3 ? "active": ""}`}><img src="images/image-product-4-thumbnail.jpg" className="img-fluid" onClick={() => setActivePhoto(3)} alt="image-product-4-thumbnail"></img></div>
                </div>
            </div>

            <div className="col-12 col-lg-7 d-flex flex-column align-items-start my-auto" style={{height: "100%", padding: "0px 100px"}}>
                <h4 className='text-uppercase' style={{fontSize: "12px", letterSpacing: "2px"}}>Sneaker Company</h4>

                <h1 className='fw-bold fs-1'>Fall Limited Edition Sneakers</h1>

                <p className='pt-3'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

                <div className='d-flex gap-2 align-items-center mb-2'>
                    <p className='text-black fw-bold fs-4 m-0'>$125.00</p>
                    <p className='bg-black text-white fw-bold rounded-3 py-0 px-2 m-0'>50%</p>
                </div>
                <p className='text-decoration-line-through fw-bold'>$250.00</p>

                <div className='d-flex gap-3'>
                    <div className='d-flex align-items-center gap-3' style={{backgroundColor: "#f7f8fd"}}>
                        <button className="btn-change-count" onClick={() => setCountItems(prev => prev === 0 ? 0 : prev - 1)}><img src="images/icon-minus.svg" alt="icon-minus"></img></button>
                        <p className='m-0 fw-bold text-black'>{countItems}</p>
                        <button className="btn-change-count" onClick={() => setCountItems(prev => prev + 1)}><img src="images/icon-plus.svg" alt="icon-plus"></img></button>
                    </div>

                    <button className='btn-add-to-cart'>
                        <i className="bi bi-cart2 pe-2"></i>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product
