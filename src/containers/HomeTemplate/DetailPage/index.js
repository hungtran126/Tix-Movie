import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import useStyle from '../../../components/Style';
import { actDetailMovieApi } from './modules/action';
import star from '../../../img/star1.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Schedule from './Schedule';

function DetailPage(props) {

    useEffect(() => {
        props.fetchDetailMovie(props.match.params.maPhim);
        // console.log("props", props);
    }, [])

    const classes = useStyle();

    const renderPoster = () => {
        if (props.data && props.data.length > 0) {
            return props.data.map((detail, index) => {
                return (
                    <React.Fragment key={index}>
                        <div className={classes.detail_styleBlur}>
                            <img
                                src="https://s3img.vcdn.vn/123phim/2018/11/nu-than-chien-binh-1984-wonder-woman-1984-15411453088668.jpg"
                                className={classes.detail_posterLandscapeFilm}
                            />
                        </div>
                        <div className={classes.detail_styleGradient}></div>
                        <div className={classes.detail_detailMainInfo}>
                            <div className="row d-flex align-items-center justify-content-between">
                                <div className={"col-sm-3 col-xs-4 " + classes.detail_filmPosterTop}>
                                    <div
                                        className={classes.detail_posterMain}
                                        style={{ backgroundImage: `url('${detail.hinhAnh}')` }}
                                    ></div>
                                </div>
                                <div className={"col-sm-5 " + classes.detail_infoMain}>
                                    <div>
                                        <span style={{
                                            color: "#e9e9e9",
                                            fontSize: "14pt",
                                        }}>{new Date(detail.ngayKhoiChieu).toLocaleDateString()}</span>
                                        <br />
                                    </div>
                                    <div>
                                        <span className={classes.detail_detailMainInfo2}>
                                            <span className="badge badge-success text-white">P</span>
                                            <span> {detail.tenPhim}</span>
                                        </span>
                                    </div>
                                    <div>
                                        <span style={{
                                            color: "#e9e9e9",
                                            fontSize: "12pt",
                                        }}>100 phút - 0 IMDb - 2D/Digital</span>
                                        <br />
                                    </div>
                                    <button className={classes.detail_btnBuyTicketDetail}>Mua vé</button>
                                </div>
                                <div className="col-sm-2 mt-0">
                                    <CircularProgressbar
                                        strokeWidth={12}
                                        value={detail.danhGia}
                                        text={`${detail.danhGia}%`}
                                        styles={buildStyles({
                                            textColor: "white",
                                            pathColor: "#51A416",
                                            trailColor: "#4F4C47",
                                            textSize: "20pt",
                                        })}
                                    />
                                    <div className="rating-star mt-2">
                                        <img src={star} />
                                        <img src={star} />
                                        <img src={star} />
                                        <img src={star} />
                                        <img src={star} />
                                    </div>
                                    <div style={{
                                        color: "#e9e9e9",
                                        fontSize: "10 pt",
                                    }} className="mt-2">
                                        33 người đánh giá
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                );
            });
        }
    }

    return (
        <React.Fragment>
            <div className="position-relative" style={{ marginTop: "60px" }}>
                {renderPoster()}
            </div>
            <Schedule />
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        loading: state.detailMovieReducer.loading,
        data: state.detailMovieReducer.data,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetailMovie: (tenPhim) => {
            dispatch(actDetailMovieApi(tenPhim));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
