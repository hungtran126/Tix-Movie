import React from 'react';
import logo from '../../img/logoLogin.png';
import useStyle from '../../components/Style';
import btnFB from '../../img/btn-FB.png';
import { Link, Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { actLoginApi } from './modules/action';

function Login(props) {
    const classes = useStyle();
    const responseFacebook = (res) => {
        // console.log("resss", res);
    }

    const FormLogin = () => {
        const validationSchema = Yup.object({
            matKhau: Yup
                .string('Vui lòng nhập mật khẩu')
                .min(3, 'Mật khẩu phải hơn 3 kí tự')
                .required('Không được để mật khẩu trống'),
        });

        const formik = useFormik({
            initialValues: {
                taiKhoan: '',
                matKhau: '',
            },
            validationSchema: validationSchema,
            onSubmit: (values) => {
                props.getLogin(values, props.history);
            },
        });
        if(localStorage.getItem("user")) return <Redirect to="/" />
        return (
            <div className="mb-4 text-white">
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="taiKhoan"
                        name="taiKhoan"
                        label="Tài khoản"
                        type="text"
                        variant="filled"
                        className={classes.signin_input}
                        value={formik.values.username}
                        onChange={formik.handleChange}
                    />
                    <TextField
                        fullWidth
                        id="matKhau"
                        name="matKhau"
                        label="Mật khẩu"
                        type="password"
                        variant="filled"
                        className={classes.signin_input}
                        value={formik.values.matKhau}
                        onChange={formik.handleChange}
                        error={formik.touched.matKhau && Boolean(formik.errors.matKhau)}
                        helperText={formik.touched.matKhau && formik.errors.matKhau}
                    />
                    {props.err && <div className={classes.signin_input + " p-1 text-danger"}>{props.err.response.data}</div>}
                    <Button className="mt-3" color="secondary" variant="contained" fullWidth type="submit">
                        Đăng nhập
                    </Button>
                </form>
            </div>
        );
    };

    return (
        <div className={classes.signin_bgLogin}>
            <div className={classes.signin_loginContent}>
                <img src={logo} className={classes.signin_logoImg} />
                <div>Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!</div>
                <div className={classes.boxIMG}>
                    <div className="w-100">
                        {FormLogin()}
                        {/* <FacebookLogin
                            appId="12779887259207236"
                            autoLoad
                            callback={responseFacebook}
                            render={renderProps => (
                                <button onClick={renderProps.onClick} style={{ borderRadius: "10px", border: "none" }}>
                                    <img src={btnFB} className={classes.btnIMG} />
                                </button>
                            )}
                        /> */}
                    </div>
                </div>
                <Link to="/" className={classes.signin_close}>X</Link>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        loading: state.loginReducer.loading,
        data: state.loginReducer.data,
        err: state.loginReducer.err,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLogin: (form, history) => {
            dispatch(actLoginApi(form, history));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
