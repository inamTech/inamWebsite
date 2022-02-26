// This component is to keep the background blue when using the margin-top css atribute within the header component.

import React from "react";

export default function BlueBg(props) {
  return (
    <div style={{ backgroundColor: "var(--main-bg-color)" }}>
      {props.children}
    </div>
  );
}
