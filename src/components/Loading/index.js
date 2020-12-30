import React from 'react';
import './loading.css';

export default function Loading() {
    return (
        <React.Fragment>
            <div className="about">
                <a className="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
                    <span className="icon" />
                </a>
                <a className="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
                    <span className="icon" />
                </a>
                <a className="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
                    <span className="icon" />
                </a>
                <a className="bg_links logo" />
            </div>
            {/* end about */}
            <div className="content">
                <div className="loading">
                    <p>loading</p>
                    <span />
                </div>
            </div>
        </React.Fragment>
    );
}
