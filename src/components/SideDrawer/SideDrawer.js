import React from "react";
import ReactDOM from "react-dom";
import "animate.css";

import styles from "./SideDrawer.module.css";

function SideDrawer(props) {
  const content = (
    <aside
      className={`${styles.sideDrawer} animate__animated animate__slideInRight `}
      onClick={props.onClick}
    >
      {props.children}
    </aside>
  );

  return (
    props.show &&
    ReactDOM.createPortal(content, document.getElementById("drawer-hook"))
  );
}

export default SideDrawer;
