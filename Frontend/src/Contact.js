import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("true");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const response = await fetch(
      "http://localhost:5000/api/contact",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(formData)
      }
    );

    const data = await response.json();

    setMessage(data.message);

  setMessageType(
  data.success ? "success" : "error"
  );

  setTimeout(() => {

  setMessage("");

  }, 3000);


    setFormData({
      name: "",
      email: "",
      message: ""
    });

  };

  return (

    <div className="container">

  <div className="row justify-content-center">

    <div className="col-lg-9 col-md-10 col-12">

      {/* Contact Card */}

      <div className="contact-page">
    <div className="pt-3">
      {
      message && (

        <div
          className={
            messageType === "success"
              ? "message success-message"
              : "message error-message"
          }
        >
          {message}
        </div>

      )
     }

      <div className="contact-card">

        <h1 className="contact-title">
          Contact Us
        </h1>

        <p className="contact-subtitle">
          We'd love to hear from you
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="contact-input"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="contact-input"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="contact-textarea"
          />

          <button className="contact-btn">
            Send Message
          </button>

        </form>

        <div className="contact-info">

          <p>📍 Porur, Chennai, Tamil Nadu</p>

          <p>📧 nexostud16@gmail.com</p>

          <p>📞 +91 9976764859</p>

        </div>

      </div>

    </div>
    </div>

    </div>

  </div>

</div>

    
  );
  
}

export default Contact;