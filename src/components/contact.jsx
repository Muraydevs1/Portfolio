import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import {TbSend2} from 'react-icons/tb';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_bd0opwp", // Service ID
        "template_bgm1s4r", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "oOfLbY2cka1dHA8fJ" // Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Error sending message:", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Me</h2>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-3 md:mx-auto space-y-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 rounded-lg dark:bg-gray-800 border border-gray-200 dark:border-none text-white focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 rounded-lg dark:bg-gray-800 border border-gray-200 dark:border-none text-white focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Email Subject"
          className="w-full p-3 rounded-lg dark:bg-gray-800 border border-gray-200 dark:border-none text-white focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          rows="5"
          className="w-full p-3 rounded-lg dark:bg-gray-800 border border-gray-200 dark:border-none text-white focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-blue-400 hover:bg-blue-600 rounded-lg text-lg font-semibold flex items-center justify-center
          transition-all duration-300 hover:scale-105"
        >
          Send Message <span className="px-2"><TbSend2/> </span>
        </button>
      </form>

      {status && <p className="mt-4 text-lg text-green-400">{status}</p>}
    </section>
  );
}

export default Contact;