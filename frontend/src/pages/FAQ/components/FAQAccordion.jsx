import { useState } from 'react';
import { Collapse } from 'antd';
import SearchBar from './SearchBar';
import FAQCategory from './FAQCategory';
import NoResults from './NoResults';
import ContactCard from './ContactCard';
import styles from './FAQAccordion.module.css';
const faqData = [
  {
    category: "General",
    icon: "📌",
    questions: [
      { question: "What is GNSS?", answer: "Global Navigation Satellite System (GNSS) is a satellite navigation system with global coverage that provides positioning, navigation, and timing (PNT) services to users anywhere on Earth. Examples include GPS (USA), GLONASS (Russia), Galileo (Europe), and BeiDou (China)." },
      { question: "What is NCGSA?", answer: "The National Center of GIS & Space Applications (NCGSA) is a research and development center at the Institute of Space Technology, Islamabad. It is dedicated to advancing GNSS technology, GIS applications, and space science research in Pakistan." },
      { question: "What is the difference between GNSS and GPS?", answer: "GPS (Global Positioning System) is a specific GNSS system operated by the United States. GNSS is the broader term that includes all global satellite navigation systems including GPS, GLONASS, Galileo, and BeiDou." }
    ]
  },
  {
    category: "Programs",
    icon: "🎓",
    questions: [
      { question: "How do I apply for the MS/PhD GNSS program?", answer: "You can apply through the Institute of Space Technology (IST) admission portal. Eligibility includes a BS in Electronics, Telecommunications, Electrical Engineering, Computer Science, Physics, or equivalent with minimum 2.5 CGPA for MS and 3.0 CGPA for PhD." },
      { question: "What is the duration of the MS program?", answer: "The MS program is 2 years (4 semesters) including coursework and thesis. The PhD program is 3-5 years including coursework and research." },
      { question: "What are the specializations offered in MS GNSS?", answer: "Specializations include Integrated Satellite Navigation Systems, Advanced GNSS Signal Processing, GNSS Augmentation Systems, Space Weather & Satellite Navigation, and GNSS for Geospatial & Remote Sensing Applications." },
      { question: "Is there any GAT requirement for admission?", answer: "Yes, for MS you need GAT (General) with minimum 50% score. For PhD, you need GAT (Subject) with minimum 60% score." }
    ]
  },
  {
    category: "Research",
    icon: "🔬",
    questions: [
      { question: "What research areas are available at NCGSA?", answer: "Research areas include GNSS Research & Development, Space Awareness & Outreach, Education & Training, GNSS Applications, Ionosphere Studies, Space Weather, GNSS Receivers Development, Spoofing & Jamming, and LEO-PNT systems." },
      { question: "How can I collaborate with NCGSA on research?", answer: "You can reach out to the NCGSA Secretariat or contact our faculty members directly. We welcome collaborations with universities, research institutions, and industry partners both nationally and internationally." },
      { question: "What labs are available at NCGSA?", answer: "NCGSA has several research labs including the Spatial Decision Support System Lab (SDSSL), Space and Astrophysics Research Lab (SARL), GNSS and Space Education Research Lab (GSERL), Small Satellite Technology and Research Lab (SSTRL), and the Agricultural Remote Sensing Lab (ARSL)." }
    ]
  },
  {
    category: "Faculty & Careers",
    icon: "👨‍🏫",
    questions: [
      { question: "Who are the faculty members at NCGSA?", answer: "Our faculty includes Prof. Dr. Najam Abbas Naqvi, Dr. Abdul Waheed (Lab Director), and a dedicated team of researchers specializing in GNSS, space science, and GIS applications." },
      { question: "How can I become a researcher at NCGSA?", answer: "You can apply for research positions through IST's career portal or contact our HR department. We also offer research assistant positions for graduate students." },
      { question: "Are there internship opportunities available?", answer: "Yes, we offer internship opportunities for undergraduate and graduate students in GNSS, space science, GIS, and related fields. Applications are accepted throughout the year." }
    ]
  },
  {
    category: "Publications & Events",
    icon: "📄",
    questions: [
      { question: "How can I submit my research paper to NCGSA?", answer: "You can submit your research paper for review through our publications portal. All submissions undergo peer review before acceptance." },
      { question: "What types of events does NCGSA organize?", answer: "We organize conferences, workshops, summer/winter schools, seminars, hackathons, and outreach programs throughout the year. Check our Events page for upcoming events." },
      { question: "How can I register for NCGSA events?", answer: "You can register for events through our Events page. Registration links are available for each event with details about fees, schedules, and participation guidelines." }
    ]
  }
];
const FAQAccordion = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const getFilteredData = () => {
    if (!searchTerm.trim()) return faqData;
    return faqData
      .map(category => ({
        ...category,
        questions: category.questions.filter(q =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }))
      .filter(category => category.questions.length > 0);
  };
  const filteredData = getFilteredData();
  const totalResults = filteredData.reduce((acc, cat) => acc + cat.questions.length, 0);
  return (
    <section className="section-faq">
      <div className="container">
        <SearchBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          totalResults={totalResults} 
        />       
        <div className={styles.accordionContainer}>
          {filteredData.length > 0 ? (
            filteredData.map((category, index) => (
              <FAQCategory key={index} category={category} />
            ))
          ) : (
            <NoResults />
          )}
        </div>
        
        <ContactCard />
      </div>
    </section>
  );
};
export default FAQAccordion;