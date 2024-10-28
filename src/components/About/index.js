import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useEffect, useState } from 'react'


const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  const timelineData = [
    {
      company: "Ford Motor Company",
      date: "Sep 2022 - Dec 2022",
      position: "Network Test Engineer",
      location: "Kanata, ON",
      responsibilities: [
        "Automated tests using Python Slash framework",
        "Reduced redundant test logs by 50%",
        "Collaborated with cross-functional teams for timely releases"
      ]
    },
    {
      company: "Morgan Stanley",
      date: "Jan 2022 - Apr 2022",
      position: "Technology Analyst",
      location: "Montreal, QC",
      responsibilities: [
        "Improved testing runtime by 30% with Cypress",
        "Automated 10+ workflows for deployment security",
        "Developed Jenkins pipelines for quality assurance"
      ]
    },
    {
      company: "Employment and Social Development Canada",
      date: "May 2021 - Aug 2021",
      position: "Application Developer",
      location: "Gatineau, QC",
      responsibilities: [
        "Prototyped RESTful employee directory with Spring Boot",
        "Containerized deployment using OpenShift and Docker",
        "Presented project to executives, securing further investment"
      ]
    }
  ];

  const styles = {
    timelineContainer: {
      display: 'flex',
      justifyContent: 'center', // Centers items horizontally
      alignItems: 'center',
      padding: '20px 0',
    },
    timelineItem: {
      display: 'inline-flex', // Use inline-flex to keep items aligned properly
      flexDirection: 'column', // Makes the content stack vertically
      alignItems: 'center', // Centers text within each item
      marginRight: '20px',
      padding: '10px 20px',
      background: '#f0f0f0',
      borderRadius: '8px',
      textAlign: 'center',
      minWidth: '200px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    timelineContent: {
      position: 'relative',
    },
    date: {
      margin: '0 0 10px 0',
      fontSize: '20px',
      fontWeight: 'bold',
    },
    position: {
      margin: '0 0 5px 0',
      fontSize: '18px',
    },
    company: {
      margin: '0 0 10px 0',
      fontSize: '16px',
      fontStyle: 'italic',
    },
    responsibilities: {
      fontSize: '14px',
      color: '#666',
    },
    line: {
      position: 'absolute',
      top: '50%',
      left: '100%',
      width: '40px',
      height: '2px',
      background: '#999',
      transform: 'translateY(-50%)',
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={['P', 'a', 's', 't', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e', 's']} idx={15} />
        </h1>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


      </div>
      
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div style={styles.timelineContainer}>

        {timelineData.map((item, index) => (
          <div key={index} style={styles.timelineItem}>
            <div style={styles.timelineContent}>
              <h3 style={styles.date}>{item.date}</h3>
              <h4 style={styles.position}>{item.position}</h4>
              <h5 style={styles.company}>{item.company}</h5>
              <div style={styles.responsibilities}>
                {item.responsibilities.map((responsibility, i) => (
                  <p style={styles.responsibilities} key={i}>{responsibility}</p>
                ))}
              </div>
            </div>
            {index < timelineData.length - 1 && <div style={styles.line}></div>}
          </div>
        ))}


      </div>

      </div>
      );



}

      export default About;