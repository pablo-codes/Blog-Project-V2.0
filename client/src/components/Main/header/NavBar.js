import React, { useState, useEffect } from 'react'
import blogService from '../../../services/blogService'
import { BiChevronDown, BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

{/* eslint-disable jsx-a11y/anchor-is-valid */ }
const NavBar = (props) => {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState(true)
  function Click() {
    if (search) {
      setSearch(false)
    } else {
      setSearch(true)
    }
  }
  const response = () => {
    blogService.getAll()
      .then(response => {
        setProducts(response.data);

      })
      .catch(e => {
        console.log(e);
      });
  }


  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

  }


  useEffect(() => {
    response()
  }, [])




  return (
    <nav id='scroll' className="navbar navbar-expand-lg center-nav transparent navbar-dark navbar-clone fixed navbar-stick">
      <div className="container flex-lg-row flex-nowrap align-items-center">
        <div className="navbar-brand w-100">
          <a href='/'> <img className="logo-dark" src="" srcSet="./assets/img/logo@2x.png 2x" alt="" />
            <img className="logo-light" src={require(`../../../images/static/logo.png`)} srcSet="./assets/img/logo-light@2x.png 2x" alt="" />
          </a>
        </div>

        <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start" >
          <div className="offcanvas-header d-lg-none">
            <h3 className="text-white fs-30 mb-0">Sandbox</h3>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
            <ul className="navbar-nav">
              <li className="nav-item dropdown dropdown-mega">
                <a id="nav-link" className="nav-link " href="/" >Home <BiChevronDown /></a>
              </li>
              <li className="nav-item dropdown dropdown-mega">
                <a id="nav-link" className="nav-link " href="/" data-bs-toggle="dropdown">Products<BiChevronDown /></a>
                <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                  <li className="mega-menu-content mega-menu-scroll">
                    <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-4 gy-lg-2 list-unstyled">
                      {products && products.map((el) => {

                        return <Link to={"/products/" + el._id}>
                          <li className="col">
                            <figure className="rounded lift d-none d-lg-block"><img style={{ width: "70%", height: "70%" }} src={require(`../../../images/dynamic/${el.gridfilename[0]}`)} alt="" /></figure>
                            <span className="d-lg">{el.title}</span>
                          </li>
                        </Link>
                      })}


                    </ul>
                    {/* <!--/.row --> */}

                  </li>
                  {/* <!--/.mega-menu-content--> */}
                </ul>
                {/* <!--/.dropdown-menu --> */}
              </li>
              <li className="nav-item dropdown">
                <a id="nav-link" className="nav-link " href="/about" data-bs-toggle="dropdown">About <BiChevronDown /></a>
              </li>


              <li className="nav-item dropdown dropdown-mega">
                <a id="nav-link" className="nav-link " data-bs-toggle="dropdown">Blocks <BiChevronDown /></a>
                <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                  <li className="mega-menu-content">
                    <ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-6 gy-lg-4 list-unstyled">
                      <li className="col"><a className="dropdown-item" href="https://github.com/pablo-codes">
                        <div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2"><img className="rounded-0" src='' alt="" /></div>
                        <span>About</span>
                      </a>
                      </li>
                    </ul>
                    {/* <!--/.row --> */}
                  </li>
                  {/* <!--/.mega-menu-content--> */}
                </ul>
                {/* <!--/.dropdown-menu --> */}
              </li>
            </ul>
            {/* <!-- /.navbar-nav --> */}

            {/* <!-- /.offcanvas-footer --> */}
          </div>
          {/* <!-- /.offcanvas-body --> */}
        </div>
        {/* <!-- /.navbar-collapse --> */}
        <div className="navbar-other w-100 d-flex ms-auto">
          <ul className="navbar-nav flex-row align-items-center ms-auto">{search ? <li className="nav-item" onClick={Click}><a id="nav-link" className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search"><i className="uil "><BiSearch /></i></a></li> : <div class="widget"><form class="search"><div class="form-floating mb-0"><input id="search-form" type="text" class="form-control" placeholder="Search" /><label htmlFor="search-form">Search <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path><path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"></path></svg></label></div></form></div>}

            <li className="nav-item d-none d-md-block">
              <a href="/signin" className="btn btn-sm btn-white rounded-pill">Write</a>
            </li>
            <li className="nav-item d-lg-none">
              <button className="hamburger offcanvas-nav-btn" onClick={openNav}><span></span></button>
            </li>
          </ul>
          {/* <!-- /.navbar-nav --> */}
        </div>
        {/* <!-- /.navbar-other --> */}
      </div>
      {/* <!-- /.container --> */}
    </nav>

  )
}

export default NavBar