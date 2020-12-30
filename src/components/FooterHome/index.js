import React from 'react';
import cgv from '../../img/cgv.png';
import bhd from '../../img/bhd.png';
import galaxycine from '../../img/galaxycine.png';
import cinestar from '../../img/cinestar.png';
import pic5 from '../../img/404b8c4b80d77732e7426cdb7e24be20.png';
import megags from '../../img/megags.png';
import bt from '../../img/bt.jpg';
import dongdacinema from '../../img/dongdacinema.png';
import touch from '../../img/TOUCH.png';
import cnx from '../../img/cnx.jpg';
import starlight from '../../img/STARLIGHT.png';
import dcine from '../../img/dcine.png';
import zalo from '../../img/zalo-logo.png';
import payoo from '../../img/payoo.jpg';
import vcb from '../../img/VCB.png';
import agribank from '../../img/AGRIBANK.png';
import viettinbank from '../../img/VIETTINBANK.png';
import ivb from '../../img/IVB.png';
import gogogo from '../../img/123go.png';
import laban from '../../img/laban.png';
import apple from '../../img/apple-logo.png';
import android from '../../img/android-logo.png';
import facebook from '../../img/facebook-logo.png';
import zion from '../../img/zion-logo.jpg';
import dd from '../../img/d1e6bd560daa9e20131ea8a0f62e87f8.png';

export default function FooterHome() {
    return (
        <footer>
            <div className="footer__center">
                <div className="row footer__top">
                    <div className="col-md-4">
                        <p>TIX</p>
                        <div className="d-flex justify-content-between mb-2">
                            <a href="#">FAQ</a>
                            <a href="#">Thỏa thuận sử dụng</a>
                        </div>
                        <div className="d-flex justify-content-between">
                            <a href="#">Brand Guidelines</a>
                            <a href="#">Chính sách bảo mật</a>
                        </div>
                    </div>
                    <div className="col-md-4 footer__top__center">
                        <p>ĐỐI TÁC</p>
                        <div className="d-flex justify-content-between mb-3">
                            <a href="#"><img src={cgv} /></a>
                            <a href="#"><img src={bhd} /></a>
                            <a href="#"><img src={galaxycine} /></a>
                            <a href="#"><img src={cinestar} /></a>
                            <a href="#"><img src={pic5} /></a>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                            <a href="#"><img src={megags} /></a>
                            <a href="#"><img src={bt} /></a>
                            <a href="#"><img src={dongdacinema} /></a>
                            <a href="#"><img src={touch} /></a>
                            <a href="#"><img src={cnx} /></a>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                            <a href="#"><img src={starlight} /></a>
                            <a href="#"><img src={dcine} /></a>
                            <a href="#"><img src={zalo} /></a>
                            <a href="#"><img src={payoo} /></a>
                            <a href="#"><img src={vcb} /></a>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                            <a href="#"><img src={agribank} /></a>
                            <a href="#"><img src={viettinbank} /></a>
                            <a href="#"><img src={ivb} /></a>
                            <a href="#"><img src={gogogo} /></a>
                            <a href="#"><img src={laban} /></a>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="mb-3 footer__top__right text-center">
                            <p>MOBILE APP</p>
                            <div className="d-flex justify-content-center">
                                <a href="#"><img src={apple} /></a>
                                <a href="#"><img src={android} /></a>
                            </div>
                        </div>
                        <div className="footer__top__right1 text-center">
                            <p>SOCIAL</p>
                            <div className="d-flex justify-content-center">
                                <a href="#"><img src={facebook} /></a>
                                <a href="#"><img src={zalo} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row footer__bottom pt-3">
                    <div className="col-md-9">
                        <div className="d-flex justify-content-between">
                            <img src={zion} />
                            <div className="footer__bottom__left">
                                <p>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
                                <p>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.<br />
              Giấy chứng nhận đăng ký kinh doanh số: 0101659783,<br />
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp. <br />
              Số Điện Thoại (Hotline): 1900 545 436 <br />
              Email: <a href="#">support@tix.vn</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-end">
                        <img src={dd} />
                    </div>
                </div>
            </div>
        </footer>
    );
}
