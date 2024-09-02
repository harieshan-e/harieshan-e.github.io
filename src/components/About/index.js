import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useEffect, useState } from 'react'


const About = () => {

    const[letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
    return ( 
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} />
                </h1>

            </div>
        </div>
        
    );
}
 
export default About;