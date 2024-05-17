import React, { useState, useEffect } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";
import { useNavigate} from "react-router-dom";

const AgregarProveedores = () => {

const navigate= useNavigate();

  const [proveedores, setProveedores] = useState({
    nombre: "",
    nit: "",
    correo: "",
    telefono: "",
    direccion: "",
  });
  const { nombre, nit, correo, telefono, direccion } = proveedores;

  useEffect(() => {
    document.getElementById("nombre").focus();
  }, []);

  const onChange = (e) => {
    setProveedores({
      ...proveedores,
      [e.target.name]: e.target.value,
    });
  };

  const CrearProveedores = async () => {
    const data = {
      nombre: proveedores.nombre,
      nit: proveedores.nit,
      correo: proveedores.correo,
      telefono: proveedores.telefono,
      direccion: proveedores.direccion,
    };
    const response = await APIInvoke.invokePOST("/api/proveedores", data);
    const idProveedor = response._id;

    if (idProveedor === "") {
      const msg = "Hubo un error al Agregar un proveedor";
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
      navigate("/proveedores");
      const msg = "El proveedor Fue Agregado con Exito";
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
      setProveedores({
        nombre: "",
        nit: "",
        correo: "",
        telefono: "",
        direccion: "",
      });
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    CrearProveedores();
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Agregar Proveedor"}
          breadcrumb1={"Listado Proveedor"}
          breadcrumb2={"agregar"}
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
                <form onSubmit={onSubmit}>

                    <div className="card-body" >
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text"
                            className="form-control"
                            id="nombre"
                            name="nombre"
                            placeholder="ingrese los nombre del Proveedor"
                            value={nombre}
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
                            <label htmlFor="nit">Nit</label>
                            <input type="number"
                            className="form-control"
                            id="nit"
                            name="nit"
                            placeholder="ingrese la nit del Proveedor"
                            value={nit}
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
                            placeholder="ingrese el correo del Proveedor"
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
                            placeholder="ingrese el telefono del Proveedor"
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
                            placeholder="ingrese la direccion del Proveedor"
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

export default AgregarProveedores;