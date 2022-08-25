export const Navigation = (props) => {
  return (
    <nav id='menu' className=' navbar-default navbar-fixed-top' style={{backgroundColor:"white"}}>
      <div className='container'style={{ display: 'block'}}>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            शिक्षाVerse
          </a>{' '}
        </div>
      </div>
    </nav>
  )
}
