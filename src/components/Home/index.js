import LogoTitle from '../../assets/images/h-logo.png'
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react'

const Home = () => {

    const[letterClass, setLetterClass] = useState('text-animate') //after initial load in animation, add state for animations from animatedletters scss file for hover
    const nameArray = [' ', 'H', 'a', 'r', 'i', 'e', 's', 'h', 'a', 'n', ','];
    const jobArray = [
        'a', ' ', 'f', 'i', 'f', 't', 'h', ' ', 'y', 'e', 'a', 'r', ' ', 's', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' '];
    const jobArray2 = ['e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', 'i', 'n', 'g', ' ', 's', 't', 'u', 'd', 'e', 'n', 't', '.']


    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span> {/*1.2 second delay in characters*/}
                <br/> 
                <span className={`${letterClass} _30`}>I</span>
                <span className={`${letterClass} _31`}>'m</span>
                {/*<img src={LogoTitle} alt="harieshan" />*/}
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={32}/>      
                <br/>                                                                                  {/*+7*/} 
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={39}/>
                <br/>                                                                                   {/*+20*/} 
                <AnimatedLetters letterClass={letterClass} strArray={jobArray2} idx={59}/>
                </h1>
                <h2>Java / Python / React</h2>
                <Link to="/contact" className="flat-button">Let's Connect</Link>
            </div>
        </div>
    );
}
 
export default Home;