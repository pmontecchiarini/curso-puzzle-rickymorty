import React from "react";
import styles from "./login.module.css";
import { connect } from "react-redux";
import { doGoogleLoginAction, logOutAction } from "../../redux/userDuck";

function LoginPage({ loggedIn, fetching, doGoogleLoginAction, logOutAction }) {
  function doLogin() {
    doGoogleLoginAction();
  }

  function logOut (){
    logOutAction()
  }

  if (fetching) return <h2>Cargando...</h2>;
  return (
    <div className={styles.container}>
      {loggedIn ? <h1>Inicia Sesión con Google</h1> : <h1>Cierra tu sesión</h1>}
      {loggedIn ? <button onClick={doLogin}>Iniciar</button> : <button onClick={logOut}>Cerrar Sesión</button>}

    </div>
  );
}

function mapStateToProps({ user: { fetching, loggedIn } }) {
  return {
    fetching,
    loggedIn,
  };
}

export default connect(mapStateToProps, { doGoogleLoginAction, logOutAction })(LoginPage);
