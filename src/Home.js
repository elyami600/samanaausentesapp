import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Styles from "./about.module.css";

const Home = () => {
    return(
        <div className={Styles.Home_container}>
            <div className={Styles.Home_section} style={{ backgroundColor: "#f9f9f9", padding: "40px", borderRadius: "10px", marginBottom: "30px" }}>
                <div className={Styles.Home_hero}>
                    <div className={Styles.Home_hero_left}>
                        <h1>🌎 Samana En El Exterior</h1>
                        <p>
                            <strong>Samanenses Ausentes</strong> es más que un evento, es un movimiento que une a
                            todos los samanenses en el exterior para celebrar nuestra identidad, cultura y lazos familiares.
                        </p>
                    </div>
                    <div className={Styles.Home_hero_right}>
                        <img src="https://picsum.photos/500/300" alt="Sobre nosotros" style={{ borderRadius: "50%", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }} />
                    </div>
                </div>
            </div>
            <div className={Styles.Home_section} style={{ display: "flex", flexDirection: "row-reverse", backgroundColor: "#fff3e6", padding: "40px", borderRadius: "10px", marginBottom: "30px" }}>
                <div className={Styles.Home_hero}>
                    <div className={Styles.Home_hero_left}>
                        <h1>🎉 Tradiciones y Cultura</h1>
                        <p>
                            Nuestra comunidad mantiene vivas las costumbres y tradiciones de Samaná, celebrando su
                            historia y herencia cultural en cada encuentro.
                        </p>
                    </div>
                    <div className={Styles.Home_hero_right}>
                        <img src="https://picsum.photos/600/500?random=1" alt="Tradiciones" style={{ borderRadius: "20px", boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)" }} />
                    </div>
                </div>
            </div>
            <div className={Styles.Home_section} style={{ backgroundColor: "#e6f7ff", padding: "40px", borderRadius: "10px", marginBottom: "30px" }}>
                <div className={Styles.Home_hero}>
                    <div className={Styles.Home_hero_left}>
                        <h1>🌟 Conexión y Comunidad</h1>
                        <p>
                            Más que un evento, somos una red de apoyo que une a los samanenses en todo el mundo,
                            compartiendo momentos especiales y fortaleciendo nuestros lazos.
                        </p>
                    </div>
                    <div className={Styles.Home_hero_right}>
                        <img src="https://picsum.photos/700/450?random=2" alt="Comunidad" style={{ borderRadius: "10px 50px 10px 50px", boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)" }} />
                    </div>
                </div>
            </div>
            <div className={Styles.Home_section} style={{ display: "flex", flexDirection: "row-reverse", backgroundColor: "#ffebf0", padding: "40px", borderRadius: "10px", marginBottom: "30px" }}>
                <div className={Styles.Home_hero}>
                    <div className={Styles.Home_hero_left}>
                        <h1>🚀 Oportunidades y Crecimiento</h1>
                        <p>
                            Nos enfocamos en crear espacios donde los samanenses puedan crecer personal y profesionalmente.
                        </p>
                    </div>
                    <div className={Styles.Home_hero_right}>
                        <img src="https://picsum.photos/500/500?random=3" alt="Crecimiento" style={{ borderRadius: "30px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }} />
                    </div>
                </div>
            </div>
            <div className={Styles.Home_section} style={{ backgroundColor: "#e6ffe6", padding: "40px", borderRadius: "10px", marginBottom: "30px" }}>
                <div className={Styles.Home_hero}>
                    <div className={Styles.Home_hero_left}>
                        <h1>💙 Historias Inspiradoras</h1>
                        <p>
                            Conoce las historias de samanenses que han llevado el nombre de Samaná en alto.
                        </p>
                    </div>
                    <div className={Styles.Home_hero_right}>
                        <img src="https://picsum.photos/600/350?random=4" alt="Historias Inspiradoras" style={{ borderRadius: "50px 10px 50px 10px", boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)" }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
