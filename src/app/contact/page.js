"use client";

import { useState } from "react";
import {
  Mail,
  User,
  MessageSquare,
  Phone,
  Linkedin,
  Facebook,
  Github,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="contact-container grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* === Sidebar / Contact Info === */}
        <div className="md:col-span-1 contact-sidebar">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Contact Info
          </h2>

          <div className="contact-icons">
            <div className="hex-icon" title="Name">
              <div className="hex">
                <User className="icon" />
              </div>
              <span className="hex-label">Philip Mark Nielsen</span>
            </div>

            <a href="tel:+4542216198" className="hex-icon" title="Phone">
              <div className="hex">
                <Phone className="icon" />
              </div>
              <span className="hex-label">+45 42 21 61 98</span>
            </a>

            <a
              href="mailto:phulip.nielsen@gmail.com"
              className="hex-icon"
              title="Email"
            >
              <div className="hex">
                <Mail className="icon" />
              </div>
              <span className="hex-label">phulip.nielsen@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/phni"
              target="_blank"
              rel="noopener noreferrer"
              className="hex-icon"
              title="LinkedIn"
            >
              <div className="hex">
                <Linkedin className="icon" />
              </div>
              <span className="hex-label">linkedin.com/in/phni</span>
            </a>

            <a
              href="https://facebook.com/Nuggitlive"
              target="_blank"
              rel="noopener noreferrer"
              className="hex-icon"
              title="Facebook"
            >
              <div className="hex">
                <Facebook className="icon" />
              </div>
              <span className="hex-label">facebook.com/Nuggitlive</span>
            </a>

            <a
              href="https://github.com/nuggitt"
              target="_blank"
              rel="noopener noreferrer"
              className="hex-icon"
              title="GitHub"
            >
              <div className="hex">
                <Github className="icon" />
              </div>
              <span className="hex-label">github.com/nuggitt</span>
            </a>
          </div>
        </div>

        {/* === Main Form === */}
        <div className="md:col-span-2">
          <h2 className="contact-title">Contact</h2>
          <p className="contact-subtitle">
            Feel free to reach out for opportunities or questions!
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label className="form-label">
                <User className="icon" />
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <Mail className="icon" />
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <MessageSquare className="icon" />
                Message
              </label>
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="form-button">
              Send Message
            </button>

            {submitted && (
              <p className="form-success text-green-600 dark:text-green-400 mt-4 text-sm">
                Thanks for your message!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
