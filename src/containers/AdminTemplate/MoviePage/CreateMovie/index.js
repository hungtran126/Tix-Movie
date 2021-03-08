import { TextField } from '@material-ui/core';
import { Formik } from 'formik';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import React from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { actCreateMovieApi } from '../modules/actions';

function CreateMovie(props) {

    console.log("err", props);

    const validationSchema = Yup.object({
        tenPhim: Yup
            .string('Vui lòng nhập tên phim')
            .required('Không được để tên phim trống'),
        biDanh: Yup
            .string('Vui lòng nhập bí danh')
            .required('Không được để bí danh trống'),
        moTa: Yup
            .string('Vui lòng nhập mô tả')
            .required('Không được để mô tả trống'),
        hinhAnh: Yup
            .string('Vui lòng chọn hình ảnh')
            .required('Không được để hình ảnh trống'),
        ngayKhoiChieu: Yup
            .string('Vui lòng chọn ngày khởi chiếu')
            .required('Không được để ngày khởi chiếu trống'),
    });

    const getBase64 = (file, cb) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
    return (
        <Formik
            initialValues={{
                tenPhim: '',
                biDanh: '',
                trailer: '',
                moTa: '',
                ngayKhoiChieu: '',
                hinhAnh: '',
                danhGia: 10,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                // console.log("formMovie", values);
                props.getCreateMovie(values);
            }}
            render={({
                values,
                handleSubmit,
                setFieldValue,
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
                                    id="tenPhim"
                                    name="tenPhim"
                                    label="Tên phim"
                                    color="primary"
                                    type="text"
                                    defaultValue={!props.dataEdit ? "" : props.dataEdit.tenPhim}
                                    onChange={handleChange}
                                    error={touched.tenPhim && Boolean(errors.tenPhim)}
                                    helperText={touched.tenPhim && errors.tenPhim}
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6 col-6 mt-2 mb-2">
                                <TextField
                                    id="biDanh"
                                    name="biDanh"
                                    label="Bí danh"
                                    color="primary"
                                    type="text"
                                    defaultValue={!props.dataEdit ? "" : props.dataEdit.biDanh}
                                    onChange={handleChange}
                                    error={touched.biDanh && Boolean(errors.biDanh)}
                                    helperText={touched.biDanh && errors.biDanh}
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6 col-6 mt-2 mb-2">
                                <TextField
                                    id="trailer"
                                    name="trailer"
                                    label="Trailer"
                                    color="primary"
                                    defaultValue={!props.dataEdit ? "" : props.dataEdit.trailer}
                                    onChange={handleChange}
                                    placeholder="url..."
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6 col-6 mt-2 mb-2">
                                <TextField
                                    id="ngayKhoiChieu"
                                    label="Ngày khởi chiếu"
                                    type="datetime-local"
                                    defaultValue={!props.dataEdit ? "" : props.dataEdit.ngayKhoiChieu}
                                    onChange={handleChange}
                                    error={touched.ngayKhoiChieu && Boolean(errors.ngayKhoiChieu)}
                                    helperText={touched.ngayKhoiChieu && errors.ngayKhoiChieu}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div className="col-lg-6 col-6 mt-2 mb-2">
                                <TextField
                                    id="moTa"
                                    name="moTa"
                                    label="Mô tả"
                                    color="primary"
                                    type="text"
                                    rows={4}
                                    multiline
                                    defaultValue={!props.dataEdit ? "" : props.dataEdit.moTa}
                                    onChange={handleChange}
                                    error={touched.moTa && Boolean(errors.moTa)}
                                    helperText={touched.moTa && errors.moTa}
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6 col-6 mt-2 mb-2">
                                <TextField
                                    id="danhGia"
                                    name="danhGia"
                                    label="Đánh giá"
                                    color="primary"
                                    type="number"
                                    defaultValue={!props.dataEdit ? "" : props.dataEdit.danhGia}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </div>
                            <div className="col-lg-6 col-6 mt-2 mb-2">
                                <Input
                                    type="file"
                                    id="hinhAnh"
                                    name="hinhAnh"
                                    // value={!props.dataEdit ? "" : props.dataEdit.hinhAnh}
                                    onChange={(event) => setFieldValue("hinhAnh", event.currentTarget.files[0].name)}
                                    error={touched.hinhAnh && Boolean(errors.hinhAnh)}
                                    helperText={touched.hinhAnh && errors.hinhAnh}
                                />
                                {values ? (
                                    <img
                                        className="img-fluid mt-2"
                                        src={!props.dataEdit ? values.hinhAnh : props.dataEdit.hinhAnh}
                                    />
                                ) : ("")}
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
                )
            }}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        err: state.manageMovieReducer.err,
        dataEdit: state.manageMovieReducer.dataEdit,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCreateMovie: (data) => {
            dispatch(actCreateMovieApi(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMovie);