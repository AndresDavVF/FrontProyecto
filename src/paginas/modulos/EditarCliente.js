import React, { useState, useEffect } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import { useNavigate, useParams} from "react-router-dom";

const EditarCliente = () => {
    const [ nombres, setNombre] = useState('');
    const [ apellidos, setApellido] = useState('');
    const [ cedula, setCedula] = useState('');
    const [ correo, setCorreo] = useState('');
    const [ telefono, setTelefono] = useState('');
    const [ direccion, setDireccion] = useState('');
    const navigate =useNavigate();
    const {id}=useParams();

    const editarClientes = async (e) =>{
        e.preventDefault();
        await APIInvoke.invokePUT(`/api/clientes/${id}`,{
            nombres:nombres, apellidos:apellidos, cedula:cedula, correo:correo, telefono:telefono,direccion:direccion
        })
        navigate('/clientes');
    }
    useEffect(() => {
        getClientesid();
        // eslint-disable-next-line
      }, []);

    const getClientesid = async () =>{
        const resul = await APIInvoke.invokeGET(`/api/clientes/${id}`)
        setNombre(resul.nombres)
        setApellido(resul.apellidos)
        setCedula(resul.cedula)
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
          titulo={"Editar CLientes"}
          breadcrumb1={"Listado Clientes"}
          breadcrumb2={"Editar"}
          ruta1={"/clientes"}
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
                <form onSubmit={editarClientes}>

                    <div className="card-body" >
                        <div className="form-group">
                            <label htmlFor="nombres">Nombres</label>
                            <input type="text"
                            className="form-control"
                            id="nombres"
                            name="nombres"
                            placeholder="ingrese los nombres del CLiente"
                            value={nombres}
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
                            <label htmlFor="apellidos">Apellidos</label>
                            <input type="text"
                            className="form-control"
                            id="apellidos"
                            name="apellidos"
                            placeholder="ingrese los apellidos del CLiente"
                            value={apellidos}
                            onChange={(e) => setApellido(e.target.value)}
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
                            <label htmlFor="cedula">Cedula</label>
                            <input type="number"
                            className="form-control"
                            id="cedula"
                            name="cedula"
                            placeholder="ingrese la cedula del CLiente"
                            value={cedula}
                            onChange={(e) => setCedula(e.target.value)}
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
                            placeholder="ingrese el correo del CLiente"
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
                            placeholder="ingrese el telefono del CLiente"
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
                            placeholder="ingrese la direccion del CLiente"
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

export default EditarCliente