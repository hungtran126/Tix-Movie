import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { TextField } from '@material-ui/core';
import * as Yup from 'yup';
import { actCreateUserApi } from '../modules/action';
import Button from '@material-ui/core/Button';

function CreateUser(props) {
    console.log("err", props);
    const validationSchema = Yup.object({
        taiKhoan: Yup
            .string('Vui lòng nhập tài khoản')
            .required('Không được để tên phim trống'),
        hoTen: Yup
            .string('Vui lòng nhập họ tên')
            .required('Không được để trống họ tên'),
        email: Yup
            .string('Vui lòng nhập email')
            .required('Không được để trống email'),
        soDt: Yup
            .string('Vui lòng nhập số điện thoai')
            .required('Không được để trống số điện thoại'),
        matKhau: Yup
            .string('Vui lòng nhập mật khẩu')
            .required('Không được để trống số điện thoại'),
        maLoaiNguoiDung: Yup
            .string('Vui lòng nhập mã người dùng')
            .required('Không được để trống mã loại người dùng'),
    });

    return (
        <Formik
            initialValues={{
                taiKhoan: '',
                hoTen: '',
                email: '',
                soDt: '',
                matKhau: '',
                maLoaiNguoiDung: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                props.getUserCreate(values);
            }}
            render={({
                values,
                handleSubmit,
                handleChange,
                touched,
                errors
            }) => {
                return (
                    <form
                        onSubmit={handleSubmit}
                        className="mt-3"
                    >
                        <div className="row mx-auto">
                            <div className="col-lg-6 col-6 mt-2 mb-2">
                                <TextField
                                    id="taiKhoan"
                                    name="taiKhoan"
                                    label="Tài khoản"
                                    color="primary"
                                    type="text"
                                    defaultValue={!props.dataEdit ? "" : props.dataEdit.taiKhoan}
                                    onChange={handleChange}
                                    error={touched.taiKhoan && Boolean(errors.taiKhoan)}
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6 col-6 mt-2 mb-2">
                                <TextField
                                    id="hoTen"
                                    name="hoTen"
                                    label="Họ tên"
                                    color="primary"
                                    type="text"
                                    defaultValue={!props.dataEdit ? "" : props.dataEdit.hoTen}
                                    onChange={handleChange}
                                    error={touched.hoTen && Boolean(errors.hoTen)}
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6 col-6 mt-2 mb-2">
                                <TextField
                                    id="email"
                                    name="email"
                                    label="Email"
                                    color="primary"
                                    type="text"
                                    defaultValue={!props.dataEdit ? "" : props.dataEdit.email}
                                    onChange={handleChange}
                                    error={touched.email && Boolean(errors.email)}
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6 col-6 mt-2 mb-2">
                                <TextField
                                    id="soDt"
                                    name="soDt"
                                    label="Số điện thoại"
                                    color="primary"
                                    type="text"
                                    defaultValue={!props.dataEdit ? "" : props.dataEdit.soDt}
                                    onChange={handleChange}
                                    error={touched.soDt && Boolean(errors.soDt)}
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6 col-6 mt-2 mb-2">
                                <TextField
                                    id="matKhau"
                                    name="matKhau"
                                    label="Mật khẩu"
                                    color="primary"
                                    type="text"
                                    defaultValue={!props.dataEdit ? "" : props.dataEdit.matKhau}
                                    onChange={handleChange}
                                    error={touched.matKhau && Boolean(errors.matKhau)}
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6 col-6 mt-2 mb-2">
                                <TextField
                                    id="maLoaiNguoiDung"
                                    name="maLoaiNguoiDung"
                                    label="Mã loại người dùng"
                                    color="primary"
                                    type="text"
                                    defaultValue={!props.dataEdit ? "" : props.dataEdit.maLoaiNguoiDung}
                                    onChange={handleChange}
                                    error={touched.maLoaiNguoiDung && Boolean(errors.maLoaiNguoiDung)}
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-12 col-12 mt-4 text-right">
                                <Button variant="contained" color="secondary" className="mr-3" type="reset">
                                    Làm mới
                                </Button>
                                <Button variant="contained" color="primary" type="submit">
                                    Tạo
                                </Button>
                            </div>
                        </div>
                    </form>
                );
            }}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        err: state.manageUserReducer.err,
        dataEdit: state.manageUserReducer.dataEdit,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserCreate: (data) => {
            dispatch(actCreateUserApi(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);

