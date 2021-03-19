import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actScheduleDetailApi } from './modules/action';
import { actListVincomApi } from '../../HomePage/BookingBar/modules/action';
import vincom from '../../../../img/bhd-star-vincom-thao-dien-15379553942188.jpg';
import useStyle from '../../../../components/Style/index';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Schedule(props) {
    const classes = useStyle();
    const [days, setDay] = useState('');

    useEffect(() => {
        props.fetchScheduleBranch();
        setDay(new Date("2019-01-01T10:10:00").getDay());
    }, []);

    const renderBranch = () => {
        if (props.data2) {
            return props.data2.heThongRapChieu.map((list, index) => {
                return (
                    <li
                        className={classes.li_border_bottom + " nav-item pt-2 pb-2"}
                        role="presentation"
                        key={index}
                    >
                        <a
                            className="nav-link border-0 active"
                            id="home-tab"
                            data-toggle="tab"
                            href={"#" + list.maHeThongRap}
                            role="tab" aria-controls={list.maHeThongRap} aria-selected="true"
                            onClick={() => renderDetailMovie(list.maHeThongRap, list.cumRapChieu)}
                        >
                            <div className="d-flex align-items-center">
                                <div className="mr-4 ml-2" style={{ width: '50px' }}>
                                    <img
                                        src={list.logo}
                                        style={{ width: '40px' }}
                                    />
                                </div>
                                <h6 style={{ fontWeight: 'bold' }}>
                                    {list.maHeThongRap}
                                </h6>
                            </div>
                        </a>
                    </li>
                );
            });
        }
    }
    const renderDetailMovie = (maRap, data) => {
        if (data) return props.fetchBranchDetail(data);
        if (props.data1) {
            return (
                <div
                    className="tab-pane fade show active"
                    id={maRap}
                    role="tabpanel"
                    style={{ backgroundColor: 'white', width: '100%', height: '100%' }}
                >
                    {props.data1.map((detail, index) => {
                        return (
                            <div className="col-right bg-white" key={index}>
                                <div className="border-0 d-flex align-items-start active mt-4 pt-0">
                                    <img src={vincom} width="50" />
                                    <div className="ml-2">
                                        <strong>{detail.tenCumRap}</strong>
                                        <span style={{ display: 'flex' }}>
                                            <a
                                                href={"#" + detail.maCumRap}
                                                className="text-danger font-weight-bold"
                                                data-toggle="tab"
                                                role="tab"
                                                aria-controls={detail.maCumRap} aria-selected="true"
                                            >
                                                [Bản đồ]
                                            </a>
                                        </span>
                                    </div>
                                </div>
                                <p className="mt-1 font-weight-bold">2D Digital</p>
                                <div
                                    className="d-flex flex-wrap p-0"
                                    id="times"
                                    style={{ width: '450px' }}
                                >
                                    {detail.lichChieuPhim.map((time, index1) => {
                                        if (new Date(time.ngayChieuGioChieu).getDay() === days) {
                                            return (
                                                <Link
                                                    key={index1}
                                                    to={`/booking/${time.maLichChieu}`}
                                                    className={`p-0 mr-2 mb-2 d-flex align-items-center ${classes.buttonTicket}`}
                                                >
                                                    <h6
                                                        className={`m-0 text-center ${classes.hoverGreen}`}
                                                    >
                                                        {new Date(time.ngayChieuGioChieu).toLocaleTimeString()}
                                                    </h6>
                                                </Link>
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        }
    }

    const Button = styled.button`
        background-color: white;
        color: black;
        border: none;
        cursor: pointer;
        font-size: 18px;
        &:focus { 
            border: none;
            outline: none;
            color: #FB4226;
        }
    `;

    const renderMovieSchedule = (day) => {
        setDay(new Date(day).getDay());
    }

    const renderNgayThang = () => {
        let arr = [];
        for (let i = 1; i <= 8; i++) {
            arr.push(i);
        }
        return arr.map((i, index) => {
            if (index > 2) {
                return (
                    <Button
                        key={index}
                        className="text-black-50"
                        disabled
                    >
                        <div className={classes.styleDay}>
                            {new Date(`2019-01-0${i}T00:01:00`).toLocaleString("vi-VN", { weekday: 'long' })}
                        </div>
                        <div className={classes.styleDate}>
                            {new Date(`2019-01-0${i}T00:01:00`).getDay()}
                        </div>
                    </Button>
                );
            } else {
                return (
                    <Button
                        key={index}
                        onClick={() => renderMovieSchedule(`2019-01-0${i}T00:01:00`)}
                    >
                        <div className={`${classes.styleDay}`}>
                            {new Date(`2019-01-0${i}T00:01:00`).toLocaleString("vi-VN", { weekday: 'long' })}
                        </div>
                        <div className={`${classes.styleDate}`}>
                            {new Date(`2019-01-0${i}T00:01:00`).getDay()}
                        </div>
                    </Button>
                );
            }

        });
    }

    return (
        <section
            className="container pb-5 addressOfDetail"
            style={{ maxWidth: '700px' }}
        >
            <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                <li className={`nav-item bg-transparent ${classes.tabs}`}>
                    <a className={`nav-link active ${classes.info}`} id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Lịch Chiếu</a>
                </li>
                <li className={`nav-item bg-transparent ${classes.tabs}`}>
                    <a className={`nav-link ${classes.info}`} id="pills-profile-info" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Thông Tin</a>
                </li>
                <li className={`nav-item bg-transparent ${classes.tabs}`}>
                    <a className={`nav-link ${classes.info}`} id="pills-profile-rate" data-toggle="pill" href="#pills-rate" role="tab" aria-controls="pills-profile" aria-selected="false">Đánh giá</a>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="row mt-5">
                        <div className="col-md-4 col-lg-4 bg-white">
                            <ul className="nav nav-tabs d-flex flex-wrap" id="myTabs" role="tablist">
                                {renderBranch()}
                            </ul>
                        </div>
                        <div className="col-md-8 col-lg-8 p-0" >
                            <ul className="nav nav-tabs d-flex flex-wrap w-100" id="myTabContent" role="tablist">
                                <div className={`${classes.styleDatePicker}`}>
                                    {renderNgayThang()}
                                </div>
                                <div
                                    className="w-100 overflow-auto bg-white"
                                    style={{ height: '400px' }}
                                >
                                    {renderDetailMovie()}
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-info">
                    {props.data2 && <div className="row text-white text-center">
                        <div className="col-md-5">
                            <div
                                className="d-flex justify-content-between"
                            >
                                <p
                                    className="text-left font-weight-bold"
                                    style={{ width: '120px' }}
                                >
                                    Ngày công chiếu:</p><p>{new Date(props.data2.ngayKhoiChieu).toLocaleString()}</p></div>
                            <div
                                className="d-flex justify-content-between"
                            >
                                <p
                                    className="text-left font-weight-bold"
                                    style={{ width: '120px' }}
                                >
                                    Đạo diễn:
                                </p>
                                <p>{props.data2.moTa}</p>
                            </div>
                            <div
                                className="d-flex justify-content-between"
                            >
                                <p
                                    className="text-left font-weight-bold"
                                    style={{ width: '120px' }}
                                >
                                    Diễn viên
                                :</p
                                ><p>{props.data2.moTa}</p
                                ></div>
                            <div
                                className="d-flex justify-content-between"
                            >
                                <p
                                    className="text-left font-weight-bold"
                                    style={{ width: '120px' }}
                                >
                                    Thể loại:
                                </p>
                                <p>{props.data2.moTa}</p>
                            </div>
                            <div
                                className="d-flex justify-content-between"
                            >
                                <p
                                    className="text-left font-weight-bold"
                                    style={{ width: '120px' }}
                                >
                                    Định dạng:
                                </p>
                                <p>
                                    2D/Digital
                                </p>
                            </div>
                            <div
                                className="d-flex justify-content-between"
                            >
                                <p
                                    className="text-left font-weight-bold"
                                    style={{ width: '120px' }}
                                >
                                    Quốc gia SX:
                                </p>
                                <p>{props.data2.moTa}</p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <p className="font-weight-bold">Nội dung: </p>
                            <p>{props.data2.moTa}</p>
                        </div>
                    </div>}
                </div>
                <div className="tab-pane fade" id="pills-rate" role="tabpanel" aria-labelledby="pills-profile-rate">
                    <p>Đánh giá</p>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        data2: state.detailMovieReducer.data,
        loading1: state.scheduleDetailReducer.loading1,
        data1: state.scheduleDetailReducer.data1,
        loading: state.listVincomReducer.loading,
        data: state.listVincomReducer.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchScheduleBranch: () => {
            dispatch(actListVincomApi());
        },
        fetchBranchDetail: (data) => {
            dispatch(actScheduleDetailApi(data));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);