import React from "react";
import Styles from "./about.module.css";

// Import images
import samanaImg1 from './samana_img/images (1).jpeg';
import samanaImg2 from './samana_img/download.jpeg';
import samanaImg3 from './samana_img/images (3).jpeg';
import samanaImg4 from './samana_img/images (2).jpeg';
import samanaImg5 from './samana_img/samanaPuentes.jpeg';
// Import video
import samanaVideo from './samana_img/samanaVideo.mp4';

const Home = () => {
    return (
        <div className={Styles.Home_container}>

            {/* 🎥 Hero Section - Video */}
            <section className={Styles.TopBanner}>
                <div className={Styles.videoOverlay}></div>
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className={Styles.bannerVideo}
                >
                    <source src={samanaVideo ||samanaImg5} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={Styles.bannerText}>
                    <h1>🌎Samaná Ausentes</h1>
                    <p>En esas playas donde nací, para soñar...</p>
                </div>
            </section>

            {/* 🌴 Content Sections */}
            <section className={Styles.Home_section} style={{ backgroundColor: "#f9f9f9" }}>
                <article className={Styles.Home_hero}>
                    <div className={Styles.Home_hero_left}>
                        <h1>🌊 Naturaleza y Belleza</h1>
                        <p>
                            Samaná es un rincón mágico en la República Dominicana, con playas paradisíacas,
                            montañas impresionantes y una biodiversidad única.
                        </p>
                    </div>
                    <div className={Styles.Home_hero_right}>
                        <img src={samanaImg1} alt="Descubre Samaná" className={Styles.responsiveImage} loading="lazy" />
                    </div>
                </article>
            </section>

            <section className={Styles.Home_section} style={{ backgroundColor: "#fff3e6" }}>
                <article className={Styles.Home_hero} style={{ flexDirection: "row-reverse" }}>
                    <div className={Styles.Home_hero_left}>
                        <h1>🎭 Cultura e Historia</h1>
                        <p>
                            Desde la llegada de Cristóbal Colón en 1493 hasta hoy, Samaná ha sido un lugar de encuentros
                            culturales y tradiciones arraigadas.
                        </p>
                    </div>
                    <div className={Styles.Home_hero_right}>
                        <img src={samanaImg2} alt="Historia y Cultura" className={Styles.responsiveImage} loading="lazy" />
                    </div>
                </article>
            </section>

            <section className={Styles.Home_section} style={{ backgroundColor: "#e6f7ff" }}>
                <article className={Styles.Home_hero}>
                    <div className={Styles.Home_hero_left}>
                        <h1>🐋 Avistamiento de Ballenas</h1>
                        <p>
                            Cada invierno, cientos de ballenas jorobadas visitan las costas de Samaná,
                            creando un espectáculo natural impresionante.
                        </p>
                    </div>
                    <div className={Styles.Home_hero_right}>
                        <img src={samanaImg3} alt="Ballenas" className={Styles.responsiveImage} loading="lazy" />
                    </div>
                </article>
            </section>

            <section className={Styles.Home_section} style={{ backgroundColor: "#ffebf0" }}>
                <article className={Styles.Home_hero} style={{ flexDirection: "row-reverse" }}>
                    <div className={Styles.Home_hero_left}>
                        <h1>🚀 Turismo y Desarrollo</h1>
                        <p>
                            Gracias a su infraestructura en crecimiento, Samaná se ha convertido en un destino turístico
                            de clase mundial con hoteles, excursiones y mucho más.
                        </p>
                    </div>
                    <div className={Styles.Home_hero_right}>
                        <img src={samanaImg4} alt="Turismo" className={Styles.responsiveImage} loading="lazy" />
                    </div>
                </article>
            </section>

        </div>
    );
}

export default Home;
