import React from 'react';
import github from '../assets/img/icons/common/github.svg';
import google from '../assets/img/icons/common/google.svg';
import { Link, Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { actLoginAdminApi } from './modules/action';

function LoginPage(props) {
    const FormLogin = () => {
        // const validationSchema = Yup.object({
        //     matKhau: Yup
        //         .string('Vui lòng nhập mật khẩu')
        //         .min(3, 'Mật khẩu phải hơn 3 kí tự')
        //         .required('Không được để mật khẩu trống'),
        // });

        // const formik = useFormik({
        //     initialValues: {
        //         taiKhoan: '',
        //         matKhau: '',
        //     },
        //     validationSchema: validationSchema,
        //     onSubmit: (values) => {
        //         console.log("value", values);
        //     },
        // });
        // if (localStorage.getItem("user")) return <Redirect to="/" />
        return (
            <Formik
                initialValues={{ taiKhoan: '', matKhau: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.matKhau) {
                        errors.matKhau = 'Mật khẩu không được bỏ trống';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    props.getLoginAdmin(values, props.history);
                    setSubmitting(false);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit} role="form">
                        <div className="form-group mb-3">
                            <div className="input-group input-group-merge input-group-alternative">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="ni ni-single-02" /></span>
                                </div>
                                <input
                                    className="form-control"
                                    placeholder="Tài khoản"
                                    type="text"
                                    id="taiKhoan"
                                    name="taiKhoan"
                                    value={values.taiKhoan}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group input-group-merge input-group-alternative">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="ni ni-lock-circle-open" /></span>
                                </div>
                                <input
                                    className="form-control"
                                    placeholder="Mật khẩu"
                                    id="matKhau"
                                    name="matKhau"
                                    type="password"
                                    value={values.matKhau}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        {errors.password && touched.password && errors.password}
                        <div className="custom-control custom-control-alternative custom-checkbox">
                            <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
                            <label className="custom-control-label" htmlFor=" customCheckLogin">
                                <span className="text-muted">Ghi nhớ</span>
                            </label>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary my-4" disabled={isSubmitting}>Đăng nhập</button>
                        </div>
                    </form>
                )}
            </Formik>
        );
    };

    return (
        <div className="bg-default" id="adminPage" style={{ backgroundColor: "#172b4d" }}>
            {/* Main content */}
            <div className="main-content">
                {/* Header */}
                <div className="header bg-gradient-primary py-5 py-lg-8">
                    <div className="container">
                        <div className="header-body text-center mb-7">
                            <div className="row justify-content-center">
                                <div className="col-xl-5 col-lg-6 col-md-8 px-5">
                                    <h1 className="text-white">Đăng nhập Admin</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="separator separator-bottom separator-skew zindex-100">
                        <svg x={0} y={0} viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <polygon className="fill-default" points="2560 0 2560 100 0 100" />
                        </svg>
                    </div>
                </div>
                {/* Page content */}
                <div className="container mt--9 pb-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-7">
                            <div className="card bg-secondary border-0 mb-0">
                                <div className="card-header bg-transparent pb-5">
                                    <div className="text-muted text-center mt-2 mb-3"><small>Đăng nhập với</small></div>
                                    <div className="btn-wrapper text-center">
                                        <a href="#" className="btn btn-neutral btn-icon">
                                            <span className="btn-inner--icon"><img src={github} /></span>
                                            <span className="btn-inner--text">Github</span>
                                        </a>
                                        <a href="#" className="btn btn-neutral btn-icon">
                                            <span className="btn-inner--icon"><img src={google} /></span>
                                            <span className="btn-inner--text">Google</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="card-body px-lg-5 py-lg-5">
                                    <div className="text-center text-muted mb-4">
                                        <small>Hoặc đăng nhập với tài khoản quản trị</small>
                                    </div>
                                    {FormLogin()}
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-6">
                                    <Link to="#" className="text-light"><small>Quên mật khẩu?</small></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLoginAdmin: (form, history) => {
            dispatch(actLoginAdminApi(form, history));
        }
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);
