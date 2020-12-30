import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actListMovieApi } from './modules/action';
import playVideo from '../../../img/play-video.png';
import star from '../../../img/star1.png';
import back from '../../../img/back-session.png';
import next from '../../../img/next-session.png';
import { Link } from 'react-router-dom';

function NewIn(props) {

    useEffect(() => {
        props.fetchMovie();
    }, []);

    const renderMovie = () => {
        if (props.data) {
            return (
                <div className="container carousel-item active">
                    <div className="row newIn__pre-item">
                        {props.data.items.map((movie, index) => {
                            return (
                                <div className="col-3 newIn__item" key={index}>
                                    <div className="newIn__item--top">
                                        <img src={movie.hinhAnh} className="img-fluid" />
                                        <div className="newIn__item-overlayblack" />
                                    </div>
                                    <div className="newIn__videoplayicon" data-toggle="modal" data-target="#trailerModal3">
                                        <img src={playVideo} />
                                    </div>
                                    <div className="newIn__item-overlayType d-none">
                                        <img src="./img/film_type_1.png" />
                                    </div>
                                    <div className="newIn__item-rating">
                                        <p>8.9</p>
                                        <div className="rating-star">
                                            <img src={star} />
                                            <img src={star} />
                                            <img src={star} />
                                            <img src={star} />
                                            <img src={star} />
                                        </div>
                                    </div>
                                    <div className="newIn__item--bottom">
                                        <div className="newIn__item-title">
                                            <span className="newIn__movieAge movieAge-orange">C18</span>
                                            <h6>{movie.tenPhim} - (C18)</h6>
                                        </div>
                                        <p className="newIn__movieTime newIn__movieTimewithBuy">100 phút</p>
                                        <Link to={"/phim/"+movie.tenPhim} className="newIn__item--btnBuy">
                                            <button type="button" className="btn">MUA VÉ</button>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        }
    }

    return (
        <div className="newIn" id="calendar">
            <ul className="nav nav-tabs container" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="dangchieu-tab" data-toggle="tab" href="#dangchieu" role="tab" aria-controls="dangchieu" aria-selected="true">Đang chiếu</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="sapchieu-tab" data-toggle="tab" href="#sapchieu" role="tab" aria-controls="sapchieu" aria-selected="false">Sắp chiếu</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="dangchieu" role="tabpanel" aria-labelledby="dangchieu-tab">
                    <div id="carouselDangChieu" className="carousel slide">
                        <div className="carousel-inner newIn__content">
                            {renderMovie()}
                        </div>
                        <a className="carousel-control-prev" href="#carouselDangChieu" role="button" data-slide="prev">
                            <img src={back} />
                        </a>
                        <a className="carousel-control-next" href="#carouselDangChieu" role="button" data-slide="next">
                            <img src={next} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.listMovieReducer.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: () => {
            dispatch(actListMovieApi());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewIn);
