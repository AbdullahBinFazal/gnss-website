import styles from "./TeamSection.module.css";

const teamMembers = [
  { name: "Prof. Dr. Najam Abbas Naqvi", image: "https://ncgsa.org.pk/storage/2021/04/Prof.-Dr.-Najam-Abbas-Naqvi.jpg", designation: "Professor" },
  { name: "Dr. Abdul Waheed", image: "https://ncgsa.org.pk/storage/2021/04/Dr.-Abdul-Waheed.jpg", designation: "Lab Director" },
  { name: "Mr. Usama Ahmed", image: "https://ncgsa.org.pk/storage/2021/04/Usama-Ahmed.jpg", designation: "Researcher" },
  { name: "Mr. Aqib Khan", image: "https://ncgsa.org.pk/storage/2021/04/Aqib-Khan.jpg", designation: "Researcher" },
  { name: "Ms. Mahnoor Ajmal", image: "https://ncgsa.org.pk/storage/2021/04/Mahnoor-Ajmal.jpg", designation: "Researcher" },
  { name: "Mr. Sohaib Ahmed", image: "https://ncgsa.org.pk/storage/2021/04/Sohaib-Ahmed.jpg", designation: "Researcher" },
  { name: "Mr. Oscar Lionel", image: "https://ncgsa.org.pk/storage/2021/04/Oscar-Lionel.jpg", designation: "Researcher" },
  { name: "Mr. M. Afnan", image: "https://ncgsa.org.pk/storage/2021/04/M.-Afnan.jpg", designation: "Researcher" },
  { name: "Mr. Faran Ali", image: "https://ncgsa.org.pk/storage/2021/04/Faran-Ali.jpg", designation: "Researcher" },
  { name: "Ms. Saleha Fatim Ali", image: "https://ncgsa.org.pk/storage/2021/04/Saleha-Fatim-Ali.jpg", designation: "Researcher" },
  { name: "Mr. Rasim Shahzad", image: "https://ncgsa.org.pk/storage/2021/04/Rasim-Shahzad.jpg", designation: "Researcher" },
  { name: "Mr. Imtiaz Nabi", image: "https://ncgsa.org.pk/storage/2021/04/Imtiaz-Nabi.jpg", designation: "Researcher" },
  { name: "Mr. Saad Altaf", image: "https://ncgsa.org.pk/storage/2021/04/Saad-Altaf.jpg", designation: "Researcher" },
  { name: "Ms. Samra Kiran", image: "https://ncgsa.org.pk/storage/2021/04/Samra-Kiran.jpg", designation: "Researcher" },
  { name: "Mr. Daniyal Raza Kazmi", image: "https://ncgsa.org.pk/storage/2021/04/Daniyal-Raza-Kazmi.jpg", designation: "Researcher" },
  { name: "Ms. Momina Asif", image: "https://ncgsa.org.pk/storage/2021/04/Momina-Asif.jpg", designation: "Researcher" },
  { name: "Ms. Umaima Khan", image: "https://ncgsa.org.pk/storage/2021/04/Umaima-Khan.jpg", designation: "Researcher" },
  { name: "Mr. Yawar Abbas", image: "https://ncgsa.org.pk/storage/2021/04/Yawar-Abbas.jpg", designation: "Researcher" },
  { name: "Mr. M. Usman", image: "https://ncgsa.org.pk/storage/2021/04/M.-Usman.jpg", designation: "Researcher" },
  { name: "Mr. Syed Muhammad Ali", image: "https://ncgsa.org.pk/storage/2021/04/Syed-Muhammad-Ali.jpg", designation: "Researcher" },
  { name: "Ms. Hira Tassaduq", image: "https://ncgsa.org.pk/storage/2021/04/Hira-Tassaduq.jpg", designation: "Researcher" },
  { name: "Mr. Abdul Muteen", image: "https://ncgsa.org.pk/storage/2021/04/Abdul-Muteen.jpg", designation: "Researcher" },
];

const TeamSection = () => {
  return (
    <section style={{ padding: "20px 0 60px" }}>
      <div className="container">
        <h2 className={styles.heading}>Our <span className="gradient-text">Team</span></h2>
        <div className={styles.grid}>
          {teamMembers.map((member, index) => (
            <div key={index} className="glass-card" style={{ padding: "20px", textAlign: "center", transition: "all 0.3s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "rgba(0,0,0,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "var(--border-subtle)"; }}>
              <div className={styles.avatar}>
                <img src={member.image} alt={member.name} />
              </div>
              <h4 className={styles.memberName}>{member.name}</h4>
              <p className={styles.memberDesignation}>{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;