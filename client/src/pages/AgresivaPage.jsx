import React from "react";
import { Link, Navigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { colors } from "@mui/material";
// import { ControlBar, Player } from "video-react";
// import "video-react/dist/video-react.css";

const AgresivaPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url("/tormenta.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <Player ref={videoRef} playsInline autoPlay muted>
          <source src="/background-main.mp4" type="video/mp4" />
          <ControlBar disableDefaultControls={true} autoHide={false} />
        </Player> */}

      <div className="recuadro">
        <div
          style={{
            display: "flex",
            padding: "2rem 4rem",
            gap: "1rem",
            flexDirection: "column",
          }}
          className="opciones"
        >
          <h2 style={{ color: "white" }}>
          P-¿Qué te ha pasado?
A-Me he caído en el pasillo y nadie me ha ayudado. 
P-¿Cómo pensáis que se siente vuestro compañero?
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1rem",
            padding: "2rem 4rem",
            gridTemplateColumns:"repeat(2,1fr)"
          }}
        >
          <Link className="links" to="/victoria">
            <button className="mi-btn-caso-redencion">
            Mal, sé que no lo he hecho bien y le acompaño a la enfermería.
            </button>
          </Link>

          <Link className="links" to="/fracaso">
            <button className="mi-btn-caso-redencion">
            Me callo, ha sido muy gracioso. 
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AgresivaPage;
