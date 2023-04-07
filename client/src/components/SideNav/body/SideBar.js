import React from 'react'
import { CiSettings } from 'react-icons/ci'
import { RiSettings2Fill, RiContactsBook2Fill, RiBookFill, RiPagesFill, RiSettingsFill, RiImageFill, RiUser2Fill, RiUserFill } from 'react-icons/ri'
const SideBar = () => {
    return (
        <div className="side-menu flex-lg-column me-lg-1 ms-lg-0" id='side-bar' style={{
            marginTop: "5%", position: "fixed"
        }}>

            <div className="navbar-brand-box">
                <a href="https://themesbrand.com/chatvia/layouts/index.html" className="logo logo-dark">
                    <span className="logo-sm">
                        <img src={require("../img/logo.svg")} alt="" height="30" />
                    </span>
                </a>

                <a href="https://themesbrand.com/chatvia/layouts/index.html" className="logo logo-light">
                    <span className="logo-sm">
                        <img src={require("../img/logo.svg")} alt="" height="30" />
                    </span>
                </a>
            </div>

            <div className="flex-lg-column my-auto">
                <ul className="nav nav-pills side-menu-nav justify-content-center" role="tablist">
                    <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Profile">
                        <a className="nav-link" id="pills-user-tab" data-bs-toggle="pill" href="https://themesbrand.com/chatvia/layouts/dark.html#pills-user" role="tab">
                            <RiUserFill />
                        </a>
                    </li>
                    <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Chats">
                        <a className="nav-link active" id="pills-chat-tab" data-bs-toggle="pill" href="https://themesbrand.com/chatvia/layouts/dark.html#pills-chat" role="tab">
                            <RiImageFill />
                        </a>
                    </li>
                    <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Groups">
                        <a className="nav-link" id="pills-groups-tab" data-bs-toggle="pill" href="https://themesbrand.com/chatvia/layouts/dark.html#pills-groups" role="tab">
                            <i className="ri-group-line"></i>
                        </a>
                    </li>
                    <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Contacts">
                        <a className="nav-link" id="pills-contacts-tab" data-bs-toggle="pill" href="https://themesbrand.com/chatvia/layouts/dark.html#pills-contacts" role="tab">
                            <RiPagesFill />
                        </a>
                    </li>
                    <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Settings">
                        <a className="nav-link" id="pills-setting-tab" data-bs-toggle="pill" href="https://themesbrand.com/chatvia/layouts/dark.html#pills-setting" role="tab">
                            <RiSettingsFill />
                        </a>
                    </li>
                    <li className="nav-item dropdown profile-user-dropdown d-inline-block d-lg-none">
                        <a className="nav-link dropdown-toggle" href="https://themesbrand.com/chatvia/layouts/dark.html#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={require("../img/avatar-1.jpg")} alt="" className="profile-user rounded-circle" />
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="https://themesbrand.com/chatvia/layouts/dark.html#">Profile <i className="ri-profile-line float-end text-muted"></i></a>
                            <a className="dropdown-item" href="https://themesbrand.com/chatvia/layouts/dark.html#">Setting  </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="https://themesbrand.com/chatvia/layouts/dark.html#">Log out <i className="ri-logout-circle-r-line float-end text-muted"></i></a>
                        </div>
                    </li>
                </ul>
            </div>


            <div className="flex-lg-column d-none d-lg-block">
                <ul className="nav side-menu-nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link light-dark-mode" href="https://themesbrand.com/chatvia/layouts/dark.html#" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="right" title="" data-bs-original-title="Dark / Light Mode">
                            <i className="ri-sun-line theme-mode-icon"></i>
                        </a>
                    </li>

                    <li className="nav-item btn-group dropup profile-user-dropdown">
                        <a className="nav-link dropdown-toggle" href="https://themesbrand.com/chatvia/layouts/dark.html#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={require("../img/avatar-1.jpg")} alt="" className="profile-user rounded-circle" />
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="https://themesbrand.com/chatvia/layouts/dark.html#">Profile <i className="ri-profile-line float-end text-muted"></i></a>
                            <a className="dropdown-item" href="https://themesbrand.com/chatvia/layouts/dark.html#">Setting <i className="ri-settings-3-line float-end text-muted"></i></a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="https://themesbrand.com/chatvia/layouts/auth-login.html">Log out <i className="ri-logout-circle-r-line float-end text-muted"></i></a>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default SideBar