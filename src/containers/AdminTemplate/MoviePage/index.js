import TitleAdmin from 'components/TitleAdmin';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actDeleteMovieApi, actGetDataMovie, actManageMovieApi, actMangeMoviePaginate } from './modules/actions';
import Loading from '../../../components/Loading/index';
import Pagination from 'components/Pagination';
import Modal from '@material-ui/core/Modal';
import { getInformationPagination } from 'components/Pagination/modules/action';
import { makeStyles } from '@material-ui/core';
import { Popconfirm } from 'antd';
import CreateMovie from './CreateMovie';

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "800px",
        height: '420px',
        overflow: 'auto',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
    },
}));

function MoviePage(props) {

    const classes = useStyles();
    const [title, setTitle] = React.useState("");
    const [open, setOpen] = React.useState(false);
    
    useEffect(() => {
        props.getAllMovie();
        props.getInformationPagination(10, props.dataMovie ? props.dataMovie.length : 60);
    }, []);

    const handleOpen = (title, data) => {
        props.getEditMovie(data);
        setTitle(title);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const cancelDeleteMovie = (e) => {
        console.log("deleteMovie s", e);
    }

    const renderTable = () => {
        if (props.dataMovie && props.dataMovie.length > 0) {
            const indexOfLastProduct = props.currentPage * props.info.productsPerPage;
            const indexOfFirstProduct = indexOfLastProduct - props.info.productsPerPage;
            const data = props.dataMovie.slice(indexOfFirstProduct, indexOfLastProduct);
            return data.map((movie) => {
                return (
                    <table className="table align-items-center table-flush" key={movie.maPhim}>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col" className="sort" data-sort="movie">Tên phim</th>
                                <th scope="col" className="sort" data-sort="picture">Hình ảnh</th>
                                <th scope="col" style={{ width: "150px" }} className="sort" data-sort="description">Mô tả</th>
                                <th scope="col">Ngày khởi chiếu</th>
                                <th scope="col" className="sort" data-sort="rate">Đánh giá</th>
                                <th scope="col">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody className="list">
                            <tr>
                                <th scope="row" style={{ width: "200px", whiteSpace: "pre-wrap" }}>
                                    <div className="media align-items-center">
                                        <div className="media-body">
                                            <span className="name mb-0 text-sm">{movie.tenPhim}</span>
                                        </div>
                                    </div>
                                </th>
                                <td className="budget">
                                    <div className="avatar-group">
                                        <img src={movie.hinhAnh} width="80" />
                                    </div>
                                </td>
                                <td style={{ width: "250px", whiteSpace: "pre-wrap" }}>
                                    <p>{movie.moTa}</p>
                                </td>
                                <td>
                                    <p>{new Date(movie.ngayKhoiChieu).toLocaleString()}</p>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <span className="completion mr-2">{movie.danhGia} điểm </span>
                                        <div>
                                            <div className="progress">
                                                <div className="progress-bar bg-succes" role="progressbar" aria-valuenow={movie.danhGia} aria-valuemin={0} aria-valuemax={10} style={{ width: (movie.danhGia * 10) + '%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center">
                                    <button
                                        className="btn btn-md btn-neutral"
                                        type="button"
                                        onClick={() => handleOpen("Chỉnh sửa thông tin", movie)}
                                    >
                                        Chỉnh sửa
                                    </button>
                                    <Popconfirm
                                        title="Bạn có muốn xóa phim?"
                                        onConfirm={() => props.getDeleteMovie(movie.maPhim)}
                                        onCancel={cancelDeleteMovie}
                                        okText="Có"
                                        cancelText="Không"
                                    >
                                        <button className="btn btn-md btn-danger" type="button">Xóa</button>
                                    </Popconfirm>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )
            })
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
                            <div className="col-lg-4 col-4 text-right">
                                <button onClick={() => handleOpen("Tạo phim")} className="btn btn-sm btn-neutral">Tạo phim</button>
                                <button className="btn btn-sm btn-neutral">Lọc</button>
                            </div>
                        </div>
                        {/* Card stats */}
                    </div>
                </div>
            </div>
            <div className="container-fluid mt--6">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            {/* Card header */}
                            <div className="card-header border-0">
                                <h3 className="mb-0">Danh sách phim</h3>
                            </div>
                            <div className="table-responsive">
                                {props.loading ? <Loading /> : ""}
                                {renderTable()}
                            </div>
                            {/* Card footer */}
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
                    <h2 id="simple-modal-title" className="text-center">{title}</h2>
                    <CreateMovie />
                </div>
            </Modal>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        dataMovie: state.manageMovieReducer.data,
        loading: state.manageMovieReducer.loading,
        err: state.manageMovieReducer.err,
        info: state.paginationReducer.info,
        currentPage: state.paginationReducer.paginate,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllMovie: () => {
            dispatch(actManageMovieApi());
        },
        getInformationPagination: (productsPerPage, totalProducts) => {
            dispatch(getInformationPagination(productsPerPage, totalProducts));
        },
        getManageMoviePaginate: (data) => {
            dispatch(actMangeMoviePaginate(data));
        },
        getDeleteMovie: (maPhim) => {
            dispatch(actDeleteMovieApi(maPhim));
        },
        getEditMovie: (data) => {
            dispatch(actGetDataMovie(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
