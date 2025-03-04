import React,{Fragment} from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Login from "./paginas/auth/Login";
import Registro from "./paginas/auth/Registro";
import Home from './Home';
import MostrarClientes from "./paginas/modulos/MostrarClientes";
import AgregarClientes from "./paginas/modulos/AgregarClientes";
import EditarCliente from "./paginas/modulos/EditarCliente";
import MostrarProductos from "./paginas/modulos/MostrarProductos";
import MostrarProveedores from "./paginas/modulos/MostrarProveedores";
import AgregarProductos from "./paginas/modulos/AgregarProductos";
import EditarProducto from "./paginas/modulos/EditarProductos";
import AgregarProveedores from "./paginas/modulos/AgregarProveedores";
import EditarProveedor from "./paginas/modulos/EditarProveedores";

function App() {
  return (
    <div className="App">
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" exact element={<Login/>}></Route>
            <Route path="/Registro" exact element={<Registro/>}></Route>
            <Route path="/home" exact element={<Home/>}></Route>
            <Route path="/clientes" exact element={<MostrarClientes/>}></Route>
            <Route path="/clientes/agregar" exact element={<AgregarClientes/>}></Route>
            <Route path="/clientes/editar/:id" exact element={<EditarCliente/>}></Route>
            <Route path="/productos" exact element={<MostrarProductos/>}></Route>
            <Route path="/productos/agregar" exact element={<AgregarProductos/>}></Route>
            <Route path="/productos/editar/:id" exact element={<EditarProducto/>}></Route>
            <Route path="/proveedores" exact element={<MostrarProveedores/>}></Route>
            <Route path="/proveedores/agregar" exact element={<AgregarProveedores/>}></Route>
            <Route path="/proveedores/editar/:id" exact element={<EditarProveedor/>}></Route>
          </Routes>
        </Router>
      </Fragment>
    </div>
    
  );
}

export default App;
