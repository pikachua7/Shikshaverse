export const Navigation = (props) => {
  return (
    <nav id='menu' className=' navbar-default navbar-fixed-top' style={{ backgroundColor: "white",verticalAlign:'middle'}}>
      <a className="navbar-brand" href="/">
        <div className="logo-image" style={{
          width: '60px',
          height: '60px',
          borderRadius: '2px',
          overflow: 'hidden',
          border: '1px solid',
          marginLeft: '30px'
        }}>
          <img src="img/logo.png" class="img-fluid" />

        </div>
      </a>




      <a className='navbar-brand page-scroll' href='/'>
        शिक्षाVerse
      </a>{' '}

    </nav>
  )
}
