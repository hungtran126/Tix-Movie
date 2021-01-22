import React from 'react';
import logo from '../../img/web-logo.png';
import { Link } from 'react-router-dom'

export default function SidebarAdmin() {
    return (
        <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
            <div className="scrollbar-inner">
                {/* Brand */}
                <div className="sidenav-header align-items-center mb-3">
                    <img src={logo} width="100" />
                </div>
                <div className="navbar-inner">
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                        {/* Nav items */}
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/admin/dashboard" >
                                    <i className="ni ni-chart-bar-32 text-primary" />
                                    <span className="nav-link-text">Thống kê người dùng</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/movie">
                                    <i className="ni ni-folder-17 text-orange" />
                                    <span className="nav-link-text">Thống kê phim</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/manage">
                                    <i className="ni ni-money-coins text-primary" />
                                    <span className="nav-link-text">Thống kê doanh thu</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/bookhistory">
                                    <i className="ni ni-books text-yellow" />
                                    <span className="nav-link-text">Lịch sử đặt vé</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/topbook">
                                    <i className="ni ni-trophy text-default" />
                                    <span className="nav-link-text">Top phim được đặt vé nhiều nhất</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
