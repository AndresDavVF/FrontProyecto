import React, { useState, useEffect } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";
import { useNavigate} from "react-router-dom";

const AgregarProductos = () => {

const navigate= useNavigate();

  const [productos, setProductos] = useState({
    referencia: "",
    garantia: "",
    precio: "",
    proveedor: ""
  });
  const { referencia, garantia, precio, proveedor} = productos;

  useEffect(() => {
    document.getElementById("referencia").focus();
  }, []);

  const onChange = (e) => {
    setProductos({
      ...productos,
      [e.target.name]: e.target.value,
    });
  };

  const CrearProductos = async () => {
    const data = {
        referencia: productos.referencia,
        garantia: productos.garantia,
        precio: productos.precio,
        proveedor: productos.proveedor,
    };
    const response = await APIInvoke.invokePOST("/api/productos", data);
    const idProductos = response._id;

    if (idProductos === "") {
      const msg = "Hubo un error al Agregar un producto";
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
      navigate("/productos");
      const msg = "El producto Fue Agregado con Exito";
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
      setProductos({
        referencia: "",
        garantia: "",
        precio: "",
        proveedor: "",
      });
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    CrearProductos();
  };

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Agregar Productos"}
          breadcrumb1={"Listado Productos"}
          breadcrumb2={"agregar"}
          ruta1={"/Productos"}
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
                            <label htmlFor="referencia">Referencia</label>
                            <input type="text"
                            className="form-control"
                            id="referencia"
                            name="referencia"
                            placeholder="ingrese la Referencia del Producto"
                            value={referencia}
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
                            <label htmlFor="garantia">Garantia</label>
                            <input type="text"
                            className="form-control"
                            id="garantia"
                            name="garantia"
                            placeholder="ingrese la Garantia del producto"
                            value={garantia}
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
                            <label htmlFor="precio">Precio</label>
                            <input type="number"
                            className="form-control"
                            id="precio"
                            name="precio"
                            placeholder="Ingrese el Precio del Producto"
                            value={precio}
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
                            <label htmlFor="proveedor">proveedor</label>
                            <input type="text"
                            className="form-control"
                            id="proveedor"
                            name="proveedor"
                            placeholder="ingrese el proveedor del Producto"
                            value={proveedor}
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

export default AgregarProductos;
