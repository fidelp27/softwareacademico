import axios from 'axios';

// Login usuario
export const getAuth = async (values) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_ENDPOINT}api/Authenticate/login`,
    {
      username: values.usuario,
      password: values.contraseña,
    }
  );
  console.log(res);
  return res;
};

// Registrar usuario
export const onRegister = async (values) => {
  let data = JSON.stringify({
    username: values.usuario,
    email: values.email,
    password: values.contraseña,
  });

  let config = {
    method: 'post',
    url: `${process.env.REACT_APP_API_ENDPOINT}api/Authenticate/register`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };
  const res = await axios(config);
  console.log(res);
  return res;
};

// Crear clientes
export const postCreateClient = async (values) => {
  let data = JSON.stringify({
    nombre: values.nombre,
    apellidos: values.apellidos,
    identificacion: values.identificacion,
    celular: values.celular,
    otroTelefono: values.otroTelefono,
    direccion: values.direccion,
    fNacimiento: values.fNacimiento,
    fAfiliacion: values.fAfiliacion,
    sexo: values.sexo,
    resennaPersonal: values.resennaPersonal,
    imagen: '',
    interesFK: values.interesFK,
    usuarioId: localStorage.getItem('userid'),
  });

  let config = {
    method: 'post',
    url: `${process.env.REACT_APP_API_ENDPOINT}api/Cliente/Crear`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
    data: data,
  };
  const res = await axios(config);
  return res;
};

// Obtener clientes
export const getClients = async () => {
  let data = JSON.stringify({
    identificacion: '',
    nombre: '',
    usuarioId: localStorage.getItem('userid'),
  });

  let config = {
    method: 'post',
    url: `${process.env.REACT_APP_API_ENDPOINT}api/Cliente/Listado`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
    data: data,
  };
  const res = await axios(config);
  return res.data;
};

// Intereses
export const getInterest = async () => {
  let config = {
    method: 'get',
    url: `${process.env.REACT_APP_API_ENDPOINT}api/Intereses/Listado`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  };

  const res = await axios(config);
  return res.data;
};

//Delete

export const deleteClient = async (id) => {
  let config = {
    method: 'delete',
    url: `${process.env.REACT_APP_API_ENDPOINT}api/Cliente/Eliminar/${id}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  };
  const res = await axios(config);
  return res;
};

//Traer cliente
export const getClient = async (id) => {
  let data = JSON.stringify({
    identificacion: '',
    nombre: '',
    usuarioId: localStorage.getItem('userid'),
  });

  let config = {
    method: 'get',
    url: `${process.env.REACT_APP_API_ENDPOINT}api/Cliente/Obtener/${id}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
    data: data,
  };
  const res = await axios(config);
  return res.data;
};
//Actualizar clientes
export const updateClientAxios = async (values) => {
  let data = JSON.stringify({
    id: values.id,
    nombre: values.nombre,
    apellidos: values.apellidos,
    identificacion: values.identificacion,
    celular: values.celular,
    otroTelefono: values.otroTelefono,
    direccion: values.direccion,
    fNacimiento: values.fNacimiento,
    fAfiliacion: values.fAfiliacion,
    sexo: values.sexo,
    resennaPersonal: values.resennaPersonal,
    imagen: '',
    interesFK: values.interesFK,
    usuarioId: localStorage.getItem('userid'),
  });

  let config = {
    method: 'post',
    url: `${process.env.REACT_APP_API_ENDPOINT}api/Cliente/Actualizar`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
    data: data,
  };
  const res = await axios(config);
  return res;
};
