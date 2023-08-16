import React, { useState, useEffect } from 'react'
import { BiCalendarAlt, BiComment, BiHeart, BiChevronLeft, BiImage } from 'react-icons/bi'
import { RiLinksLine } from 'react-icons/ri'
import { BsYoutube } from 'react-icons/bs'
import './Create.css'
import Input from './Input/Input'
import InputI from './Input/InputI'


const Create = () => {
    {/* eslint-disable jsx-a11y/anchor-is-valid */ }
    const today = new Date()
    const getDate = today.toDateString()

    const [value, setValue] = useState('');
    const [height, setHeight] = useState(100)

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleTextHighlight = (event) => {
        const selectedText = event.target.value.substring(
            event.target.selectionStart,
            event.target.selectionEnd
        );
        console.log('Highlighted text:', selectedText);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // event.preventDefault();


            const newheight = height + 5
            setHeight(newheight)
            // event.target.style.height = `${newheight}px`;
        }
        else if (event.key === 'Backspace') {
            const newheight = height - 5
            setHeight(newheight)
        }
    }

    const initialHead = {
        title: '',
        category: '',
        username: '',
        image: '',
    }

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    const [showImages, setImages] = useState(false);

    const handleCloseImages = () => {
        setImages(false);
    };

    const handleShowImages = () => {
        handleCloseModal()
        setImages(true);
    };

    // const handleImageChange = event => {


    //     const pic = event.target.files
    //     if (pic.length == 1) {
    //         setDetails({ ...Details, ['files']: event.target.files[0] })

    //         const uri = URL.createObjectURL(event.target.files[0])

    //         setfile(uri)

    //     }
    // };
    const [inputNam, setInputNam] = useState('')
    const [inputNum, setInputNum] = useState('')



    const [Head, SetHead] = useState(initialHead)
    return (
        <div><section id='images' className="wrapper image-wrapper bg-image bg-overlay text-white"   >
            < div className="container pt-18 pb-15 pt-md-20 pb-md-19 text-center" >
                <div className="row">
                    <div className="col-md-10 col-xl-8 mx-auto">
                        <div className="post-header">
                            <div className="post-category text-line text-white">
                                <label htmlFor='files'><button class="btn btn-primary btn-circle">
                                    <span class="btn-icon">+pic</span>
                                </button></label>
                                <input type='file' id='files' name='files' style={{ display: 'none' }} />
                                <input defaultValue={Head.category} />
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



            {showModal && (
                <div className="modal custom-modal fade show" tabIndex="-1" role="dialog" style={{ display: "block" }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content bg-white">
                            <div className="modal-header">
                            </div>
                            <div className="modal-body">
                                <p className='text' onClick={() => {
                                    setValue(value + "(Link url)/[Placeholder]")
                                    handleCloseModal()
                                }}><RiLinksLine /> LINKS</p>
                                <p className='text' onClick={
                                    handleShowImages
                                }><BiImage /> IMAGES</p>

                                <p className='text'><BsYoutube /> VIDEOS</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showImages && (
                <div className="modal custom-modal fade show" tabIndex="-1" role="dialog" style={{ display: "block" }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content bg-white">
                            <div className="modal-header">
                            </div>
                            <div className="modal-body">
                                <div className="grid-img" style={{ border: "5px inset" }}>
                                    <p style={{
                                        width: '10rem', height: `6.6rem`, minHeight: '1em', fontSize: '22px',
                                        resize: 'none', background: "border-box", border: 'none', outline: 'none', overflowy: 'scroll', whiteSpace: 'pre-wrap'
                                    }} className="input-textarea" >Text left, Image right</p>
                                    <div className="image-container">

                                        <div className="icon-div" style={{ width: '11rem', height: '6.6rem', border: '2px dotted', display: 'flex', }}>


                                            <div className="icon" style={{ width: "2rem", height: "2rem", alignSelf: 'center', fontSize: '1rem' }}>
                                                +
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-img" style={{ border: "5px inset" }}>
                                    <div className="image-container">

                                        <div className="icon-div" style={{ width: '11rem', height: '6.6rem', border: '2px dotted', display: 'flex', }}>


                                            <div className="icon" style={{ width: "2rem", height: "2rem", alignSelf: 'center', fontSize: '1rem' }}>
                                                +
                                            </div>
                                        </div>
                                    </div>
                                    <p style={{
                                        width: '10rem', height: `6.6rem`, minHeight: '1em', fontSize: '22px',
                                        resize: 'none', background: "border-box", border: 'none', outline: 'none', overflowy: 'scroll', whiteSpace: 'pre-wrap'
                                    }} className="input-textarea" placeholder="Enter text">Image left , Text right</p>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseImages}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="row align-items-center" style={{ paddingLeft: "0", marginLeft: "15px", paddingRight: "0", position: "absolute", width: "100%" }}>
                <div className="col-sm-1" style={{ paddingLeft: "0", paddingRight: "0", width: "5.3%" }}>
                    <div className='d-flex align-items-center justify-content-start'>
                        <button onClick={handleShowModal} className="btn btn-primary btn-circle" style={{ width: "4rem", height: "4rem" }}>
                            <span className="btn-icon">+</span>
                        </button>
                    </div>
                </div>
                <div className="col-sm-11" style={{
                    overflow: 'hidden',
                }}> <div className="grid-img">
                        <textarea style={{
                            width: '20rem', height: `20rem`, minHeight: '1em', fontSize: '22px',
                            resize: 'none', background: "border-box", border: 'none', outline: 'none', overflowy: 'scroll', whiteSpace: 'pre-wrap'
                        }} className="input-textarea" placeholder="Enter text"></textarea>
                        <div className="image-container">
                            <label htmlFor='inpimg'><div className="icon-div" style={{ width: '30rem', height: '20rem', border: '5px dotted', display: 'flex', padding: '0 7rem', marginLeft: '7.5%' }}>


                                <div className="icon" style={{ width: "4rem", height: "4rem", alignSelf: 'center', fontSize: '1rem' }}>
                                    + pic
                                </div>
                            </div></label>
                            <input id='inpimg' type='file' style={{ display: 'none' }}></input>
                        </div>
                    </div>
                    <textarea
                        style={{
                            width: '100%',
                            height: `${height}px`,
                            minHeight: '1em',
                            fontSize: '22px',
                            resize: 'none',
                            background: "border-box",
                            border: 'none',
                            outline: 'none', overflowy: 'scroll', whiteSpace: 'pre-wrap',
                        }} value={value} onChange={handleChange} onMouseUp={handleTextHighlight} onKeyDown={handleKeyDown} placeholder="Type here..." />
                    <style>
                        {`
          textarea::-webkit-scrollbar {
            width: 5px;
          }

          textarea::-webkit-scrollbar-track {
            background-color: #f1f1f1;
          }

          textarea::-webkit-scrollbar-thumb {
            background-color: blue;
          }
        `}
                    </style>
                </div>

            </div>
            <Input inputnam={inputNam} inputnum={inputNum} />


        </div>
    )
}

export default Create