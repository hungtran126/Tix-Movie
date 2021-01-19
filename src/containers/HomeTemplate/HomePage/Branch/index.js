import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actListVincomApi } from '../BookingBar/modules/action';
import { actBranchDetailApi, actListBranchApi } from './modules/action';
import vincom from '../../../../img/bhd-star-vincom-thao-dien-15379553942188.jpg';
import Loading from '../../../../components/Loading';

function Branch(props) {

    useEffect(() => {
        props.fetchListBranch();
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
                            onClick={() => renderDetailBranch(list.maHeThongRap)}
                        >
                            <img src={list.logo} />
                        </a>
                    </li>
                );
            });
        }
    }

    const renderDetailBranch = (MaRap) => {
        if (MaRap) return props.getBranchDetail(MaRap);

        if (props.data1 && props.data1.length > 0) {
            return (
                <div className="tab-pane fade show active" id={MaRap} role="tabpanel" aria-labelledby="bhd-tab">
                    {props.data1.map((detail, index) => {
                        return detail.lstCumRap.map((list, index1) => {
                            return (
                                <li
                                    className="d-flex active"
                                    key={index1}
                                    role="presentation"
                                >
                                    <img src={vincom} />
                                    <div>
                                        {/* <strong><span>{detail.tenCumRap}</span> - Vincom Thảo Điền</strong> */}
                                        <strong>{list.tenCumRap}</strong>
                                        <p>{list.diaChi}</p>
                                        <a
                                            href={"#" + list.maCumRap}
                                            data-toggle="tab"
                                            role="tab"
                                            aria-controls={list.maCumRap} aria-selected="true"
                                            onClick={() => renderDetailMovie(list.maCumRap)}
                                        >
                                            [chi tiết]
                                        </a>
                                    </div>
                                </li>
                            );
                        })
                    })}
                </div>
            );
        }
    }

    const renderDetailMovie = (maCumRap) => {
        // if (maCumRap) {
        return (
            <div className="tab-pane fade show active" id={maCumRap} role="tabpanel">
                {props.data1.map((detail, index) => {
                    return detail.lstCumRap.map((list, index1) => {
                        // if (list.maCumRap === maCumRap) {
                        return list.danhSachPhim.map((movie, index2) => {
                            // console.log("movie", movie);
                            return (
                                <div className="col-right" key={index2}>
                                    <div className="d-flex active pt-0">
                                        <img src={movie.hinhAnh} />
                                        <div>
                                            <strong><span className="badge badge-success">P</span> {movie.tenPhim}</strong>
                                            <p>109 phút - TIX 9.4 - IMDb 8.7</p>
                                        </div>
                                    </div><br />
                                    <h5>2D Digital</h5>
                                    <button className="btn btn-light d-flex align-items-center"><h6>20:30 </h6> ~ 22:19</button>
                                </div>
                            );
                        });
                        // }
                    })
                })}
            </div>
        );
        // }
    }

    return (
        <section className="address" id="address">
            <div className="row">
                <div className="col-md-1">
                    <ul className="nav nav-tabs d-flex flex-wrap" id="myTab" role="tablist">
                        {renderBranch()}
                    </ul>
                </div>
                <div className="col-md-5 overflow-auto">
                    <ul className="tab-content d-flex flex-wrap" id="myTabContent" role="tablist">
                        {renderDetailBranch()}
                    </ul>
                </div>
                <div className="col-md-6 overflow-auto">
                    <div className="tab-content d-flex flex-wrap" id="myTabContent1">
                        {renderDetailMovie()}
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.listVincomReducer.loading,
        data: state.listVincomReducer.data,
        loading1: state.listBranchReducer.loading1,
        data1: state.listBranchReducer.data1,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchListBranch: () => {
            dispatch(actListVincomApi());
        },
        getBranchDetail: (maRap) => {
            dispatch(actBranchDetailApi(maRap));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Branch);
