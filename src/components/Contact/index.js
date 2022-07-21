import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("You have entered an invalid Email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section>
      <h1 className="contactMeHead has-text-centered is-size-1 has-text-weight-bold">
        <i class="fa-solid fa-envelope fa-2xs"></i> Contact Me
      </h1>
      <div className="columns is-mobile has-text-centered" id="wrapper">
        <div className="column"></div>
        <div className="column is-two-thirds" id="wrapperContent">
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label className="nameLabel" htmlFor="name">
                Name
              </label>
              <br />
              <input
                type="text"
                name="name"
                defaultValue={name}
                onBlur={handleChange}
              />
            </div>
            <div>
              <label className="emailLabel" htmlFor="email">
                Email Address
              </label>
              <br />
              <input
                type="email"
                name="email"
                defaultValue={email}
                onBlur={handleChange}
              />
            </div>
            <div>
              <label className="messageLabel" htmlFor="message">
                Message
              </label>
              <br />
              <textarea
                name="message"
                rows="5"
                defaultValue={message}
                onBlur={handleChange}
              ></textarea>
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button className="contactButton" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="column"></div>
      </div>
    </section>
  );
}

export default ContactPage;
