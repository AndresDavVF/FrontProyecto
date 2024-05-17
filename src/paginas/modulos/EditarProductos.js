import React, { useState, useEffect } from "react";
import ContentHeader from "../../componentes/ContentHeader";
import Footer from "../../componentes/Footer";
import Navbar from "../../componentes/Navbar";
import SidebarContainer from "../../componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import { useNavigate, useParams} from "react-router-dom";

const EditarProducto = () => {
    const [ referencia, setReferencia] = useState('');
    const [ garantia, setGarantia] = useState('');
    const [ precio, setPrecio] = useState('');
    const [ proveedor, setProveedor] = useState('');
    const navigate =useNavigate();
    const {id}=useParams();

    const editarProductos = async (e) =>{
        e.preventDefault();
        await APIInvoke.invokePUT(`/api/productos/${id}`,{
            referencia:referencia, garantia:garantia, precio:precio, proveedor:proveedor
        })
        navigate('/productos');
    }
    useEffect(() => {
        getProductosid();
        // eslint-disable-next-line
      }, []);

    const getProductosid = async () =>{
        const resul = await APIInvoke.invokeGET(`/api/productos/${id}`)
        setReferencia(resul.referencia)
        setGarantia(resul.garantia)
        setPrecio(resul.precio)
        setProveedor(resul.proveedor)
    }


  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Editar Productos"}
          breadcrumb1={"Listado Productos"}
          breadcrumb2={"Editar"}
          ruta1={"/productos"}
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
                <form onSubmit={editarProductos}>

                    <div className="card-body" >
                        <div className="form-group">
                            <label htmlFor="referencia">Referencia</label>
                            <input type="text"
                            className="form-control"
                            id="referencia"
                            name="referencia"
                            placeholder="ingrese la referencia del Producto"
                            value={referencia}
                            onChange={(e) => setReferencia(e.target.value)}
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
                            placeholder="ingrese la garantia del Producto"
                            value={garantia}
                            onChange={(e) => setGarantia(e.target.value)}
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
                            placeholder="ingrese el precio del Producto"
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
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
                            <label htmlFor="proveedor">Proveedor</label>
                            <input type="text"
                            className="form-control"
                            id="proveedor"
                            name="proveedor"
                            placeholder="ingrese el proveedor del Producto"
                            value={proveedor}
                            onChange={(e) => setProveedor(e.target.value)}
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

export default EditarProducto