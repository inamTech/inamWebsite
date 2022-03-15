import React from "react";
import ReactDOM from "react-dom";
import "animate.css";

import styles from "./SideDrawer.module.css";

function SideDrawer(props) {
  const content = (
    // <CSSTransition
    //   in={props.show}
    //   timeout={200}
    //   classNames="slide-in-left"
    //   mountOnEnter
    //   unmountOnExit
    // >

    <aside
      className={`${styles.sideDrawer} animate__animated animate__slideInRight `}
      onClick={props.onClick}
    >
      {props.children}
    </aside>
    // </CSSTransition>
  );

  return (
    props.show &&
    ReactDOM.createPortal(content, document.getElementById("drawer-hook"))
  );
}

export default SideDrawer;
