import React, { useState } from 'react'
import { BiCalendarAlt, BiComment, BiHeart, BiUser } from 'react-icons/bi'
import Popup from 'reactjs-popup'
import './Create.css'

const Create = () => {
    const today = new Date()
    const getDate = today.toDateString()
    const initialHead = {
        title: '',
        category: '',
        username: '',
        image: '',
    }
    const [Head, SetHead] = useState(initialHead)
    return (
        <div><section id='images' className="wrapper image-wrapper bg-image bg-overlay text-white"   >
            < div className="container pt-18 pb-15 pt-md-20 pb-md-19 text-center" >
                <div className="row">
                    <div className="col-md-10 col-xl-8 mx-auto">
                        <div className="post-header">
                            <div className="post-category text-line text-white">
                                <label htmlFor='files'><div class="icon-div">
                                    <div className="icon">
                                        + pic
                                    </div>
                                </div></label>
                                <input type='file' id='files' name='files' style={{ display: 'none' }} />
                                <input value={Head.category} />
                            </div>
                            {/* <!-- /.post-category --> */}

                            <h1 className="display-1 mb-4 text-white">
                                <input value={Head.title} /></h1>
                            <ul className="post-meta text-white">
                                <li className="post-date"><i className="uil "><BiCalendarAlt /></i><span>{getDate}</span></li>
                                <li className="post-author"> <span>{Head.username}</span> </li>
                                <li className="post-comments"><i className="uil"><BiComment /></i><a href="https://sandbox.elemisthemes.com/blog-post2.html#" className="text-reset">3<span> Comments</span></a></li>
                                <li className="post-likes"><i className="uil"><BiHeart /></i><a href="https://sandbox.elemisthemes.com/blog-post2.html#" className="text-reset">3<span> Likes</span></a></li>
                            </ul>
                            {/* <!-- /.post-meta --> */}
                        </div>
                        {/* <!-- /.post-header --> */}
                    </div>
                    {/* <!-- /column --> */}
                </div>
                {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.container --> */}
        </section >
            <Popup trigger={<div style={{ position: 'relative', left: '50%' }} class="icon-div">
                <div className="icon">
                    +
                </div>
            </div>} modal style>
                <ul style={{ backgroundColor: 'black', color: 'white', borderRadius: "10%" }}>
                    <Popup
                        trigger={<li className=''>Header</li>}
                        position="right top"
                        on="hover"
                        closeOnDocumentClick
                        // mouseLeaveDelay={300}
                        // mouseEnterDelay={0}
                        contentStyle={{ padding: '0px', border: 'none' }}
                        arrow={false}
                    >
                        <span className="tooltiptext" style={{ backgroundColor: 'black', color: 'white', marginLeft: "15%" }}>
                            <li className="menu-item"> H1</li>
                            <li className="menu-item"> H2</li>
                            <li className="menu-item"> H3</li>
                        </span>
                    </Popup>
                    <Popup
                        trigger={<li className=''>Paragraph</li>}
                        position="right top"
                        on="hover"
                        closeOnDocumentClick
                        // mouseLeaveDelay={300}
                        // mouseEnterDelay={0}
                        contentStyle={{ padding: '0px', border: 'none' }}
                        arrow={false}
                    >
                        <span className="tooltiptext" style={{ backgroundColor: 'black', color: 'white', marginLeft: "15%" }}>
                            <li className="menu-item"> P1</li>
                            <li className="menu-item"> P2</li>
                            <li className="menu-item"> P3</li>
                        </span>
                    </Popup>
                    <Popup
                        trigger={<li className=''>Image</li>}
                        position="right top"
                        on="hover"
                        closeOnDocumentClick
                        // mouseLeaveDelay={300}
                        // mouseEnterDelay={0}
                        contentStyle={{ padding: '0px', border: 'none' }}
                        arrow={false}
                    >
                        <span className="tooltiptext" style={{ backgroundColor: 'black', color: 'white', marginLeft: "15%" }}>
                            <li className="menu-item"> I1</li>
                            <li className="menu-item"> I2</li>
                            <li className="menu-item"> I3</li>
                        </span>
                    </Popup>


                </ul>
            </Popup>

        </div>
    )
}

export default Create