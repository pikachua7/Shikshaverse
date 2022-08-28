import React from "react";
import ReactDOM from "react-dom";

//import about from "./img/about.jpg";


function First() {
  return (
    <div className="App">
      <Pannellum
        width="100%"
        height="500px"
        //image={about}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showZoomCtrl={false}
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={31}
          yaw={150}
          handleClick={(evt, name) => console.log(name)}
          name="hs1"
        />
      </Pannellum>
    </div>
  );
}

export default First;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
