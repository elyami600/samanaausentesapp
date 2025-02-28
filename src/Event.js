import React from "react";
import Styles from "./about.module.css";
import samanaImg5 from './samana_img/samanaFlyer.jpeg';

const Event = () => {
    return (
        <div className={Styles.About_box_hero} style={{ backgroundColor: "#f9f9f9", padding: "40px", borderRadius: "10px", marginBottom: "30px" }}>
            <div className={Styles.About_box_hero_left}>
                <h1>🎉 Samanenses en el Exterior - 2da Edición 2025</h1>
                <p>
                    <strong>La diáspora Samanenses en el Exterior</strong> tiene el placer de invitar a todos los samanenses a la 
                    2da Edición de <strong>Samanenses Ausentes 2025</strong>.
                </p>
                <p>
                    📅 <strong>Fecha:</strong> Sábado, 19 de julio de 2025 (tercer sábado de julio – fecha oficial del evento)
                </p>
                <p>
                    📍 <strong>Lugar:</strong> Nueva York
                </p>
                <p>
                    Únete a este gran encuentro para celebrar nuestra identidad, fortalecer lazos y compartir momentos inolvidables. 
                    ¡Te esperamos para vivir juntos una experiencia única llena de cultura, tradición y hermandad! 🎊🌍
                </p>
            </div>
            <div className={Styles.About_box_hero_right}>
                <img src={samanaImg5} alt="Samanenses Ausentes Evento" style={{ borderRadius: "20px", boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)", width: "100%" }} />
            </div>
        </div>
    );
}

export default Event;
