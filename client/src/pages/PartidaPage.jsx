import React from "react";
import { Link, Navigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { colors } from "@mui/material";
// import { ControlBar, Player } from "video-react";
// import "video-react/dist/video-react.css";

const PartidaPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url("/cielo.jpg")`,
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
            flexDirection: "column"
          }}
          className="opciones"
        >
          <h2 style={{ color: "white" }}>
            Todos los días
            entramos al cole corriendo, y hoy se ha caído un niño. ¿Qué puedo
            hacer?
          </h2>
        </div>

        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
            padding: "2rem 4rem",
            justifyContent: "space-between",
          }}
        >
          <Link className="links" to="/pasiva">
            <button className="mi-btn-caso">
              Llego tarde, ya le ayudará alguien.
            </button>
          </Link>

          <Link className="links" to="/victoria">
            <button className="mi-btn-caso">
              Puedo ayudar a que se levante
            </button>
          </Link>

          <Link className="links" to="/victoria">
            <button className="mi-btn-caso">
              Puedo ayudarle y pedir ayuda por si se ha hecho daño.
            </button>
          </Link>

          <Link className="links" to="/agresiva">
            <button className="mi-btn-caso">
              JAJAJA ¡qué torpe! Me voy a clase.
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartidaPage;
