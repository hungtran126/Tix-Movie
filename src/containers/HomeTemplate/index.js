import React from 'react';
import { Route } from 'react-router-dom';
import FooterHome from '../../components/FooterHome';
import NavbarHome from './../../components/NavbarHome';

function LayoutHome(props) {
    return (
        <div>
            <NavbarHome />
            {props.children}
            <FooterHome />
        </div>
    );
}

export default function HomeTemplate({Component, ...props}) {
    // const { exact, path, Component } = props;
    return (
        <Route
            {...props}
            render={(propsComponent) => (
                <LayoutHome>
                    <Component {...propsComponent} />
                </LayoutHome>
            )}
        />
    )
}
