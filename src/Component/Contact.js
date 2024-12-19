import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
    .send(
      'service_93gc8do', // Your service ID
      'template_z02ot7r', // Your template ID
      formData, // Form data to be sent
      'arSJab_WKh7NE8LrV' // Your public key
    )
    .then(
      (response) => {
        console.log('Message sent successfully', response);
        // Alert on success
        alert('Your message has been sent successfully!');
        // Optionally, you can reset the form here
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        console.error('Error sending message:', error);
        // Alert on error
        alert('There was an error sending your message. Please try again later.');
      }
    );
};

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Get in Touch</h2>
      <p className="contact-subheading">I would love to hear from you! Please send me a message.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>

        <div className="input-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
