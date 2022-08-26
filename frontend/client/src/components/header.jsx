import {Link} from "react-router-dom"

export const Header = (props) => {
  return (
    <header id='header'>
    <div className='intro'>
      <div className='overlay'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-1 col-md-offset-2 intro-text'>
              <h1>
              &nbsp;
                <span></span>
              </h1>
              <p>&nbsp;</p>
              <div className="container"style={{width:'200px',color:'white',fontSize:'30px'}}>Start Here</div>
              <Link to="/map"><img src="https://www.pngrepo.com/png/255181/512/location-pin.png" style={{width:"120px",marginLeft:'40px'}}/></Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}
