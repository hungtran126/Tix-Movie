import React from 'react';
import slide from '../../../../img/slide1.jpg';
import slide1 from '../../../../img/slide2.jpg';
import slide2 from '../../../../img/slide3.jpg';

export default function App() {
    return (
        <section className="App" id="app">
            <div className="App__center d-flex align-items-center justify-content-around">
                <div className="App__left">
                    <h1>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h1>
                    <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                    <button className="btn btn-danger">App miễn phí - Tải về ngay!</button>
                    <p>TIX có hai phiên bản <a href="#">iOS</a> &amp; <a href="#">Android</a></p>
                </div>
                <div className="App__right">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={slide} className="d-block" />
                            </div>
                            <div className="carousel-item">
                                <img src={slide1} className="d-block" />
                            </div>
                            <div className="carousel-item">
                                <img src={slide2} className="d-block" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
