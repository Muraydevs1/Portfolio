import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import {TbSend2} from 'react-icons/tb';

const fieldClass = "w-full p-3 rounded-lg bg-white text-neutral-950 placeholder-neutral-400 border border-neutral-200 dark:bg-neutral-900 dark:text-neutral-50 dark:placeholder-neutral-500 dark:border-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600";

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
          className={fieldClass}
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className={fieldClass}
          required
        />

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Email Subject"
          className={fieldClass}
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          rows="5"
          className={fieldClass}
          required
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-neutral-950 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 rounded-lg text-lg font-semibold flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-neutral-600 dark:focus-visible:ring-offset-neutral-950"
        >
          Send Message <span className="px-2"><TbSend2/> </span>
        </button>
      </form>

      {status && <p className="mt-4 text-lg text-green-600 dark:text-green-400">{status}</p>}
    </section>
  );
}

export default Contact;