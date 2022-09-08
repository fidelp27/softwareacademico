import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './maintenance.css';
import ButtonCreate from '../clients/buttonAction/create';
import { useInterest, useRenderClients } from '../../context/customerContext';
import { postCreateClient } from '../../helpers';
import { ToastContainer, toast } from 'react-toastify';

const FormCreateClient = () => {
  const date = new Date().toLocaleDateString('fr-CA');
  const intereses = useInterest();
  const renderClients = useRenderClients();

  const createClient = async (values) => {
    try {
      const res = await postCreateClient(values);
      res.status === 200 &&
        toast.success('Cliente creado satisfactoriamente', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{
        nombre: '',
        apellidos: '',
        identificacion: '',
        celular: '',
        otroTelefono: '',
        direccion: '',
        fNacimiento: '',
        fAfiliacion: date,
        sexo: '',
        resennaPersonal: '',
        imagen: '',
        interesFK: '',
        usuarioId: localStorage.getItem('userid'),
      }}
      validationSchema={Yup.object({
        nombre: Yup.string()
          .required('Campo obligatorio')
          .max(50, 'Este campo admite hasta 50 caracteres'),
        apellidos: Yup.string()
          .required('Campo obligatorio')
          .max(100, 'Este campo admite hasta 100 caracteres'),
        identificacion: Yup.string()
          .matches(/^[0-9]+$/, 'Este campo solo admite números')
          .required('Campo obligatorio')
          .max(20, 'Este campo admite hasta 20 caracteres'),
        celular: Yup.string()
          .required('Campo obligatorio')
          .max(20, 'Este campo admite hasta 20 caracteres'),
        otroTelefono: Yup.string()
          .required('Campo obligatorio')
          .max(20, 'Este campo admite hasta 20 caracteres'),
        direccion: Yup.string()
          .required('Campo obligatorio')
          .max(200, 'Este campo admite hasta 200 caracteres'),
        fNacimiento: Yup.string().required('Campo obligatorio'),

        sexo: Yup.string()
          .required('Campo obligatorio')
          .max(1, 'Solo admite una letra'),
        resennaPersonal: Yup.string().max(
          200,
          'Este campo admite hasta 200 caracteres'
        ),
      })}
      onSubmit={(values, { resetForm }) => {
        createClient(values);
        renderClients();
        resetForm();
      }}
    >
      <div className="form-container">
        <div className="form-container--data">
          <Form className="form">
            <div className="input-group">
              <Field
                name="nombre"
                type="text"
                className="input"
                placeholder="Nombre*"
              />
              <ErrorMessage name="nombre">
                {(msg) => <div className="error">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="input-group">
              <Field
                name="apellidos"
                type="text"
                className="input"
                placeholder="Apellido*"
              />
              <ErrorMessage name="apellido">
                {(msg) => <div className="error">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="input-group">
              <Field
                name="identificacion"
                type="text"
                className="input"
                placeholder="Identificación*"
              />
              <ErrorMessage name="identificacion">
                {(msg) => <div className="error">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="input-group">
              <Field
                name="celular"
                type="tel"
                className="input"
                placeholder="Teléfono celular*"
              />
              <ErrorMessage name="celular">
                {(msg) => <div className="error">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="input-group">
              <Field
                name="otroTelefono"
                type="tel"
                className="input"
                placeholder="Otro teléfono*"
              />
              <ErrorMessage name="otroTelefono">
                {(msg) => <div className="error">{msg}</div>}
              </ErrorMessage>
            </div>

            <div className="input-group">
              <Field name="fNacimiento" type="date" className="input" />
              <ErrorMessage name="fNacimiento">
                {(msg) => <div className="error">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="input-group">
              <Field name="fAfiliacion" type="date" className="input" />
            </div>
            <div className="input-group input-group--select">
              <Field name="sexo" as="select">
                <option value="" disabled>
                  Género
                </option>
                <option value="M">M</option>
                <option value="F">F</option>
              </Field>
              <ErrorMessage name="sexo">
                {(msg) => <div className="error">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="input-group input-group--select">
              <Field name="interesFK" as="select">
                <option value="" disabled>
                  Interés
                </option>
                {React.Children.toArray(
                  intereses.map((elem) => {
                    return <option value={elem.id}>{elem.descripcion} </option>;
                  })
                )}
              </Field>
            </div>
            <div className="input-group">
              <Field
                name="direccion"
                type="text"
                className="input input-address"
                placeholder="Dirección*"
              />
              <ErrorMessage name="direccion">
                {(msg) => <div className="error">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="input-group input-group--textarea">
              <Field
                name="resennaPersonal"
                as="textarea"
                className="input input-textarea"
                placeholder="Reseña Personal (max 200 caracteres) "
              />
              <ErrorMessage name="resennaPersonal">
                {(msg) => <div className="error">{msg}</div>}
              </ErrorMessage>
            </div>
            <ButtonCreate />
          </Form>
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
      </div>
    </Formik>
  );
};

export default FormCreateClient;
