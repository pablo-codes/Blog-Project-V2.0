import React from 'react'
import { BsDribbble, BsFacebook, BsTwitter, BsScissors, BsWhatsapp, BsInstagram } from 'react-icons/bs'

const func = () => {
    return (
        // <aside className="col-lg-4 sidebar mt-11 mt-lg-6">
        //     <div className="widget">
        //         <form className="search">

        //             <div className="form-floating mb-0">
        //                 <input id="search-form" type="text" className="form-control" placeholder="Search" />
        //                 <label htmlFor="search-form">Search</label>
        //             </div>
        //         </form>
        //         {/* <!-- /.search-form --> */}
        //     </div>
        //     {/* <!-- /.widget --> */}
        //     <div className="widget">
        //         <h4 className="widget-title mb-3">About Us</h4>
        //         <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.</p>
        //         <nav className="nav social">
        //             <a href="#"><i className="uil uil-twitter"></i></a>
        //             <a href="#"><i className="uil uil-facebook-f"></i></a>
        //             <a href="#"><i className="uil uil-dribbble"></i></a>
        //             <a href="#"><i className="uil uil-instagram"></i></a>
        //             <a href="#"><i className="uil uil-youtube"></i></a>
        //         </nav>
        //         {/* <!-- /.social --> */}
        //     </div>
        //     {/* <!-- /.widget --> */}
        //     <div className="widget">
        //         <h4 className="widget-title mb-3">Popular Posts</h4>
        //         <ul className="image-list">
        //             <li>
        //                 <figure className="rounded"><a href="https://sandbox.elemisthemes.com/blog-post.html"><img src={require("../../images/static/a1.jpg")} alt="" /></a></figure>
        //                 <div className="post-content">
        //                     <h6 className="mb-2"> <a className="link-dark" href="https://sandbox.elemisthemes.com/blog-post.html">Magna Mollis Ultricies</a> </h6>
        //                     <ul className="post-meta">
        //                         <li className="post-date"><i className="uil uil-calendar-alt"></i><span>26 Mar 2022</span></li>
        //                         <li className="post-comments"><a href="#"><i className="uil uil-comment"></i>3</a></li>
        //                     </ul>
        //                     {/* <!-- /.post-meta --> */}
        //                 </div>
        //             </li>
        //             <li>
        //                 <figure className="rounded"> <a href="https://sandbox.elemisthemes.com/blog-post.html"><img src={require("../../images/static/a2.jpg")} alt="" /></a></figure>
        //                 <div className="post-content">
        //                     <h6 className="mb-2"> <a className="link-dark" href="https://sandbox.elemisthemes.com/blog-post.html">Ornare Nullam Risus</a> </h6>
        //                     <ul className="post-meta">
        //                         <li className="post-date"><i className="uil uil-calendar-alt"></i><span>16 Feb 2022</span></li>
        //                         <li className="post-comments"><a href="#"><i className="uil uil-comment"></i>6</a></li>
        //                     </ul>
        //                     {/* <!-- /.post-meta --> */}
        //                 </div>
        //             </li>
        //             <li>
        //                 <figure className="rounded"><a href="https://sandbox.elemisthemes.com/blog-post.html"><img src={require("../../images/static/a3.jpg")} alt="" /></a></figure>
        //                 <div className="post-content">
        //                     <h6 className="mb-2"> <a className="link-dark" href="https://sandbox.elemisthemes.com/blog-post.html">Euismod Nullam Fusce</a> </h6>
        //                     <ul className="post-meta">
        //                         <li className="post-date"><i className="uil uil-calendar-alt"></i><span>8 Jan 2022</span></li>
        //                         <li className="post-comments"><a href="#"><i className="uil uil-comment"></i>5</a></li>
        //                     </ul>
        //                     {/* <!-- /.post-meta --> */}
        //                 </div>
        //             </li>
        //         </ul>
        //         {/* <!-- /.image-list --> */}
        //     </div>
        //     {/* <!-- /.widget --> */}
        //     <div className="widget">
        //         <h4 className="widget-title mb-3">Categories</h4>
        //         <ul className="unordered-list bullet-primary text-reset">
        //             <li><a href="#">Teamwork (21)</a></li>
        //             <li><a href="#">Ideas (19)</a></li>
        //             <li><a href="#">Workspace (16)</a></li>
        //             <li><a href="#">Coding (7)</a></li>
        //             <li><a href="#">Meeting (12)</a></li>
        //             <li><a href="#">Business Tips (14)</a></li>
        //         </ul>
        //     </div>
        //     {/* <!-- /.widget --> */}
        //     <div className="widget">
        //         <h4 className="widget-title mb-3">Tags</h4>
        //         <ul className="list-unstyled tag-list">
        //             <li><a href="#" className="btn btn-soft-ash btn-sm rounded-pill">Still Life</a></li>
        //             <li><a href="#" className="btn btn-soft-ash btn-sm rounded-pill">Urban</a></li>
        //             <li><a href="#" className="btn btn-soft-ash btn-sm rounded-pill">Nature</a></li>
        //             <li><a href="#" className="btn btn-soft-ash btn-sm rounded-pill">Landscape</a></li>
        //             <li><a href="#" className="btn btn-soft-ash btn-sm rounded-pill">Macro</a></li>
        //             <li><a href="#" className="btn btn-soft-ash btn-sm rounded-pill">Fun</a></li>
        //             <li><a href="#" className="btn btn-soft-ash btn-sm rounded-pill">Workshop</a></li>
        //             <li><a href="#" className="btn btn-soft-ash btn-sm rounded-pill">Photography</a></li>
        //         </ul>
        //     </div>
        //     {/* <!-- /.widget --> */}
        //     <div className="widget">
        //         <h4 className="widget-title mb-3">Archive</h4>
        //         <ul className="unordered-list bullet-primary text-reset">
        //             <li><a href="#">February 2019</a></li>
        //             <li><a href="#">January 2019</a></li>
        //             <li><a href="#">December 2018</a></li>
        //             <li><a href="#">November 2018</a></li>
        //             <li><a href="#">October 2018</a></li>
        //         </ul>
        //     </div>
        //     {/* <!-- /.widget --> */}
        // </aside>

        <div className="item-inner" style={{ width: "50%" }}>
            <div className="card" style={{ backgroundColor: "black" }}>
                <div className="card-body">
                    <img className="rounded-circle w-15 mb-4" src={require("../../images/static/waya.jpg")} srcSet="./assets/img/avatars/te1@2x.jpg 2x" alt='' />
                    <div style={{ position: "relative", left: "33%", display: "inline", width: "20%" }}><img className="rounded-circle w-15 " src={require("../../images/static/shit.jpeg")} srcSet="./assets/img/avatars/te1@2x.jpg 2x" alt='' />
                        <h4 className="mb-1" style={{ color: "gold", fontStyle: "italic", fontFamily: "serif", display: "flex", position: "relative", left: "5%", clear: "left" }}>waya made it</h4></div>

                    <div className="meta mb-2" >Designs and makes all kinds of outfits and wears</div>
                    <p className="mb-2" style={{ color: "gold", fontStyle: "italic", fontFamily: "san-serif", }}>...Simply the best</p>
                    <nav className="nav social mb-0">
                        <a href="http://twitter.com"><i className="uil " style={{ color: "gold" }}><BsInstagram color='pink' /> Waya_made_it</i></a>
                        <a href="http://facebook.com"><i className="uil " style={{ color: "gold" }}><BsWhatsapp color='green' /> +234 812 054 5793</i></a>
                    </nav>
                    {/* <!-- /.social --> */}
                </div>
                {/* <!--/.card-body --> */}
            </div>
            {/* <!-- /.card --> */}
        </div>


    )
}

export default func