import { Link, NavLink } from 'react-router-dom'

function NavBar() {

  return (
    <>
      <nav className="navbar bg-dark border-bottom border-body navbar-expand-lg" data-bs-theme="dark" id='nav-bar'>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">GiltEdged Info</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li>
                <NavLink to="/background-story" className="nav-link">Story</NavLink>
              </li>
              <li>
                <NavLink to="/reading" className="nav-link">Reading</NavLink>
              </li>
            </ul>
          </div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
            <li>
              <a className="nav-link" href="https://www.giltedged.systems" target="_self">GiltEdged.systems <i className="bi bi-box-arrow-up-right mb-2"></i></a>
            </li>
          </ul>          
        </div>
      </nav>
    </>
  )
}

export default NavBar
