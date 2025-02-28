import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Styles from "./about.module.css";
import samanaImg1 from './samana_img/images (1).jpeg';
import samanaImg2 from './samana_img/download.jpeg';
import samanaImg3 from './samana_img/images (3).jpeg';
import samanaImg4 from './samana_img/images (2).jpeg';
import samanaImg5 from './samana_img/imagessmaasas.jpeg';

const Home = () => {
    return(
        <div className={Styles.Home_container}>
            <div className={Styles.Home_section} style={{ backgroundColor: "#f9f9f9", padding: "40px", borderRadius: "10px", marginBottom: "30px" }}>
                <div className={Styles.Home_hero}>
                    <div className={Styles.Home_hero_left}>
                        <h1>🌎 Descubre Samaná</h1>
                        <p>
                            Samaná es una joya natural de la República Dominicana, famosa por sus playas, montañas y rica historia.
                            Desde la llegada de Cristóbal Colón hasta la cultura vibrante de hoy, este rincón del Caribe es un lugar único.
                        </p>
                    </div>
                    <div className={Styles.Home_hero_right}>
                        <img src={samanaImg1} alt="Descubre Samaná" style={{ borderRadius: "50%", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", width: "100%" }} />
                    </div>
                </div>
            </div>
            <div className={Styles.Home_section} style={{ display: "flex", flexDirection: "row-reverse", backgroundColor: "#fff3e6", padding: "40px", borderRadius: "10px", marginBottom: "30px" }}>
                <div className={Styles.Home_hero}>
                    <div className={Styles.Home_hero_left}>
                        <h1>🎉 Historia y Cultura</h1>
                        <p>
                            Desde la llegada de los españoles en 1493 hasta la inmigración afroamericana en el siglo XIX, Samaná ha sido
                            un crisol de culturas. Su pasado colonial, junto con su fuerte identidad afrocaribeña, la hacen única.
                        </p>
                    </div>
                    <div className={Styles.Home_hero_right}>
                        <img src={samanaImg2} alt="Historia y Cultura" style={{ borderRadius: "20px", boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)", width: "100%" }} />
                    </div>
                </div>
            </div>
            <div className={Styles.Home_section} style={{ backgroundColor: "#e6f7ff", padding: "40px", borderRadius: "10px", marginBottom: "30px" }}>
                <div className={Styles.Home_hero}>
                    <div className={Styles.Home_hero_left}>
                        <h1>🌟 Belleza Natural</h1>
                        <p>
                            Samaná es hogar de majestuosas montañas, cascadas impresionantes y playas de arena blanca. Además,
                            cada invierno, cientos de ballenas jorobadas visitan sus costas, brindando un espectáculo único en el mundo.
                        </p>
                    </div>
                    <div className={Styles.Home_hero_right}>
                        <img src={samanaImg3} alt="Belleza Natural" style={{ borderRadius: "10px 50px 10px 50px", boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)", width: "100%" }} />
                    </div>
                </div>
            </div>
            <div className={Styles.Home_section} style={{ display: "flex", flexDirection: "row-reverse", backgroundColor: "#ffebf0", padding: "40px", borderRadius: "10px", marginBottom: "30px" }}>
                <div className={Styles.Home_hero}>
                    <div className={Styles.Home_hero_left}>
                        <h1>🚀 Desarrollo y Turismo</h1>
                        <p>
                            Con la apertura de carreteras y aeropuertos, Samaná se ha convertido en un destino turístico de primer nivel.
                            Hoteles, excursiones y actividades como el avistamiento de ballenas generan un impacto positivo en la economía local.
                        </p>
                    </div>
                    <div className={Styles.Home_hero_right}>
                        <img src={samanaImg4} alt="Turismo" style={{ borderRadius: "30px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", width: "100%" }} />
                    </div>
                </div>
            </div>
            <div className={Styles.Home_section} style={{ backgroundColor: "#e6ffe6", padding: "40px", borderRadius: "10px", marginBottom: "30px" }}>
                <div className={Styles.Home_hero}>
                    <div className={Styles.Home_hero_left}>
                        <h1>💙 Comunidad y Conexión</h1>
                        <p>
                            Samaná no solo es un destino turístico, es un hogar. La comunidad samanense, dentro y fuera de la isla,
                            mantiene sus tradiciones vivas y crea lazos inquebrantables de solidaridad y hermandad.
                        </p>
                    </div>
                    <div className={Styles.Home_hero_right}>
                        <img src={samanaImg5} alt="Comunidad y Conexión" style={{ borderRadius: "50px 10px 50px 10px", boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)", width: "100%" }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
