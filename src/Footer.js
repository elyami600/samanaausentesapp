import React from "react";
import Styles from "./about.module.css";
import samanaImg5 from './samana_img/samanaFlyer.jpeg';
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Event = () => {
    return (
        <div className={Styles.Event_container} style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
            <section className={Styles.Event_box} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", backgroundColor: "#f9f9f9", padding: "30px", borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}>
                <div className={Styles.Event_left} style={{ flex: "1", minWidth: "300px", padding: "20px" }}>
                    <h1 style={{ fontSize: "2rem", color: "#2c3e50", marginBottom: "15px" }}>🎉 Samanenses en el Exterior - 2da Edición 2025</h1>
                    <p style={{ fontSize: "1.1rem", color: "#444" }}>
                        <strong>La diáspora Samanenses en el Exterior</strong> tiene el placer de invitar a todos los samanenses a la
                        2da Edición de <strong>Samanenses Ausentes 2025</strong>.
                    </p>
                    <p style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#d35400" }}>📅 Fecha: Sábado, 19 de julio de 2025 (tercer sábado de julio – fecha oficial del evento)</p>
                    <p style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#2980b9" }}>📍 Lugar: Nueva York</p>
                    <p style={{ fontSize: "1.1rem", color: "#444" }}>
                        Únete a este gran encuentro para celebrar nuestra identidad, fortalecer lazos y compartir momentos inolvidables.
                        ¡Te esperamos para vivir juntos una experiencia única llena de cultura, tradición y hermandad! 🎊🌍
                    </p>
                </div>
                <div className={Styles.Event_right} style={{ flex: "1", minWidth: "300px", textAlign: "center" }}>
                    <img 
                        src={samanaImg5} 
                        alt="Samanenses Ausentes Evento" 
                        className={Styles.Event_image} 
                        loading="lazy" 
                        style={{ width: "100%", maxWidth: "500px", borderRadius: "10px", boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)" }}
                    />
                </div>
            </section>
            
        </div>
    );
}

export default Event;