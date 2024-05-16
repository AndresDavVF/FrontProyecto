import React from "react";
import ContentHeader from "./componentes/ContentHeader";
import Footer from "./componentes/Footer";
import Navbar from "./componentes/Navbar";
import SidebarContainer from "./componentes/SidebarContainer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <SidebarContainer></SidebarContainer>
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Dashboard"}
          breadcrumb1={"inicio"}
          breadcrumb2={"Dashboard"}
          ruta1={"/home"}
        />
        <section className="content">
          <div className="cointainer-fliuid">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>Clientes</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-edit"></i>
                  </div>
                  <Link to={"/clientes"} className="small-box-footer"> Ver Clientes</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="cointainer-fliuid">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>Productos</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-edit"></i>
                  </div>
                  <Link to={"/productos"} className="small-box-footer"> Ver Productos</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="cointainer-fliuid">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>Proveedores</h3>
                    <p>&nbsp;</p>
                  </div>
                  <div className="icon">
                    <i className="fa fa-edit"></i>
                  </div>
                  <Link to={"/proveedores"} className="small-box-footer"> Ver Proveedores</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
