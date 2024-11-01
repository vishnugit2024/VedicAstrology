import React, { useState, useEffect } from "react";
import "./Contact.css";
import { FaAngleRight, FaPhoneAlt } from "react-icons/fa";
import { IoLocation, IoMail } from "react-icons/io5";
import Designstar from "../../Assets/DesignStar.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [active, setActive] = useState(false);

  const handleActiveChange = () => {
    setActive(!active);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Vedic Jyotishe</title>
        <meta
          name="description"
          content="Reach out to Vedic Jyotishe for consultations and astrological insights. Get in touch via phone, email, or visit us at our location."
        />
        <meta
          name="keywords"
          content="Vedic astrology contact, contact Vedic Jyotishe, astrology consultation, contact form"
        />
        <meta property="og:title" content="Contact Us - Vedic Jyotishe" />
        <meta
          property="og:description"
          content="Get in touch with Vedic Jyotishe for personalized astrological consultations. Visit us, call, or email for more information."
        />
        <meta property="og:image" content="/images/contact-page.jpg" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.vedicjyotishe.com/contact"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section>
        <div className="container">
          <div className="row">
            <div className="pagetop py-2">
              <div className="pagetitle">
                <h1>Contact Us</h1>
              </div>
              <div className="changepage">
                <p>
                  <Link
                    onClick={handleActiveChange}
                    to={"/"}
                    className="render"
                  >
                    Home
                  </Link>{" "}
                  <span>
                    <FaAngleRight /> Contact
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <hr className="divide m-0" />
          </div>
        </div>
      </section>

      <section className="mainbg1">
        <div className="container">
          <div className="contact-form-section">
            {/* Contact Info Section */}
            <div className="row contact-info justify-content-center">
              <div className="col-md-3 info-box">
                <IoLocation className="icon" />
                <p>
                  Valmark Cityville, Doddakamanahalli, Hulimavu House #528,
                  Block # 14, Tejeswini Nagar BENGALURU, KARNATAKA 560076 India
                </p>
              </div>
              <div className="col-md-3 info-box">
                <IoMail className="icon" />
                <p>
                  <a href="mailto:VedicJyotishe@outlook.com">
                    VedicJyotishe@outlook.com
                  </a>
                </p>
              </div>
              <div className="col-md-3 info-box">
                <FaPhoneAlt className="icon" />
                <p>
                  <a href="tel:+916366052167">+91 6366052167</a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="row form-container">
              <div className="col-md-6">
                <div className="designstar">
                  <img src={Designstar} alt="" />
                </div>
                <h3>Get In Touch</h3>
                <p className="contact-text">
                  Get a comprehensive analysis of your characteristics,
                  personality, temperament, strengths, and weaknesses based on
                  the placement of signs and planets in your birth chart. This
                  insight can be invaluable when making important life
                  decisions.
                </p>
              </div>
              <div className="col-md-6">
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone number"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Comment"
                      rows="5"
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.7023088909064!2d77.60185047483947!3d12.862494087442972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ad90ed7d17b%3A0xca37e070bbe9932a!2sValmark%20Cityville!5e0!3m2!1sen!2sin!4v1730452782955!5m2!1sen!2sin"
              width="1500"
              height="500"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
