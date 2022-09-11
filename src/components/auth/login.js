import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './auth.css';
import { useSetToken, useSetUser } from '../../context/authContext';
import { getAuth, getInterest } from '../../helpers';
import {
  useRenderClients,
  useSetInterest,
} from '../../context/customerContext';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const setToken = useSetToken();
  const setUser = useSetUser();
  const setInterest = useSetInterest();
  const renderClients = useRenderClients();

  const getListInterest = async () => {
    const resp = await getInterest();
    setInterest(resp);
  };

  const rememberUser = (values) => {
    values.remember && localStorage.setItem('userName', values.usuario);
  };

  const saveLocalStorage = async (values) => {
    try {
      const res = await getAuth(values);
      localStorage.setItem('token', res?.data?.token);
      localStorage.setItem('user', res?.data?.username);
      localStorage.setItem('userid', res?.data?.userid);
      setToken(localStorage.getItem('token'));
      setUser(localStorage.getItem('user'));
      getListInterest();
      renderClients();
      navigate('/', { replace: true });
    } catch (error) {
      error &&
        toast.error('Usuario no autorizado, por favor regístrate ', {
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
      initialValues={{
        usuario: localStorage.getItem('userName') || '',
        contraseña: '',
      }}
      validationSchema={Yup.object({
        usuario: Yup.string().required('Campo obligatorio'),
        contraseña: Yup.string().required('Campo obligatorio'),
      })}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        saveLocalStorage(values);
        // rememberUser(values);
        resetForm();
      }}
    >
      <div className="form-container">
        <div className="form-container--info">
          <h1>Inicio de sesión</h1>
          <Form className="form">
            <label htmlFor="usuario" className="label">
              Usuario
            </label>
            <Field name="usuario" type="text" className="input" />
            <ErrorMessage name="usuario">
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
              Ingresar
            </button>
            <label className="label label-checkbox" name="remember">
              {' '}
              <Field name="remember" type="checkbox" />
              Recuérdame
            </label>
          </Form>
        </div>
        <span className="link-auth">
          {' '}
          ¿No tienes cuenta?
          <Link to="/register">Registrarse</Link>
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

export default Login;
