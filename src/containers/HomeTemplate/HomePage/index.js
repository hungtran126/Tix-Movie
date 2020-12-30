import React from 'react';
import App from './App';
import BookingBar from './BookingBar/';
import Branch from './Branch';
import NewIn from './NewIn';
import News from './News';
import Slide from './Slide';

function HomePage() {
    return (
        <React.Fragment>
            {/* Slide */}
            <Slide />
            {/* Các movie đang chiếu hoặc sắp chiếu */}
            <NewIn />
            {/* Select đặt mua vé ngay phía dưới slide */}
            <BookingBar />
            {/* Khoảng trắng */}
            <div className="dont-mind" />
            {/* Rạp */}
            <Branch />
            {/* Khoảng trắng */}
            <div className="dont-mind mt-5" />
            {/* Tin tức */}
            <News />
            {/* App */}
            <App />
        </React.Fragment>
    );
}

export default HomePage;