import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div id="contact" className="contact">
      <h1>Contact</h1>
      <div className="contact-to">
        <div className="left">
          <h4>Send Message</h4>
          <form>
            <input type="email" placeholder="Gmail" />
            <textarea cols="49" rows="5" placeholder="Message"></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
        <div className="right">
          <h4>Address</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978.402560892581!2d108.54610779999999!3d-7.375726200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f620d527c3821%3A0xb708fc32209255d5!2sJGFW%2BMFJ%2C%20Pataruman%2C%20Kec.%20Pataruman%2C%20Kota%20Banjar%2C%20Jawa%20Barat%2046323!5e0!3m2!1sid!2sid!4v1715575564127!5m2!1sid!2sid"
            width="100%"
            height="300px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
