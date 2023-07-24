import "./contact.css";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section-title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact-container container grid">
        <div className="contact-data">
          <h3 className="contact-title">Get in touch</h3>
          <p className="contact-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
            quisquam deserunt, dolore pariatur impedit ad?
          </p>

          <div className="contact-info">
            <div className="info-item">
              <FaEnvelopeOpen className="info-icon" />
              <div className="info-span">
                <span className="info-title">Mail Me</span>
                <span className="info-desc">yusuffdemirci10@gmail.com</span>
              </div>
            </div>
            <div className="info-item">
              <FaPhoneSquareAlt className="info-icon" />
              <div className="info-span">
                <span className="info-title">Call Me</span>
                <span className="info-desc">05434184052</span>
              </div>
            </div>
          </div>
          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/yusuf-demirci-9846141bb/"
              className="contact-social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/Yusufdmrcc"
              className="contact-social-link"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/Yusufdmrc"
              className="contact-social-link"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-input-group">
            <div className="form-input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form-control"
              />
            </div>
            <div className="form-input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form-control"
              />
            </div>
            <div className="form-input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form-control"
              />
            </div>
          </div>

          <div className="form-input-div">
            <textarea
              placeholder="Your Message"
              className="form-control textarea"
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button-icon contact-button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
