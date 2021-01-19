import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actScheduleDetailApi } from './modules/action';
import { actListVincomApi } from '../../HomePage/BookingBar/modules/action';
import vincom from '../../../../img/bhd-star-vincom-thao-dien-15379553942188.jpg';
import useStyle from '../../../../components/Style/index';
import styled from 'styled-components';
import { Link } from '@material-ui/core';

function Schedule(props) {
    const classes = useStyle();
    useEffect(() => {
        props.fetchScheduleBranch();
        // props.fetchBranchDetail('BHD');
    }, []);

    const renderBranch = () => {
        if (props.data && props.data.length > 0) {
            return props.data.map((list, index) => {
                return (
                    <li className="nav-item" role="presentation" key={index}>
                        <a
                            className={"nav-link active"}
                            id="home-tab"
                            data-toggle="tab"
                            href={"#" + list.maHeThongRap}
                            role="tab" aria-controls={list.maHeThongRap} aria-selected="true"
                            onClick={() => renderDetailMovie(list.maHeThongRap)}
                        >
                            <div className="row">
                                <div className="col-md-4">
                                    <div style={{ width: '75px' }}>
                                        <img src={list.logo} />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="mt-2 ml-5" style={{
                                        marginLeft: '100%', marginRight: '0px', fontSize: '18px', fontWeight: 'bold'
                                    }}>
                                        {list.maHeThongRap}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li >
                );
            });
        }
    }

    // const renderDetailBranch = (MaRap) => {
    //     if (MaRap) return props.getBranchDetail(MaRap);

    //     if (props.data1 && props.data1.length > 0) {
    //         return (
    //             <div className="tab-pane fade show active" id={MaRap} role="tabpanel" aria-labelledby="bhd-tab">
    //                 {props.data1.map((detail, index) => {
    //                     return detail.lstCumRap.map((list, index1) => {
    //                         return (
    //                             <li
    //                                 className="d-flex active"
    //                                 key={index1}
    //                                 role="presentation"
    //                             >
    //                                 <img src={vincom} />
    //                                 <div>
    //                                     {/* <strong><span>{detail.tenCumRap}</span> - Vincom Thảo Điền</strong> */}
    //                                     <strong>{list.tenCumRap}</strong>
    //                                     <p>{list.diaChi}</p>
    //                                     <a
    //                                         href={"#" + list.maCumRap}
    //                                         data-toggle="tab"
    //                                         role="tab"
    //                                         aria-controls={list.maCumRap} aria-selected="true"
    //                                         onClick={() => renderDetailMovie(list.maCumRap)}
    //                                     >
    //                                         [chi tiết]
    //                                     </a>
    //                                 </div>
    //                             </li>
    //                         );
    //                     })
    //                 })}
    //             </div>
    //         );
    //     }
    // }

    // const renderDetailMovie = (maCumRap) => {
    //     return (
    //         <div className="tab-pane fade show active" id={maCumRap} role="tabpanel">
    //             {props.data1.map((detail, index) => {
    //                 return detail.lstCumRap.map((list, index1) => {
    //                     return list.danhSachPhim.map((movie, index2) => {
    //                         return (
    //                             <div className="col-right" key={index2}>
    //                                 <div className="d-flex active pt-0">
    //                                     <img src={movie.hinhAnh} />
    //                                     <div>
    //                                         <strong><span className="badge badge-success">P</span> {movie.tenPhim}</strong>
    //                                         <p>109 phút - TIX 9.4 - IMDb 8.7</p>
    //                                     </div>
    //                                 </div><br />
    //                                 <h5>2D Digital</h5>
    //                                 <Link className="btn btn-light d-flex align-items-center"><h6>20:30 </h6> ~ 22:19</Link>
    //                             </div>
    //                         );
    //                     });
    //                 })
    //             })}
    //         </div>
    //     );
    // }

    const renderDetailMovie = (maRap) => {
        // console.log(maRap);
        if (maRap) return props.fetchBranchDetail(maRap);
        console.log(props.data1);
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

    const renderNgayThang = () => {
        return (
            <div className={classes.styleDatePicker}>
                <Button>
                    <div className={classes.styleDay}>
                        Chủ Nhật
                    </div>
                    <div className={classes.styleDate}>
                        17
                    </div>
                </Button>
                <Button>
                    <div className={classes.styleDay}>
                        Thứ 2
                    </div>
                    <div className={classes.styleDate}>
                        18
                    </div>
                </Button>
                <Button>
                    <div className={classes.styleDay}>
                        Thứ 3
                    </div>
                    <div className={classes.styleDate}>
                        19
                    </div>
                </Button>
                <Button disabled>
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Thứ 4
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        20
                    </div>
                </Button>
                <Button disabled>
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Thứ 5
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        21
                    </div>
                </Button>
                <Button disabled>
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Thứ 6
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        22
                    </div>
                </Button>
                <Button disabled>
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Thứ 7
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        23
                    </div>
                </Button>
                <Button disabled>
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Thứ 7
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        23
                    </div>
                </Button>
                <Button disabled>
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Chủ nhật
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        24
                    </div>
                </Button>
                <Button disabled>
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Thứ 2
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        25
                    </div>
                </Button>
                <Button disabled>
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Thứ 3
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        26
                    </div>
                </Button>
                <Button disabled>
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Thứ 4
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        27
                    </div>
                </Button>
                <Button disabled>
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Thứ 5
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        28
                    </div>
                </Button>
                <Button disabled>
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Thứ 6
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        29
                    </div>
                </Button>
                <Button disabled>
                    <div className={`${classes.styleDay} ${classes.buttonDisabled}`}>
                        Thứ 7
                    </div>
                    <div className={`${classes.styleDate} ${classes.buttonDisabled}`}>
                        30
                    </div>
                </Button>
            </div >
        );
    }

    return (
        <section className="address" id="address">
            <div className="row">
                <div className="col-md-4">
                    <ul className="nav nav-tabs d-flex flex-wrap col-md-4" id="myTab" role="tablist">
                        {renderBranch()}
                    </ul>
                </div>
                <div className="col-md-8 overflow-auto">
                    <ul className="nav nav-tabs d-flex flex-wrap col-md-12" id="myTabContent" role="tablist">
                        {/* {renderDetailBranch()} */}
                        {renderNgayThang()}
                        {/* {renderDetailBranch()}
                        {renderDetailMovie()} */}
                    </ul>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    console.log(state.scheduleDetailReducer.data);
    return {
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
        fetchBranchDetail: (maRap) => {
            dispatch(actScheduleDetailApi(maRap));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);