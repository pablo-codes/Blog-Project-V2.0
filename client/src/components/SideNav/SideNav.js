import React from 'react'
import ProductWrap from '../Products/ProductWrap'
import SideBar from './body/SideBar'
import SideBody from './body/SideBody'
import './css/app.min.css'
import './css/icons.min.css'
import './css/owl.carousel.min.css'
// import './css/bootstrap.min.css'
const SideNav = () => {
    return (
        <body data-layout-mode='white'>
            <div className='layout-wrapper d-lg-flex'>
                <SideBar />
                <SideBody />

            </div>
        </body>
    )
}

export default SideNav