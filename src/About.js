import Styles from "./about.module.css";

const About = () => {
    const imagen = "https://picsum.photos/250/250";

    const founderArray = [
        { name: "Maxwell Dickson", position: "President & Organizer", image: imagen }, 
        { name: "Leonel Bonilla", position: "Co-founder & Coordinator", image: imagen },
        { name: "Marie Cabrera", position: "Co-founder & Event Planner", image: imagen },
       
    ];

    const factsArray = [
        { title: "2+ 🌍", info: "Samanenses reunidos en cada edición para celebrar nuestras raíces y cultura. 🎉" },
        { title: "100% ❤️", info: "Conexión, alegría y recuerdos inolvidables en cada encuentro. 💃🏽🎶" },
        { title: "2+ Años 🎊", info: "Fomentando la unión y fortaleciendo nuestra comunidad en el exterior. 🤝" }
    ];
    
    return (
        <div className={Styles.About}>
            <div className={Styles.About_box}>
                <div className={Styles.About_box_hero}>
                    <div className={Styles.About_box_hero_left}>
                        <h1>🌎 Sobre Nosotros – Unidos por Samaná</h1>
                        <p>
                            <strong>Samanenses Ausentes</strong> es más que un evento, es un movimiento que une a
                            todos los samanenses en el exterior para celebrar nuestra identidad, cultura y lazos familiares.
                            Nos reunimos para compartir historias, fortalecer nuestra comunidad y mantener viva la esencia
                            de Samaná en cualquier parte del mundo.
                        </p>
                    </div>
                    <div className={Styles.About_box_hero_right}>
                        <img src={imagen} alt="Sobre nosotros" />
                    </div>
                </div>

                <div className={Styles.About_box_hero_title}>
                    <h2>💙 Organizadores</h2>
                    <p>
                        Los fundadores de <strong>Samanenses Ausentes</strong> son samanenses apasionados por conectar 
                        a nuestra comunidad más allá de las fronteras. Con amor y dedicación, han creado este espacio 
                        para que cada samanense en el exterior tenga un lugar donde compartir, recordar y fortalecer lazos. 
                        ¡Juntos, hacemos de cada encuentro una experiencia inolvidable! 🌍🎊
                    </p>
                </div>

                <div className={Styles.About_box_founder}>
                    {founderArray.map((el, i) => (
                        <div key={i} className={Styles.About_box_founder_box_img}>
                            <img   
                                src={`https://picsum.photos/250/250?random=${i}`} 
                                alt={el.name}  
                                width="250" 
                                height="250"
                                className={Styles.About_box_founder_box_img_img}
                            />

                            <h3>{el.name}</h3>
                            <p>{el.position}</p>
                        </div>
                    ))}
                </div>

                <div className={Styles.About_box_hero_title}>
                    <h2>✨ Datos Destacados</h2>
                    <p>
                        Más que un evento, <strong>Samanenses Ausentes</strong> es un reencuentro lleno de alegría,
                        nostalgia y cultura. Aquí creamos recuerdos, reforzamos nuestras raíces y celebramos nuestra 
                        comunidad samanense en el mundo. 🌎💙
                    </p>
                </div>

                <div className={Styles.About_box_facts}>
                    <div className={Styles.About_box_facts_box}>
                        {factsArray.map((el, i) => (
                            <div key={i} className={Styles.About_box_facts_box_info}>
                                <h3>{el.title}</h3>
                                <p>{el.info}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
