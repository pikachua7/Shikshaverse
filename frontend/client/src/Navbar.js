import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <a className="navbar-brand" href="/">
      <div className="logo-image" style={{ width: '60px',
    height: '60px',
    borderRadius: '2px',
    overflow: 'hidden',
    border:'1px solid',
    marginLeft:'30px'
    }}>
            <img src="img/logo.png" class="img-fluid"/>
            
      </div>
</a>
<h2>शिक्षाVerse</h2>  
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/about" className="nav-item nav-link active">About Us</Link>
                <Link to="/contact" className="nav-item nav-link active ">Contact</Link>
                <Link to="/map" className="nav-item nav-link active" style={{color:'blue'}}>Start Tour</Link>

            </div>

            
        </div>
    </nav>
    
    </>
  )
}

export default Navbar