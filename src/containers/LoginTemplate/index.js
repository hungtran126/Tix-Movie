import React from 'react';
import logo from '../../img/logoLogin.png';
import useStyle from '../../components/Style';
import btnFB from '../../img/btn-FB.png';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

export default function Login() {
    const classes = useStyle();
    const responseFacebook = (res) => {
        console.log("resss", res);
    }
    return (
        <div className={classes.signin_bgLogin}>
            <div className={classes.signin_loginContent}>
                <img src={logo} className={classes.signin_logoImg} />
                <div>Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!</div>
                <div className={classes.boxIMG}>
                    <div className="w-100">
                        <FacebookLogin
                            appId="12779887259207236"
                            autoLoad
                            callback={responseFacebook}
                            render={renderProps => (
                                <button onClick={renderProps.onClick} style={{borderRadius: "10px", border: "none"}}>
                                    <img src={btnFB} className={classes.btnIMG} />
                                </button>
                            )}
                        />
                    </div>
                </div>
                <Link to="/" className={classes.signin_close}>X</Link>
            </div>
        </div>
    );
}
