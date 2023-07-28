import React from 'react'
import {NavLink} from  'react-router-dom'
import '../css/HomeStyles.css';
// import '../scripts/Homescript'




const handleButton=(e) =>{
  e.to='/register';
}

const Home = () => {

  return (
    <div>
  <header className="p-3 shadow-sm">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-auto logo">
          {/* <img src="../logo.png" alt="Blue Buck Logo" /> */}
          <h1>Blue<br /> Buck</h1>
        </div>
        <div className="col-auto">
          <ul className="nav-menu">
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" href="#" id="productsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                <li><NavLink className="dropdown-item" href="#">Blue Buck Financial Management</NavLink></li>
                <li><NavLink className="dropdown-item" href="#">Payroll</NavLink></li>
                <li><NavLink className="dropdown-item" href="#">Analytics and Reporting</NavLink></li>
                {/* <li><Navlink className="dropdown-item" href="#">Spend Management</NavLink></li> */}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" href="#" id="customersDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Customers
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="customersDropdown">
                <li><NavLink className="dropdown-item" href="#">Overview</NavLink></li>
                <li><NavLink className="dropdown-item" href="#">Customer Stories</NavLink></li>
                <li><NavLink className="dropdown-item" href="#">Deployment</NavLink></li>
                <li><NavLink className="dropdown-item" href="#">Community</NavLink></li>
                <li><NavLink className="dropdown-item" href="#">Support</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" href="#" id="companyDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Company
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="companyDropdown">
                <li><NavLink className="dropdown-item" href="#">Overview</NavLink></li>
                <li><NavLink className="dropdown-item" href="#">Our Story And Leadership</NavLink></li>
                <li><NavLink className="dropdown-item" href="#">Our Values</NavLink></li>
                <li><NavLink className="dropdown-item" href="#">Public Policy</NavLink></li>
                <li><NavLink className="dropdown-item" href="mailto:bluebuck@gmail.com">Contact Us</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-auto">
          <form className="search-form">
            <input type="text" className="form-control" id="search-input" placeholder="Search" />
            <span className="input-group-text" onclick="search()">
              <img src="https://th.bing.com/th/id/OIP.P710z9NCBfIr6vNnv506mwHaHW?pid=ImgDet&w=2400&h=2382&rs=1" alt="Search Icon" className="search-icon" />
            </span>
          </form>
        </div>
        <div className="col-auto">
          <NavLink to='/register' className="btn btn-danger signup-button" >Sign Up</NavLink>
          <NavLink to='/login' className="btn btn-danger signup-button">Log In</NavLink>
        </div>
      </div>
    </div>
  </header>
  <div className="section bg-white p-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <img src="../people.png" alt="People Discussing" className="img-fluid" />
        </div>
        <div className="col-lg-6 text-center">
          <h2 className="mb-4">Your Life's Work, Powered by Our Life's Work</h2>
          <h4 className="mb-4">A unique and powerful software suite to transform the way you work. Designed for businesses of all sizes, built by a company that values your privacy.</h4>
          <button className="btn btn-danger d-block mx-auto" onclick={handleButton}>GET STARTED</button>
        </div>
      </div>
    </div>
  </div>
  <div className="section bg-light py-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="text-center">  
          </div>
          <img src="../cube.png" alt="Blue Buck Logo" className="mx-auto d-block mb-4 des" />
          <div className="sub-paragraph">
            <h3 className="text-center mb-4">All-in-One Suite</h3>
            <p className="text-center mb-4" style={{fontSize: 18, color: '#555'}}>BLUE BUCK ONE - the operating system for business.</p>
            <p className="text-center mb-4" style={{fontSize: 16, color: '#555'}}>Run your entire business on Blue Buck with our unified cloud software, designed to help you break down silos between departments and increase organizational efficiency.</p>
            <button className="btn btn-warning d-block mx-auto">TRY BLUE BUCK ONE</button>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="quote-container">
            <p className="quote">"You can be a startup, mid-sized company, or an enterprise—<br />Blue Buck One is a boon for all."</p>
            <p className="quote-author">XYZ (CEO, BLUE BUCK)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home
