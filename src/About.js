import Styles from "./about.module.css";
import yp from './samana_img/yp.jpeg'
import mr from './samana_img/mr.jpeg'
import mx from './samana_img/maxwell.jpeg'
import alix from './samana_img/alix.jpeg'
import angel from './samana_img/angel.jpeg'
import bannerSamanaAusente from './samana_img/bannerSamanaUsente.jpeg'
import pompi from './samana_img/pompi.jpg'

const About = () => {
    const founderArray = [
        { name: "Maxwell Dickson", position: "President & Organizer", image: mx}, 
        { name: "Pompilio Demoya", position: "Co-founder & Coordinator", image: pompi },
        { name: "Leonel Bonilla", position: "Co-founder & Coordinator", image: yp },
        { name: "Marie Merejo", position: "Co-founder & Event Planner", image: mr },
        { name: "Dany Reyes", position: "Influencer & Event Planner", image: angel },
        { name: "Victor J Deaza", position: "Logistician & Event Planner", image: alix},
    ];

    const factsArray = [
        { title: "2+ 🌍", info: "Samanenses reunidos en cada edición para celebrar nuestras raíces y cultura. 🎉" },
        { title: "100% ❤️", info: "Conexión, alegría y recuerdos inolvidables en cada encuentro. 💃🏽🎶" },
        { title: "2+ Años 🎊", info: "Fomentando la unión y fortaleciendo nuestra comunidad en el exterior. 🤝" }
    ];

    return (
        <div className={Styles.About}>
            <div className={Styles.About_box}>

                {/* 🌍 Hero Section */}
                <section className={Styles.About_box_hero}>
                    <div className={Styles.About_box_hero_left}>
                        <h1>🌎 Samanenses Ausentes</h1>
                        <p>
                            <strong>Samanenses Ausentes</strong> es más que un evento, es un movimiento que une a
                            todos los samanenses en el exterior para celebrar nuestra identidad, cultura y lazos familiares.
                            Nos reunimos para compartir historias, fortalecer nuestra comunidad y mantener viva la esencia
                            de Samaná en cualquier parte del mundo.
                        </p>
                    </div>
                    <div className={Styles.About_box_hero_right}>
                        <img 
                            src={bannerSamanaAusente} 
                            alt="Sobre nosotros" 
                            className={Styles.responsiveImage} 
                            loading="lazy"
                        />
                    </div>
                </section>

                {/* 💙 Organizers Section */}
                <section className={Styles.About_box_hero_title}>
                    <h2>💙 Organizadores</h2>
                    <p>
                        Los fundadores de <strong>Samanenses Ausentes</strong> son samanenses apasionados por conectar 
                        a nuestra comunidad más allá de las fronteras. Con amor y dedicación, han creado este espacio 
                        para que cada samanense en el exterior tenga un lugar donde compartir, recordar y fortalecer lazos. 
                        ¡Juntos, hacemos de cada encuentro una experiencia inolvidable! 🌍🎊
                    </p>
                </section>

                {/* 👥 Founders Grid */}
                <section className={Styles.About_box_founder}>
                    {founderArray.map((el, i) => (
                        <div key={i} className={Styles.About_box_founder_box_img}>
                            <img   
                                src={el.image} 
                                alt={`Foto de ${el.name}`}  
                                width="250" 
                                height="250"
                                className={Styles.About_box_founder_box_img_img}
                                loading="lazy"
                            />
                            <h3>{el.name}</h3>
                            <p>{el.position}</p>
                        </div>
                    ))}
                </section>

                {/* ✨ Key Facts Section */}
                <section className={Styles.About_box_hero_title}>
                    <h2>✨ Datos Destacados</h2>
                    <p>
                        Más que un evento, <strong>Samanenses Ausentes</strong> es un reencuentro lleno de alegría,
                        nostalgia y cultura. Aquí creamos recuerdos, reforzamos nuestras raíces y celebramos nuestra 
                        comunidad samanense en el mundo. 🌎💙
                    </p>
                </section>

                {/* 📊 Facts Grid */}
                <section className={Styles.About_box_facts}>
                    <div className={Styles.About_box_facts_box}>
                        {factsArray.map((el, i) => (
                            <div key={i} className={Styles.About_box_facts_box_info}>
                                <h3>{el.title}</h3>
                                <p>{el.info}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default About;
