import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";
const Registro = () => {


  // definimos el estado inicial de un componente
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  const { nombre, email, password, confirmar } = usuario;
  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    document.getElementById("nombre").focus();
  }, []);

  const RegistroCuenta = async () => {
    if (password !== confirmar) {
      const msg = "las Contraseñas Son diferentes";
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
          }
        }
      });
    } else if (password.length < 8) {
      const msg = "la contraseña debe tener minimo 8 caracteres";
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
          }
        }
      });
    } else {
      const data = {
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password,
      };
      const response = await APIInvoke.invokePOST('/api/usuarios', data);
      const mensaje = response.msg;
      if (mensaje === " el Usuario ya Existe" ) {
        const msg = " El usuario ya Existe";
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
            }
          }
        });
      } else {
        const msg = "El usuario Fue Creado Existosamente";
      swal({
        title: "Informacion",
        text: msg,
        icon: "success",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-primary",
            closeModal: true,
          }
        }
      });
       setUsuario({
        nombre:'',
        email:'',
        password:'',
        confirmar:''
       })
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    RegistroCuenta();
  };

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <Link to={"#"}>
            <b>Crear </b>Cuenta
          </Link>
        </div>

        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Ingrese los datos de Usuario</p>

            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />

                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  className="form-control"
                  placeholder="Confirmar password"
                  type="password"
                  id="confirmar"
                  name="confirmar"
                  value={confirmar}
                  onChange={onChange}
                  required
                />

                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>

              <div className="social-auth-links textcenter mb-3">
                <button type="submit" className="btn btn-block btn-primary">
                  Registrar
                </button>
                
              </div>
              <Link to={"/"}>
              <button type="button" className="btn btn-block btn-success">
                Login
              </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
