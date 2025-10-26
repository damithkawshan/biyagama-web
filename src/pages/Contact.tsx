import React from "react";

function Contact(): JSX.Element {
  return (
    <div className="container" style={{ padding: "40px 0" }}>
      <h2>Contact Us (අමතන්න)</h2>
      <div className="services-grid contact-grid">
        <div>
          <h3>Main Office</h3>
          <p>
            <strong>Address:</strong>
            <br />
            Biyagama Pradeshiya Sabha
            <br />
            No. 123, Main Street
            <br />
            Biyagama, Sri Lanka
          </p>
          <p>
            <strong>📞 Phone:</strong> 011-2411234
            <br />
            <strong>📠 Fax:</strong> 011-2411235
            <br />
            <strong>✉️ Email:</strong> info@biyagama.ps.lk
            <br />
            <strong>🌐 Website:</strong> www.biyagama.ps.lk
          </p>
          <p>
            <strong>Office Hours:</strong>
            <br />
            Monday - Friday: 8:00 AM - 4:00 PM
            <br />
            Saturday: 8:00 AM - 12:00 PM
            <br />
            Sunday & Holidays: Closed
          </p>
        </div>
        <div>
          <h3>Emergency Services</h3>
          <p>
            <strong>24/7 Hotline:</strong> 011-2411999
          </p>
          <ul>
            <li>Fire & Rescue</li>
            <li>Water Supply Emergencies</li>
            <li>Street Light Failures</li>
            <li>Road Accidents</li>
            <li>Illegal Dumping Reports</li>
          </ul>
          <h3>Department Contacts</h3>
          <p>
            <strong>Engineering:</strong> Ext. 210
            <br />
            <strong>Public Health:</strong> Ext. 220
            <br />
            <strong>Revenue:</strong> Ext. 230
            <br />
            <strong>Planning:</strong> Ext. 240
            <br />
            <strong>Waste Management:</strong> Ext. 245
          </p>
        </div>
      </div>
      <h3>Send a Message</h3>
      <form className="contact-form" id="contactForm">
        <input type="text" name="name" placeholder="Your Name *" required />
        <input type="email" name="email" placeholder="Your Email *" required />
        <input type="tel" name="phone" placeholder="Phone Number" />
        <select name="department" required className="select">
          <option value="">Select Department *</option>
          <option value="general">General Inquiry</option>
          <option value="engineering">Engineering</option>
          <option value="health">Public Health</option>
          <option value="revenue">Revenue & Tax</option>
          <option value="waste">Waste Management</option>
          <option value="planning">Planning & Development</option>
        </select>
        <textarea name="message" rows={5} placeholder="Your Message *" required />
        <button type="submit">Send Message</button>
      </form>
      <div style={{ marginTop: 30 }}>
        <h3>Find Us</h3>
        <div className="map-placeholder">
          <iframe
            title="Google Maps Location"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: '8px' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d114182.09871522745!2d79.97510690382342!3d6.957280292337244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbiyagama%20pradeshiya%20sabhawa%20!5e1!3m2!1sen!2sau!4v1761499196003!5m2!1sen!2sau"
          ></iframe>
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <h3>Follow Us on Social Media</h3>
        <div className="social-links">
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#instagram">Instagram</a>
          <a href="#youtube">YouTube</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
