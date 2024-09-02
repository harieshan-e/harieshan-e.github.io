import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/h-logo.png'
import LogoSubtitle from '../../assets/images/Publication1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
    <div className="nav-bar">
        <Link className = 'logo' to ='/'>
            <img src ={Logo} alt="logo" />
        </Link>
        <div className="sub-logo"> Harieshan </div>

    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color = "#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color = "#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color = "#4d4d4e" />
        </NavLink>
    </nav>

    <ul>
        <li>
            <a target = "_blank" rel="noreferrer" href="https://www.linkedin.com/in/harieshan/">
                <FontAwesomeIcon icon={faLinkedin} color="#4d4de"/>
            </a>
        </li>
        <li>
            <a target = "_blank" rel="noreferrer" href="https://github.com/harieshan-e">
                <FontAwesomeIcon icon={faGithub} color="#4d4de"/>
            </a>
        </li>
    </ul>
    </div>
    )
}


 
export default Sidebar;