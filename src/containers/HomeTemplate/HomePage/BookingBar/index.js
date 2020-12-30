import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import dropdownIcon from '../../../../img/dropdown-icon.png';
import { actListVincomApi } from './modules/action';

function BookingBar(props) {
    useEffect(() => {
        props.fetchVincom();
    }, []);

    const renderRap = () => {
        if (props.data && props.data.length > 0) {
            return props.data.map((list, index) => {
                return (
                    <p
                        className="dropdown-item"
                        key={index}
                    >
                        Rạp {list.maHeThongRap}
                    </p>
                );
            });
        }
    }
    return (
        <div className="booking-bar">
            <div className="cbx__phim d-inline">
                <div className="dropdown">
                    <a className="btn btn-lg dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Phim
                    <img src={dropdownIcon} />
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#">Ác Quỷ Đối Đầu</a>
                        <a className="dropdown-item" href="#">Tenet</a>
                        <a className="dropdown-item" href="#">Ròm</a>
                        <a className="dropdown-item" href="#">Cướp biển</a>
                    </div>
                </div>
            </div>
            <div className="cbx__rap d-inline">
                <div className="dropdown">
                    <a className="btn btn-lg dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Rạp
                    <img src={dropdownIcon} />
                    </a>
                    <div
                        className="dropdown-menu" 
                        aria-labelledby="dropdownMenuLink"
                    >
                        {renderRap()}
                    </div>
                </div>
            </div>
            <div className="cbx__ngay d-inline">
                <div className="dropdown">
                    <a className="btn btn-lg dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Ngày xem
                    <img src={dropdownIcon} />
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#">Hôm nay <span>2020-10-03</span></a>
                        <a className="dropdown-item" href="#">Ngày mai<span>2020-10-03</span></a>
                        <a className="dropdown-item" href="#">Thứ hai<span>2020-10-03</span></a>
                        <a className="dropdown-item" href="#">Thứ ba<span>2020-10-03</span></a>
                    </div>
                </div>
            </div>
            <div className="cbx__suatchieu d-inline">
                <div className="dropdown">
                    <a className="btn btn-lg dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Suất chiếu
                    <img src={dropdownIcon} />
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#">17:10</a>
                        <a className="dropdown-item" href="#">18:30</a>
                        <a className="dropdown-item" href="#">19:00</a>
                        <a className="dropdown-item" href="#">20:00</a>
                    </div>
                </div>
            </div>
            <div className="cbx__mua d-inline">
                <button className="btn btn-secondary btnBuy">MUA VÉ NGAY</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.listVincomReducer.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchVincom: () => {
            dispatch(actListVincomApi());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingBar);
