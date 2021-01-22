import FooterAdmin from 'components/FooterAdmin';
import NavbarAdmin from 'components/NavbarAdmin';
import { actGetTitleAdmin } from 'components/NavbarAdmin/modules/action';
import SidebarAdmin from 'components/SidebarAdmin';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function LayoutAdmin(props) {
    return (
        <div id="adminPage">
            <SidebarAdmin />
            <div className="main-content" id="panel">
                {/* Topnav */}
                <NavbarAdmin />
                {props.children}
            </div>
        </div>
    )
}

function AdminTemplate({ Component, ...props }) {
    props.getTitle(props.Title);
    return (
        <Route
            {...props}
            render={(propsComponent) => {
                if (JSON.parse(localStorage.getItem("user")).maLoaiNguoiDung === "QuanTri") {
                    return (
                        <LayoutAdmin>
                            <Component {...propsComponent} Title={props.Title} />
                        </LayoutAdmin>
                    );
                } else {
                    return <Redirect to="/admin/login" />
                }
            }}
        />
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        getTitle: (title) => {
            dispatch(actGetTitleAdmin(title));
        }
    }
}

export default connect(null, mapDispatchToProps)(AdminTemplate);
