import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './auth.css';
import { onRegister } from '../../helpers';

const Register = () => {
  const validationSuccess = async (values) => {
    try {
      const response = await onRegister(values);
      response.status === 200 &&
        toast.success('Usuario creado exitosamente', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    } catch (error) {
      error &&
        toast.error('Error en la solicitud, intenta de nuevo', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    }
  };

  return (
    <Formik
      initialValues={{ usuario: '', contraseña: '', email: '' }}
      validationSchema={Yup.object({
        usuario: Yup.string().required('Campo obligatorio'),
        email: Yup.string()
          .email('Debes ingresar un email válido')
          .required('Campo obligatorio'),
        contraseña: Yup.string()
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
            'Debe contener al menos 1 mayúscula, 1 minúscula y 1 número'
          )
          .min(8, 'Debe tener al menos 8 caracteres')
          .max(20, 'Debe tener menos de 20 caracteres')
          .required('Campo obligatorio'),
      })}
      onSubmit={(values, { resetForm }) => {
        validationSuccess(values);
        resetForm();
      }}
    >
      <div className="form-container">
        <div className="form-container--info">
          <h1>Registro</h1>
          <Form className="form">
            <label htmlFor="usuario" className="label">
              Usuario
            </label>
            <Field name="usuario" type="text" className="input" />
            <ErrorMessage name="usuario">
              {(msg) => <div className="error">{msg}</div>}
            </ErrorMessage>

            <label htmlFor="email" className="label">
              Email
            </label>
            <Field name="email" type="text" className="input" />
            <ErrorMessage name="email">
              {(msg) => <div className="error">{msg}</div>}
            </ErrorMessage>

            <label htmlFor="contraseña" className="label">
              Contraseña
            </label>
            <Field name="contraseña" type="password" className="input" />
            <ErrorMessage name="contraseña">
              {(msg) => <div className="error">{msg}</div>}
            </ErrorMessage>

            <button type="submit" className="button">
              Registrarme
            </button>
          </Form>
        </div>
        <span className="link-auth">
          {' '}
          ¿Ya tienes cuenta?
          <Link to="/login">Ingresar</Link>
        </span>
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />{' '}
      </div>
    </Formik>
  );
};

export default Register;
