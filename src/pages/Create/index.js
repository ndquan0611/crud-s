import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as songService from '../../services/songService';
import config from '../../config';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

function Create() {
    const navigate = useNavigate();

    return (
        <>
            <h2 className="text-center mt-4">Đăng ký bài hát</h2>

            <Formik
                initialValues={{
                    title: '',
                    artist: '',
                    sing: '',
                    time: 'hh:mm',
                    like: 0,
                    status: 'Lưu trữ',
                }}
                validationSchema={Yup.object({
                    title: Yup.string().max(30).required('Không được để trống'),
                    artist: Yup.string().required('Không được để trống'),
                    sing: Yup.string().max(30).required('Không được để trống'),
                    time: Yup.string().required('Không được để trống'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    songService.post(values);
                    navigate('/');
                    toast.success('Đăng ký thành công');
                    setSubmitting(false);
                }}
            >
                <Form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Tên bài hát
                        </label>
                        <Field
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                        />
                        <div style={{ height: '20px' }}>
                            <ErrorMessage
                                className="form-text text-danger"
                                name="title"
                                component="span"
                            ></ErrorMessage>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="artist" className="form-label">
                            Ca sĩ
                        </label>
                        <Field
                            type="text"
                            className="form-control"
                            id="artist"
                            name="artist"
                        />
                        <div style={{ height: '20px' }}>
                            <ErrorMessage
                                className="form-text text-danger"
                                name="artist"
                                component="span"
                            ></ErrorMessage>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="sing" className="form-label">
                            Nhạc sĩ
                        </label>
                        <Field
                            type="text"
                            className="form-control"
                            id="sing"
                            name="sing"
                        />
                        <div style={{ height: '20px' }}>
                            <ErrorMessage
                                className="form-text text-danger"
                                name="sing"
                                component="span"
                            ></ErrorMessage>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="time" className="form-label">
                            Thời gian phát
                        </label>
                        <Field
                            type="text"
                            className="form-control"
                            id="time"
                            name="time"
                        />
                    </div>
                    <Link
                        to={config.routes.home}
                        className="btn btn-secondary me-2"
                    >
                        Hủy
                    </Link>
                    <button type="submit" className="btn btn-primary">
                        Đăng ký
                    </button>
                </Form>
            </Formik>
        </>
    );
}

export default Create;
