import React from 'react';
import tenet from '../../../img/tenet-15984144207145.png';
import playVideo from '../../../img/play-video.png';
import academy from '../../../img/hoc-vien-quai-vat-du-hoc-sinh-cranston-academy-monster-zone-p-15984251177529.jpg';
import devil from '../../../img/ac-quy-doi-dau-deliver-us-from-evil-c16-15994546580686.jpg';
import greenland from '../../../img/greenland-tham-hoa-thien-thach-16000538668854.png';
import rom from '../../../img/rom-c18-16008300686919.png';
import back from '../../../img/back-session.png';
import next from '../../../img/next-session.png';

function Slide() {
    return (
        <div className="slide">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                    <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                    <li data-target="#carouselExampleCaptions" data-slide-to={3} />
                    <li data-target="#carouselExampleCaptions" data-slide-to={4} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={tenet} className="d-block w-100" />
                        <div className="carousel-caption d-none d-md-inline">
                            <img src={playVideo} data-toggle="modal" data-target="#trailerModal1" />
                        </div>
                        <div className="backgroundLinear" />
                    </div>
                    <div className="carousel-item">
                        <img src={academy} className="d-block w-100" />
                        <div className="carousel-caption d-none d-md-inline">
                            <img src={playVideo} data-toggle="modal" data-target="#trailerModal2" />
                        </div>
                        <div className="backgroundLinear" />
                    </div>
                    <div className="carousel-item">
                        <img src={devil} className="d-block w-100" />
                        <div className="carousel-caption d-none d-md-inline">
                            <img src={playVideo} data-toggle="modal" data-target="#trailerModal3" />
                        </div>
                        <div className="backgroundLinear" />
                    </div>
                    <div className="carousel-item">
                        <img src={greenland} className="d-block w-100" />
                        <div className="carousel-caption d-none d-md-inline">
                            <img src={playVideo} data-toggle="modal" data-target="#trailerModal4" />
                        </div>
                        <div className="backgroundLinear" />
                    </div>
                    <div className="carousel-item">
                        <img src={rom} className="d-block w-100" />
                        <div className="carousel-caption d-none d-md-inline">
                            <img src={playVideo} data-toggle="modal" data-target="#trailerModal5" />
                        </div>
                        <div className="backgroundLinear" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <img src={back} />
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <img src={next} />
                </a>
            </div>
        </div>

    )
}

export default Slide;
