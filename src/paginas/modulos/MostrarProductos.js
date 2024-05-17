import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";

const MostrarProductos = () => {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    const response = await APIInvoke.invokeGET("/api/productos");
    setProductos(response.productos);
  };

  useEffect(() => {
    getProductos();
  }, []);

  const eliminarProductos = async (e, idProducto) => {
    e.preventDefault();
    const response = await APIInvoke.invokeDELETE(`/api/productos/${idProducto}`);
    
    if (response.msg === "El Producto Fue eliminado") {
      const msg = "El producto Fue eliminado Correctamente";
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
      getProductos();
    } else {
      const msg = "El producto NO Fue eliminado Correctamente";
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
          titulo={"Listado de Productos"}
          breadcrumb1={"Inicio"}
          breadcrumb2={"Productos"}
          ruta1={"/home"}
        />
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <Link
                  to={"/productos/agregar"}
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
                    <th style={{ width: "20%" }}>Referencia</th>
                    <th style={{ width: "20%" }}>Garantia</th>
                    <th style={{ width: "20%" }}>Precio</th>
                    <th style={{ width: "20%" }}>Proveedor</th>
                    <th style={{ width: "20%" }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map((producto, index) => (
                    <tr key={index}>
                      <td>{producto.referencia}</td>
                      <td>{producto.garantia}</td>
                      <td>{producto.precio}</td>
                      <td>{producto.proveedor}</td>
                      <td>
                        <Link
                          to={`/productos/editar/${producto._id}`}
                          className="btn btn-sm btn-primary"
                        >
                          Editar
                        </Link>
                        <button
                          onClick={(e) => eliminarProductos(e, producto._id)}
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

export default MostrarProductos;
