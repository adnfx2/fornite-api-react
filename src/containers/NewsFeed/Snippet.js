import React from "react";
import style from "./Snippet.module.scss";

const Snippet = ({ title, body, meta: { mainColor } }) => (
  <React.Fragment>
    <div
      className={style.container}
      style={{
        background: mainColor.length < 7 ? "slategray" : mainColor
      }}
    >
      <h3 className={style.title}>{title}</h3>
      <p className={style.body}>{body}</p>
    </div>
  </React.Fragment>
);

export default Snippet;
