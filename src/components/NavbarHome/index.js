import React from 'react';
import { NavLink, Link, Redirect } from 'react-router-dom';
import avatar from '../../img/avatar.png';
import logo from '../../img/web-logo.png';
import location from '../../img/location-header.png';
import { connect } from 'react-redux';
import { actLogout } from '../../containers/LoginTemplate/modules/action';

function NavbarHome(props) {

    const scrollToId = (id) => {
        let element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        }
    }

    const getName = () => {
        if (localStorage.getItem("user")) {
            let user = JSON.parse(localStorage.getItem("user"));
            return user.hoTen;
        }
    }

    const showAdminPage = () => {
        let user = JSON.parse(localStorage.getItem("user"));
        if (user.maLoaiNguoiDung === "QuanTri") {
            return (
                <Link to="/admin" className="dropdown-item">Vào trang admin</Link>
            );
        }
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">
                    <img src={logo} />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <p className="nav-link" style={{ cursor: "pointer" }} onClick={() => scrollToId("calendar")}>Lịch Chiếu <span className="sr-only">(current)</span></p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link" style={{ cursor: "pointer" }} onClick={() => scrollToId("address")}>Cụm rạp</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link" style={{ cursor: "pointer" }} onClick={() => scrollToId("news")}>Tin tức</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link" style={{ cursor: "pointer" }} onClick={() => scrollToId("app")}>Ứng dụng</p>
                        </li>
                    </ul>
                    <div className="navbar-text">
                        <div className="login d-inline">
                            <img src={avatar} className="d-inline" />
                            {localStorage.getItem("user") ? <div className="dropdown open d-inline">
                                <button className="btn btn-light dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    {getName()}
                                </button>
                                <div className="dropdown-menu mt-1" aria-labelledby="triggerId">
                                    {showAdminPage()}
                                    <button className="dropdown-item">Thông tin chi tiết</button>
                                    <button className="dropdown-item" onClick={() => props.getLogout()}>Đăng xuất</button>
                                </div>
                            </div> : <Link to="/login" className="d-inline">Đăng nhập</Link>}
                        </div>
                        <div className="location d-inline">
                            <div className="cbx__location d-inline">
                                <span className="falo"><img src={location} /></span>
                                <div className="dropdown">
                                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Hồ Chí Minh
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a className="dropdown-item" href="#">Hồ Chí Minh</a>
                                        <a className="dropdown-item" href="#">Hà Nội</a>
                                        <a className="dropdown-item" href="#">Hải Phòng</a>
                                        <a className="dropdown-item" href="#">Đà Nẵng</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLogout: () => {
            dispatch(actLogout());
        }
    }
}

export default connect(null, mapDispatchToProps)(NavbarHome);
