import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import './maintenance.css';
import ButtonCreate from '../clients/buttonAction/create';
import { useInterest } from '../../context/customerContext';

const FormCreateClient = () => {
  const code = uuidv4();
  const date = new Date().toLocaleDateString('fr-CA');
  const intereses = useInterest();
  return (
    <Formik
      initialValues={{
        nombre: '',
        apellido: '',
        identificacion: '',
        telefonoCelular: '',
        otroTelefono: '',
        direccion: '',
        fNacimiento: '',
        fAfiliacion: date,
        sexo: '',
        resennaPersonal: '',
        imagen: '',
        interesesFK: '',
        usuarioId: localStorage.getItem('user'),
      }}
      validationSchema={Yup.object({
        nombre: Yup.string()
          .required('Campo obligatorio')
          .max(50, 'Este campo admite hasta 50 caracteres'),
        apellido: Yup.string()
          .required('Campo obligatorio')
          .max(100, 'Este campo admite hasta 100 caracteres'),
        identificacion: Yup.string()
          .matches(/^[0-9]+$/, 'Este campo solo admite números')
          .required('Campo obligatorio')
          .max(20, 'Este campo admite hasta 20 caracteres'),
        telefonoCelular: Yup.string()
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
        resenaPersonal: Yup.string().max(
          200,
          'Este campo admite hasta 200 caracteres'
        ),
      })}
      onSubmit={(values, { resetForm }) => {
        console.log(values);

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
                name="apellido"
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
                name="telefonoCelular"
                type="tel"
                className="input"
                placeholder="Teléfono celular*"
              />
              <ErrorMessage name="telefonoCelular">
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
              <Field name="interesesFK" as="select">
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
        </div>
      </div>
    </Formik>
  );
};

export default FormCreateClient;
