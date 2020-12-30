import React from 'react';
import american from '../../../../img/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png';
import ladies from '../../../../img/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.png';
import journeyOfRom from '../../../../img/hanh-trinh-cua-rom-va-cau-chuyen-dang-sau-de-tai-so-de-15925354323671.jpg';
import killer from '../../../../img/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122361852.png';
import sixProducer from '../../../../img/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood-15966023547553.png';
import oldBitches from '../../../../img/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-15965999321682.png';
import KatyNguyen from '../../../../img/kaity-nguyen-tro-thanh-my-nhan-moi-cua-vu-tru-gai-gia-lam-chieu-15959988694730.png';
import fiveReason from '../../../../img/5-ly-do-khien-ban-khong-the-bo-qua-bo-phim-cau-be-nguoi-go-pinocchio-15959331601790.png';

export default function News() {
    return (
        <section className="news" id="news">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Điện Ảnh 24h</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Review</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Khuyến Mãi</a>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="row news__top">
                        <div className="col-md-6">
                            <img src={american} />
                            <a href="#">[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng</a>
                            <p>
                                Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất đã làm nên thành công của loạt tác phẩm ấn tượng “Get Out”, “Us” hay
                            </p>
                            <div className="d-flex align-items-center">
                                <div className="news__top__status">
                                    <i className="fa fa-thumbs-up" /> 1
                            </div>
                                <div className="news__top__status">
                                    <i className="fa fa-comment-alt" /> 0
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={ladies} />
                            <a href="#">Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch</a>
                            <p>
                                Vượt mặt Peninsula, Ác Quỷ Đối Đầu trở thành phim ăn khách nhất mùa hè 2020 tại Hàn Quốc. Chỉ sau 12 ngày, Ác Quỷ Đối Đầu chạm điểm hoà vốn với 3.5 triệu lượt xem. Ác Quỷ Đối Đầu giữ vững vị trí top 1 doanh thu 2 tuần liên tiếp
                            </p>
                            <div className="d-flex align-items-center">
                                <div className="news__top__status">
                                    <i className="fa fa-thumbs-up" /> 1
                                </div>
                                <div className="news__top__status">
                                    <i className="fa fa-comment-alt" /> 1
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row news__bottom mt-5">
                        <div className="col-md-8 news__bottom__left">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={journeyOfRom} />
                                    <a href="#">Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan</a>
                                    <p>
                                        Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được biết tới như một trong những đạo diễn thiên tài với khả
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <div className="news__bottom__status">
                                            <i className="fa fa-thumbs-up" /> 1
                                        </div>
                                        <div className="news__bottom__status">
                                            <i className="fa fa-comment-alt" /> 1
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img src={killer} />
                                    <a href="#">Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn</a>
                                    <p>
                                        Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn 4.68 triệu vé, hai tên tuổi lão làng trong làng điện ảnh Hàn Quốc mới tiếp tục tái hợp trong
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <div className="news__bottom__status">
                                            <i className="fa fa-thumbs-up" /> 1
                                        </div>
                                        <div className="news__bottom__status">
                                            <i className="fa fa-comment-alt" /> 0
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 news__bottom__right">
                            <div className="d-flex align-items-start">
                                <img src={sixProducer} />
                                <a href="#">6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình</a>
                            </div>
                            <div className="d-flex align-items-start mt-3">
                                <img src={oldBitches} />
                                <a href="#">Gái Già Lắm Chiêu V – Những cuộc đời vương giả</a>
                            </div>
                            <div className="d-flex align-items-start mt-3">
                                <img src={KatyNguyen} />
                                <a href="#">Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già Lắm</a>
                            </div>
                            <div className="d-flex align-items-start mt-3">
                                <img src={fiveReason} />
                                <a href="#">5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ </a>
                            </div>
                        </div>
                    </div>
                    <div className="news__view text-center">
                        <button className="btn">XEM THÊM</button>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
            </div>
        </section>
    )
}
