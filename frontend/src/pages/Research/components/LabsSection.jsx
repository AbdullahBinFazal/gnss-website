import { Link } from "react-router-dom";
import styles from "./LabsSection.module.css";

const labs = [
  { id: 1, name: "Spatial Decision Support System Lab (SDSSL)", description: "Substantial rise in public demands for provision of efficient services and systems by the government can only be met with efficient decision support systems. One way to handle this restless onslaught of demographic pressure is to improve performance of several systems and services available for public by making use of spatial data. The availability of data along with an effective decision support system can help in the understanding of problems and the possible outcomes of decisions. In addition, the availability of spatial data based decision support systems can greatly improve policy and plan making process while reducing time and human resources. Geographic Information systems (GIS) are known technology to manage spatial databases. Our research group envisions contributing in the area of Spatial Decision Support Systems (SDSS) that deals with spatial dimension through digitized geo-referenced spatial databases.", icon: "🗺️", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=600&fit=crop&crop=center" },
  { id: 2, name: "Space and Astrophysics Research Lab (SARL)", description: "Since the beginning of the 20th century, the study of space and various astrophysical phenomena has entered a golden age. With the advent of the 21st century this research promises further exciting discoveries in these domains. This research encompasses areas as diverse as the study of the space around the Earth, the Sun and its impact on the Earth, the Solar System, the study of star systems, neutron stars, black holes as well as the study of galaxies and the large scale study about the Universe. SARL focuses on acquiring indigenous research infrastructure and develop manpower to study the dynamics of space and astrophysical systems including the ionosphere, magnetosphere, Sun, stars, galaxies, high energy astrophysical systems and gravitational waves.", icon: "🌌", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&crop=center" },
  { id: 3, name: "GNSS and Space Education Research Lab (GSERL)", description: "Global Navigation Satellite System has emerged to be an integral part in major businesses around the world including banking, agriculture, security etc. With almost all developed nations currently operating or planning to operate a fully functional GNSS, GSERL aims to contribute in the field at regional and global level. Almost all developing countries struggle with the awareness of the benefit of space science and technology among its general masses. This in turn results in loss of public support, lack of human resource and consequently a slow paced space program. Space Education Research Lab focuses on spreading mass awareness among the general masses by actively engaging them at all level in outreach and awareness activities and initiatives.", icon: "📡", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop&crop=center" },
  { id: 4, name: "Small Satellite Technology and Research Lab (SSTRL)", description: "With the worldwide success of satellite programs and countless spins offs in terms of business, applications and research potential, space science and technology research community has now begun excessive experimentation and identification of benefits of small satellite technology. Growing concerns of space debris, enormous developmental costs and similar concerns with satellite technology have shown considerable mitigation potential through small satellites. SSTRL focuses on the cutting edge innovation and technology in the domain of micro, nano and pico satellites.", icon: "🛰️", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&h=600&fit=crop&crop=center" },
  { id: 5, name: "Agricultural Remote Sensing Lab (ARSL)", description: "Since the beginning of the agricultural revolution some 12000 years ago, agriculture has been one of the primary means of human sustainability on planet Earth. With the population concerns around the world grows, so does the need for efficient and highly productive agricultural sector. Remote sensing has found a significant application in the agricultural sector. Through implementation of comprehensive analysis from satellite imagery, agriculture around the world can be more targeted and yielding than it was in the past decade. ARSL focuses on remote sensing, its implementation techniques and its direct relation to the quality of yield produced in a particular region.", icon: "🌾", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&h=600&fit=crop&crop=center" },
  { id: 6, name: "GIS & Space Applications in Geosciences Lab (G-SAGL)", description: "Pakistan is located in one of the most seismically and tectonically active regions around the world which can be mainly attributed to the northward movement of the Indian tectonic plate at a rate of 31 mm/year and sub ducting beneath the Eurasian continent. This collision of the Indian and Eurasian plates resulted in development of world highest mountain ranges i.e. Karakoram, Himalaya and Hindu Kush mountain ranges. The historic collision of the Indian Plate with Eurasian plate and current active tectonic in Pakistan, leads to many challenges and also opportunities. The aim of the lab is to effectively utilize the tools of GIS, remote sensing data and ground data to assist in mitigation of the adverse impacts of geohazards; and exploration and management of natural resources including minerals, water and forest.", icon: "🏔️", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=600&fit=crop&crop=center" },
  { id: 7, name: "Remote Sensing and GIS Climatic Research Lab (RSGCRL)", description: "Most vulnerable countries facing Climate Change risks with very low technical, financial and professional capacity to adapt/mitigate/prevent its adverse impact are often the developing countries around the globe. Climate Change aggravates the social inequalities, and intensifies social factors leading to displacement, conflicts, instability, and changes in migration patterns. Low budget and lacking in technical support/human and professional capacity are few among the biggest hurdles for these countries. RSGCRL focuses on SPACE BORNE DATA with proper GIS ANALYSES which can provide low cost and easy to adopt alternatives to adapt/mitigate/prevent Climate Change to support decision making systems of the developing world.", icon: "🌍", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop&crop=center" },
];

const LabCard = ({ lab }) => (
  <div className={styles.labCard}>
    <img src={lab.image} alt={lab.name} className={styles.cardImage} />
    <div className={styles.overlay} />
    <div className={styles.cardContent}>
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>{lab.icon}</span>
        <h3 className={styles.cardTitle}>{lab.name}</h3>
      </div>
      <p className={styles.cardDescription}>{lab.description}</p>
      <Link to={`/research/${lab.id}`} className={styles.learnLink}>
        Learn More →
      </Link>
    </div>
  </div>
);

const LabsSection = () => {
  return (
    <section className="section-labs" style={{ padding: "40px 0 60px" }}>
      <div className="container">
        <h2 className={styles.heading}><span className="gradient-text">Research</span> Labs</h2>
        <div className={styles.grid}>
          {labs.map(l => <LabCard key={l.id} lab={l} />)}
        </div>
      </div>
    </section>
  );
};

export default LabsSection;