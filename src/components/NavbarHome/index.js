import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import avatar from '../../img/avatar.png';
import logo from '../../img/web-logo.png';
import location from '../../img/location-header.png';

function NavbarHome() {

    const scrollToId = (id) => {
        let element = document.getElementById(id);
        if(element){
            element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
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
                            <p className="nav-link" style={{cursor: "pointer"}} onClick={() => scrollToId("calendar")}>Lịch Chiếu <span className="sr-only">(current)</span></p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link" style={{cursor: "pointer"}} onClick={() => scrollToId("address")}>Cụm rạp</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link" style={{cursor: "pointer"}} onClick={() => scrollToId("news")}>Tin tức</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link" style={{cursor: "pointer"}} onClick={() => scrollToId("app")}>Ứng dụng</p>
                        </li>
                    </ul>
                    <div className="navbar-text">
                        <div className="login d-inline">
                            <img src={avatar} className="d-inline" />
                            <Link to="/login" className="d-inline">Đăng nhập</Link>
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

export default NavbarHome;
