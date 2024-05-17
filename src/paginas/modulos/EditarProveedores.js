import React, { useState, useEffect } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import { useNavigate, useParams} from "react-router-dom";

const EditarProveedor = () => {
    const [ nombre, setNombre] = useState('');
    const [ nit, setNit] = useState('');
    const [ correo, setCorreo] = useState('');
    const [ telefono, setTelefono] = useState('');
    const [ direccion, setDireccion] = useState('');
    const navigate =useNavigate();
    const {id}=useParams();

    const editarProveedor = async (e) =>{
        e.preventDefault();
        await APIInvoke.invokePUT(`/api/proveedores/${id}`,{
            nombre:nombre, nit:nit, correo:correo, telefono:telefono,direccion:direccion
        })
        navigate('/proveedores');
    }
    useEffect(() => {
        getProveedoresid();
        // eslint-disable-next-line
      }, []);

    const getProveedoresid = async () =>{
        const resul = await APIInvoke.invokeGET(`/api/proveedores/${id}`)
        setNombre(resul.nombre)
        setNit(resul.nit)
        setCorreo(resul.correo)
        setTelefono(resul.telefono)
        setDireccion(resul.direccion)
    }


  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Editar Proveedores"}
          breadcrumb1={"Listado Proveedores"}
          breadcrumb2={"Editar"}
          ruta1={"/proveedores"}
        />
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
              </h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className="fas fa-items"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                  title="Remove"
                >
                  <i className="fas fa-items"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
                <form onSubmit={editarProveedor}>

                    <div className="card-body" >
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text"
                            className="form-control"
                            id="nombre"
                            name="nombre"
                            placeholder="ingrese los nombres del Proveedor"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                            />
                        </div>
                    </div>
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-envelope"/>
                        </div>
                    </div>

                    <div className="card-body" >
                        <div className="form-group">
                            <label htmlFor="nit">Nit</label>
                            <input type="number"
                            className="form-control"
                            id="nit"
                            name="nit"
                            placeholder="ingrese la Nit del Proveedor"
                            value={nit}
                            onChange={(e) => setNit(e.target.value)}
                            required
                            />
                        </div>
                    </div>
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-envelope"/>
                        </div>
                    </div>


                    <div className="card-body" >
                        <div className="form-group">
                            <label htmlFor="correo">Correo</label>
                            <input type="text"
                            className="form-control"
                            id="correo"
                            name="correo"
                            placeholder="ingrese el correo del Proveedor"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                            />
                        </div>
                    </div>
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-envelope"/>
                        </div>
                    </div>


                    <div className="card-body" >
                        <div className="form-group">
                            <label htmlFor="telefono">Telefono</label>
                            <input type="number"
                            className="form-control"
                            id="telefono"
                            name="telefono"
                            placeholder="ingrese el telefono del Proveedor"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                            required
                            />
                        </div>
                    </div>
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-envelope"/>
                        </div>
                    </div>


                    <div className="card-body" >
                        <div className="form-group">
                            <label htmlFor="direccion">Direccion</label>
                            <input type="text"
                            className="form-control"
                            id="direccion"
                            name="direccion"
                            placeholder="ingrese la direccion del Proveedor"
                            value={direccion}
                            onChange={(e) => setDireccion(e.target.value)}
                            required
                            />
                        </div>
                    </div>
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <span className="fas fa-envelope"/>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary">
                            Editar
                        </button>
                    </div>
                </form>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default EditarProveedor