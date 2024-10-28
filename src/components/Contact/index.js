import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useRef } from 'react'
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const[letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('gmail', 'template_64l26fs', form.current, 'j765m94EGRXZ2Lbp0')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            (error) => {
              alert('Failed to send the message, please try again')
            },
          );
      };

    return ( 
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
                </h1>
                <p>
                    If you have any questions or would like to chat, please connect with me through LinkedIn, or send me an email below!
                </p>
                <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        </div>
    );
}
 
export default Contact;