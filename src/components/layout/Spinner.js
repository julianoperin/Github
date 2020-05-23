import React from "react";
import Spinner from "./Spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={Spinner}
        alt="loading"
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
