
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="google.comnavbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0" href="google.com">
            <h4 className='text-primary'>Logo</h4>
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="google.com">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="google.com">General</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="google.com">Admin</a>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <div className='m-2 mt-0 mb-0'>
            <Link to="/signin">
              <button className='btn btn-primary'>
                Sign In
              </button>
            </Link>

          </div>
          <div className='m-2 mt-0 mb-0'>
            <Link to="/signup">
              <button className='btn btn-secondary'>
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;