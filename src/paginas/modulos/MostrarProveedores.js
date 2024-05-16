import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";

const MostrarProveedores = () => {
  const [proveedores, setProveedores] = useState([]);

  const getProveedores = async () => {
    const response = await APIInvoke.invokeGET("/api/proveedores");
    setProveedores(response.proveedores);
  };

  useEffect(() => {
    getProveedores();
  }, []);

  const eliminarProveedores = async (e, idProveedor) => {
    e.preventDefault();
    const response = await APIInvoke.invokeDELETE(`/api/proveedores/${idProveedor}`);

    if (response.msg === "El proveedor Fue eliminado") {
      const msg = "El proveedor Fue eliminado Correctamente";
      swal({
        title: "informacion",
        text: msg,
        icon: "success",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
          },
        },
      });
      getProveedores();
    } else {
      const msg = "El proveedor NO Fue eliminado Correctamente";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    }
  };
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Listado de Proveedores"}
          breadcrumb1={"Inicio"}
          breadcrumb2={"Proveedores"}
          ruta1={"/home"}
        />
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <Link
                  to={"/proveedores/agregar"}
                  className="btn btn-block btn-primary btn-sm"
                >
                  Agregar
                </Link>
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
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{ width: "20%" }}>Nombre</th>
                    <th style={{ width: "20%" }}>Nit</th>
                    <th style={{ width: "20%" }}>Correo</th>
                    <th style={{ width: "10%" }}>Telefono</th>
                    <th style={{ width: "20%" }}>Direccion</th>
                    <th style={{ width: "10%" }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {proveedores.map((proveedor, index) => (
                    <tr key={index}>
                      <td>{proveedor.nombre}</td>
                      <td>{proveedor.nit}</td>
                      <td>{proveedor.correo}</td>
                      <td>{proveedor.telefono}</td>
                      <td>{proveedor.direccion}</td>
                      <td>
                        <Link
                          to={`/proveedores/editar/${proveedor._id}`}
                          className="btn btn-sm btn-primary"
                        >
                          Editar
                        </Link>
                        <button
                          onClick={(e) => eliminarProveedores(e, proveedor._id)}
                          className="btn btn-sm btn-danger"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MostrarProveedores;
