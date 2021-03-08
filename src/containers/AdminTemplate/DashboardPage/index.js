import Pagination from 'components/Pagination';
import TitleAdmin from 'components/TitleAdmin';
import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { actManageUserApi, actCreateUserApi, actDeleteUserApi, actGetDataUser, actUserPaginate, actUserSearch } from './modules/action';
import Modal from '@material-ui/core/Modal';
import Loading from '../../../components/Loading/index';
import { getInformationPagination } from 'components/Pagination/modules/action';
import { actMangeMoviePaginate } from '../MoviePage/modules/actions';
import { makeStyles, TextField } from '@material-ui/core';
import { Popconfirm } from 'antd';
import CreateUser from './CreateUser';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "800px",
        height: '420px',
        overflow: 'auto',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
    },
}));

function DashboardPage(props) {

    const classes = useStyles();
    const [name, setName] = React.useState("");
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        props.getAllUser();
        props.getInformationPagination(10, props.dataUser ? props.dataUser.length : 60);
    }, [])

    const handleOpen = (name, data) => {
        props.getEditUser(data);
        setName(name);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const cancelDeleteUser = (e) => {
        console.log('delete user ', e);
        // renderTable();
    }

    const handleOnChange = (event) => {
        // setSearchTerm(event.target.value);
    }

    const renderTable = () => {
        if (props.dataUser && props.dataUser.length > 0) {
            const indexOfLastUser = props.currentPage * props.info.productsPerPage;
            const indexOfFirstUser = indexOfLastUser - props.info.productsPerPage;
            const data = props.dataUser.slice(indexOfFirstUser, indexOfLastUser);
            let { userList, keyword } = props;
            userList = data.filter(user => user.taiKhoan.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
            return (
                <table className="table align-items-center table-flush">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col" className="sort">Tài khoản</th>
                            <th scope="col" className="sort">Họ tên</th>
                            <th scope="col" className="sort">Email</th>
                            <th scope="col" className="sort" >Số điện thoại</th>
                            <th scope="col" className="sort">Mật khẩu</th>
                            <th scope="col" className="sort">Mã loại người dùng</th>
                            <th scope="col" className="sort">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="list">
                        {userList.map((user) => {
                            return (
                                <tr key={user.taiKhoan}>
                                    <td>
                                        <div>
                                            {user.taiKhoan}
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            {user.hoTen}
                                        </div>
                                    </td>
                                    <td>
                                        <div style={{ width: '150px' }}>
                                            {user.email}
                                        </div>
                                    </td>
                                    <td>
                                        <div style={{ width: '50px' }}>
                                            {user.soDt}
                                        </div>
                                    </td>
                                    <td>
                                        <div style={{ width: '50px' }}>
                                            {user.matKhau}
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            {user.maLoaiNguoiDung === 'QuanTri' ? 'Quản trị' : 'Khách hàng'}
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <button
                                            className="btn btn-md btn-neutral"
                                            type="button"
                                            onClick={() => handleOpen("Chỉnh sửa thông tin", user)}
                                        >
                                            Chỉnh sửa
                                        </button>
                                        <Popconfirm
                                            title="Bạn có muốn xóa nguời dùng này?"
                                            onConfirm={() => props.getDeleteUser(user.taiKhoan)}
                                            onCancel={cancelDeleteUser}
                                            okText="Có"
                                            cancelText="Không"
                                        >
                                            <button className="btn btn-md btn-danger" type="button">Xóa</button>
                                        </Popconfirm>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            );
        }
    }

    return (
        <>
            <div className="header bg-primary pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center py-4">
                            <div className="col-lg-8 col-8">
                                <h6 className="h2 text-white d-inline-block mb-0">
                                    <TitleAdmin />
                                </h6>
                                <nav aria-label="breadcrumb" className="d-none d-md-inline-block ml-md-4">
                                    <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                        <li className="breadcrumb-item"><Link to="/admin"><i className="fas fa-home" /></Link></li>
                                        <li className="breadcrumb-item">
                                            <Link to="#">
                                                <TitleAdmin />
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Default</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        {/* Card stats */}
                    </div>
                </div>
            </div>
            <div className="container-fluid mt--6">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card bg-white">
                            <div className="card-header bg-transparent">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="text-dark text-uppercase ls-1 mb-1" style={{ fontSize: '20px' }}>Danh sách người dùng</h6>
                                    </div>
                                    <form className="navbar-search navbar-search-light form-inline" id="navbar-search-main" onChange={(e) => props.searchUser(e.target.value)}>
                                        <div className="form-group mb-0">
                                            <div className="input-group input-group-alternative input-group-merge">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fas fa-search" /></span>
                                                </div>
                                                <input className="form-control" placeholder="Search" type="text" />
                                            </div>
                                        </div>
                                        <button type="button" className="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </form>
                                    <div className="col-lg-2 col-2 text-right">
                                        <a href="#" className="btn btn-sm btn-neutral" onClick={() => { handleOpen('Tạo người dùng mới') }}>Tạo người dùng mới</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body table-responsive">
                                {props.loading ? <Loading /> : ""}
                                {renderTable()}
                            </div>
                            <div className="card-footer py-4">
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className="d-flex align-items-center"
            >
                <div className={classes.paper + " mx-auto"}>
                    <h2 id="simple-modal-title" className="text-center">{name}</h2>
                    <CreateUser />
                </div>
            </Modal>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        dataUser: state.manageUserReducer.data,
        loading: state.manageUserReducer.loading,
        err: state.manageUserReducer.err,
        userList: state.manageUserReducer.userList,
        keyword: state.manageUserReducer.keyword,
        info: state.paginationReducer.info,
        currentPage: state.paginationReducer.paginate,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUser: () => {
            dispatch(actManageUserApi());
        },
        getInformationPagination: (productsPerPage, totalProducts) => {
            dispatch(getInformationPagination(productsPerPage, totalProducts));
        },
        getManageMoviePaginate: (data) => {
            dispatch(actMangeMoviePaginate(data));
        },
        getDeleteUser: (id) => {
            dispatch(actDeleteUserApi(id));
        },
        getEditUser: (data) => {
            dispatch(actGetDataUser(data));
        },
        searchUser: (keyword) => {
            dispatch(actUserSearch(keyword));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
