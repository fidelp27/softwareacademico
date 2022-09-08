import './App.css';
import Login from './components/auth/login';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/auth/register';
import Error404 from './components/404';
import Welcome from './components/welcome';
import Navbar from './components/nav';
import AsideMenu from './components/aside/aside';
import CreateClients from './components/createClient/index';
import ViewClients from './views/viewClients.js';

export const RequiredAuth = ({ children }) => {
  if (!localStorage.getItem('token')) {
    return <Navigate to="/login" replace={true} />;
  } else {
    return children;
  }
};

function App() {
  return (
    <>
      <Navbar />
      <div className="container-view-content">
        <AsideMenu />
        <Routes>
          <Route
            path="/"
            element={
              <RequiredAuth>
                <Welcome />
              </RequiredAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error404 />} />
          <Route
            path="/clients"
            element={
              <RequiredAuth>
                <ViewClients />
              </RequiredAuth>
            }
          />
          <Route path="/createClient" element={<CreateClients />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
