import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapPin } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const countries = ["India", "Russia", "USA", "Japan", "France", "Brazil"];

  return (
    <section id="contact">
      <div className="title">
        <h1 className="font-color">Contact Us</h1>
        <div className="line"></div>
      </div>

      <div className="contact_us">
        {/* Contact Form */}
        <form className="cform" action="" method="post">
          <div className="crow-message">
            <h1 className="color">Send us a message</h1>
            <div></div>
          </div>

          <div className="crow-in">
            <input type="text" id="name" name="name" placeholder="Your name" />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your Email id"
            />
          </div>

          <div className="crow">
            <div className="ccol-left">
              <select name="country" id="country">
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="crow">
            <div className="ccol-left">
              <textarea
                type="text"
                id="remarks"
                name="remarks"
                placeholder="Your Remarks....."
                style={{ height: "150px" }}
              ></textarea>
            </div>
          </div>

          <input className="crow-s" type="submit" value="Submit" />
        </form>

        {/* Contact Information */}
        <div className="cbox">
          <div>
            <p className="cbox-message">
              Prefer some other way ?<br />
              Reach us by using the details given below
            </p>
            <div className="cbox-line"></div>
          </div>

          <div className="c_boxx">
            <a href="mailto:abc@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp; Mail: Review@EasyGoVenture.com
            </a>
          </div>

          <div className="c_boxx">
            <a href="tel:+91-12345-67890">
            <FontAwesomeIcon icon={faPhone} />
            &nbsp; Phone: (+91) 12345-67890
            </a>
          </div>

          <div className="c_boxx">
            <a href="#">
            <FontAwesomeIcon icon={faMapPin} />
            &nbsp; Location: Banglore, Karnataka, India
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
