import React, { useState, useEffect } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";
import { useNavigate} from "react-router-dom";

const AgregarClientes = () => {

const navigate= useNavigate();

  const [clientes, setClientes] = useState({
    nombres: "",
    apellidos: "",
    cedula: "",
    correo: "",
    telefono: "",
    direccion: "",
  });
  const { nombres, apellidos, cedula, correo, telefono, direccion } = clientes;

  useEffect(() => {
    document.getElementById("nombres").focus();
  }, []);

  const onChange = (e) => {
    setClientes({
      ...clientes,
      [e.target.name]: e.target.value,
    });
  };

  const CrearClientes = async () => {
    const data = {
      nombres: clientes.nombres,
      apellidos: clientes.apellidos,
      cedula: clientes.cedula,
      correo: clientes.correo,
      telefono: clientes.telefono,
      direccion: clientes.direccion,
    };
    const response = await APIInvoke.invokePOST("/api/clientes", data);
    const idClientes = response._id;

    if (idClientes === "") {
      const msg = "Hubo un error al Agregar un cliente";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "ok",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    } else {
      navigate("/clientes");
      const msg = "El clientes Fue Agregado con Exito";
      swal({
        title: "Informacion",
        text: msg,
        icon: "success",
        buttons: {
          confirm: {
            text: "ok",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
          },
        },
      });
      setClientes({
        nombres: "",
        apellidos: "",
        cedula: "",
        correo: "",
        telefono: "",
        direccion: "",
      });
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    CrearClientes();
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Agregar CLientes"}
          breadcrumb1={"Listado Clientes"}
          breadcrumb2={"agregar"}
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
                <form onSubmit={onSubmit}>

                    <div className="card-body" >
                        <div className="form-group">
                            <label htmlFor="nombres">Nombres</label>
                            <input type="text"
                            className="form-control"
                            id="nombres"
                            name="nombres"
                            placeholder="ingrese los nombres del CLiente"
                            value={nombres}
                            onChange={onChange}
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
                            onChange={onChange}
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
                            onChange={onChange}
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
                            onChange={onChange}
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
                            onChange={onChange}
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
                            onChange={onChange}
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
                            Agegar
                        </button>
                    </div>
                </form>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AgregarClientes;
