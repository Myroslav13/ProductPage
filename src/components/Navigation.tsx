import { useState } from 'react'

function Navigation() {
  const [count, setCount] = useState(0)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active">Collections</a>
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
  )
}

export default Navigation
