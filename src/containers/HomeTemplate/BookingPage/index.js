import Loading from 'components/Loading';
import useStyle from 'components/Style';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { actBookMovieApi, actGetInfoAddress, actGetPriceAndChair } from './modules/action';
import screen from '../../../img/screen.png';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import WeekendRoundedIcon from '@material-ui/icons/WeekendRounded';
import { Button } from 'antd';

function BookingPage(props) {
    const classes = useStyle();

    const [minutes, setMinutes] = useState(4);
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        props.fetchCheckOutMovie(props.match.params.maRap);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timer)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
            if (seconds === 0 && minutes === 0) {
                alert("Bạn đã hết phiên đặt vé!");
                window.location.reload();
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [seconds]);

    const renderListScreen = () => {
        return props.data.danhSachGhe.map((list, index) => {
            if (list.loaiGhe === "Thuong" && !list.daDat) {
                return (
                    <Checkbox
                        className="btn btn-link text-dark p-1 mb-1"
                        key={index}
                        onChange={(e) => onChangeChair(e, list)}
                        icon={<WeekendRoundedIcon style={{ fontSize: 28 }} />}
                        checkedIcon={<WeekendRoundedIcon className="text-success" style={{ fontSize: 28 }} />}
                    />
                );
            } else if (list.loaiGhe === "Vip" && !list.daDat) {
                return (
                    <Checkbox
                        className="btn btn-link p-1 text-warning mb-1"
                        key={index}
                        onChange={(e) => onChangeChair(e, list)}
                        icon={<WeekendRoundedIcon style={{ fontSize: 28 }} />}
                        checkedIcon={<WeekendRoundedIcon className="text-success" style={{ fontSize: 28 }} />}
                    />
                )
            } else {
                return (
                    <Checkbox
                        className="btn btn-link p-1 text-black-50 mb-1"
                        key={index}
                        disabled
                        icon={<WeekendRoundedIcon style={{ fontSize: 28 }} />}
                    />
                );
            }
        });
    }

    const onChangeChair = (e, data) => {
        props.getPriceAndChair(e.target.checked, data);
    }


    const renderRightCheckOut = () => {
        if (props.data) {
            return (
                <div className="row justify-content-center p-3">
                    <div className="col-lg-10 col-md-10 text-center border-bottom">
                        <h1 className="text-success">{props.price} đ</h1>
                    </div>
                    <div className="col-lg-10 col-md-10 border-bottom px-0">
                        <div className="mt-3">
                            <span className="badge badge-success py-1 px-3 mr-2">P</span><strong>{props.data.thongTinPhim.tenPhim}</strong>
                        </div>
                        <p className="m-0">{props.data.thongTinPhim.tenCumRap}</p>
                        <p className={`${classes.fontGrey}`}>
                            {props.data.thongTinPhim.ngayChieu + " - " + props.data.thongTinPhim.gioChieu + " - " + props.data.thongTinPhim.tenRap}
                        </p>
                    </div>
                    <div className="col-lg-10 col-md-10 border-bottom px-0">
                        <div className="mt-3 d-flex justify-content-between">
                            <p className={`${classes.colorRed}`}>
                                Ghế &nbsp; &nbsp;
                                {props.chair ? props.chair.map((chair, index) => {
                                return (
                                    <strong key={index}>{chair.tenGhe}, </strong>
                                )
                            }) : ""}
                            </p>
                            <h6 className="text-success">{props.price} đ</h6>
                        </div>
                    </div>
                    <div className="col-lg-10 col-md-10 px-0">
                        {renderCheckOutForm()}
                    </div>
                </div>
            );
        }
    }

    const renderCheckOutForm = () => {
        if (localStorage.getItem("user")) {
            return (
                <>
                    <FormControl fullWidth className="mt-3">
                        <TextField label="Tên tài khoản" size="small" value={JSON.parse(localStorage.getItem("user")).hoTen} />
                    </FormControl>
                </>
            );
        } else {
            return true;
        }
    }

    const onBookingMovie = (e) => {
        e.preventDefault();
        if (!props.chair) {
            return false;
        } else if (!localStorage.getItem("user")) {
            alert("Bạn cần đăng nhập để có thể đặt vé!");
            window.location.replace("/login");
        } else {
            let dsVe = [];
            props.chair.map((e) => {
                dsVe.push({
                    maGhe: e.maGhe,
                    giaVe: e.giaVe,
                });
            });
            let data = {
                maLichChieu: props.data.thongTinPhim.maLichChieu,
                danhSachVe: dsVe,
                taiKhoanNguoiDung: JSON.parse(localStorage.getItem("user")).taiKhoan,
            }
            props.getBookingMovie(data);
        }
    }


    // console.log("propsssCheckout", props);

    if (props.loading) return <Loading />
    return (
        <div id="checkOut">
            <div className="row">
                <div className={`${classes.stepCheckOut} d-flex align-items-center`}>
                    <nav className="navbar navbar-expand-lg">
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-5">
                                <li className="nav-item p-4 active">
                                    <strong>01</strong> CHỌN GHẾ & THANH TOÁN
                                </li>
                                <li className="nav-item p-4">
                                    <strong>02</strong> KẾT QUẢ ĐẶT VÉ
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                {props.data &&
                    <>
                        <div
                            className={`${classes.leftCheckOut}`}
                            style={{ backgroundImage: `url('${props.data.thongTinPhim.hinhAnh}')` }}
                        ></div>
                        <div className={`${classes.seatCheckOut}`}>
                            <div
                                className="row m-auto"
                                style={{ maxWidth: '700px' }}
                            >
                                <div className="row w-100">
                                    <div className="col-lg-9 col-md-9">
                                        <h6 className="">{props.data.thongTinPhim.tenCumRap}</h6>
                                        <p className={`${classes.fontGrey}`}>
                                            {props.data.thongTinPhim.ngayChieu + " - " + props.data.thongTinPhim.gioChieu + " - " + props.data.thongTinPhim.tenRap}
                                        </p>
                                    </div>
                                    <div className="col-lg-3 col-md-3 text-center">
                                        <p className={`${classes.fontGrey} m-0`}>thời gian giữ ghế</p>
                                        <p
                                            className={`${classes.timeCountDown}`}
                                            id="timeCountDown"
                                        >
                                            <strong>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</strong>
                                        </p>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="manHinhGhe">
                                            <div className="screen">
                                                <img className="img-fluid" src={screen} />
                                            </div>
                                            <div className="listScreen row justify-content-center">
                                                <div className="col-lg-11 col-md-11 text-center">
                                                    {renderListScreen()}
                                                </div>
                                                <div className="col-lg-8 col-md-8 mt-5 mb-5 border-top">
                                                    <div className="row justify-content-center text-center">
                                                        <div className="p-3">
                                                            <p className="m-0">
                                                                <WeekendRoundedIcon fontSize="small" />
                                                            </p>
                                                            <strong
                                                                className="m-0 text-secondary"
                                                                style={{ fontSize: '7pt' }}
                                                            >
                                                                Ghế thường
                                                            </strong>
                                                        </div>
                                                        <div className="p-3">
                                                            <p className="text-warning m-0">
                                                                <WeekendRoundedIcon fontSize="small" />
                                                            </p>
                                                            <strong
                                                                className="m-0 text-secondary"
                                                                style={{ fontSize: '7pt' }}
                                                            >
                                                                Ghế vip
                                                            </strong>
                                                        </div>
                                                        <div className="p-3">
                                                            <p className="text-success m-0">
                                                                <WeekendRoundedIcon fontSize="small" />
                                                            </p>
                                                            <strong
                                                                className="m-0 text-secondary"
                                                                style={{ fontSize: '7pt' }}
                                                            >
                                                                Ghế đang chọn
                                                            </strong>
                                                        </div>
                                                        <div className="p-3">
                                                            <p className="text-secondary m-0">
                                                                <WeekendRoundedIcon fontSize="small" />
                                                            </p>
                                                            <strong
                                                                className="m-0 text-secondary"
                                                                style={{ fontSize: '7pt' }}
                                                            >
                                                                Ghế đã có người chọn
                                                            </strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${classes.rightCheckOut}`}>
                            <form onSubmit={(e) => onBookingMovie(e)}>
                                {renderRightCheckOut()}
                                <Button
                                    className={`${classes.buyTicket}`}
                                    type="primary"
                                    htmlType="submit"
                                    disabled={props.chair.length > 0 ? false : true}
                                >
                                    Đặt vé
                                </Button>
                            </form>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.checkOutReducer.loading,
        data: state.checkOutReducer.data,
        chair: state.checkOutReducer.chair,
        price: state.checkOutReducer.price,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCheckOutMovie: (maLichChieu) => {
            dispatch(actGetInfoAddress(maLichChieu))
        },
        getPriceAndChair: (chair, price) => {
            dispatch(actGetPriceAndChair(chair, price))
        },
        getBookingMovie: (data) => {
            dispatch(actBookMovieApi(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingPage);
