import React from "react";
import Styles from "./about.module.css";
import samanaImg5 from './samana_img/samanaFlyer.jpeg';

const Event = () => {
    return (
        <div className={Styles.Event_container}>
            <section className={Styles.Event_box}>
                <div className={Styles.Event_left}>
                    <h1>🎉 Samanenses en el Exterior - 2da Edición 2025</h1>
                    <p>
                        <strong>La diáspora Samanenses en el Exterior</strong> tiene el placer de invitar a todos los samanenses a la 
                        2da Edición de <strong>Samanenses Ausentes 2025</strong>.
                    </p>
                    <p>📅 <strong>Fecha:</strong> Sábado, 19 de julio de 2025 (tercer sábado de julio – fecha oficial del evento)</p>
                    <p>📍 <strong>Lugar:</strong> Nueva York</p>
                    <p>
                        Únete a este gran encuentro para celebrar nuestra identidad, fortalecer lazos y compartir momentos inolvidables. 
                        ¡Te esperamos para vivir juntos una experiencia única llena de cultura, tradición y hermandad! 🎊🌍
                    </p>
                </div>
                <div className={Styles.Event_right}>
                    <img 
                        src={samanaImg5} 
                        alt="Samanenses Ausentes Evento" 
                        className={Styles.Event_image} 
                        loading="lazy"
                    />
                </div>
            </section>
        </div>
    );
}

export default Event;
