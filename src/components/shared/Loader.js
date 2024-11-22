import React from "react";
import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div style={{width: "100%", height: "100px", display: "flex", justifyContent: "center", paddingTop: "20px" }}>
      <TailSpin
        visible={true}
        height="100"
        width="100"
        color="#1976d2"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
