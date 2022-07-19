import React from "react";

function ContactPage() {
  return (
    <section>
      <h1 className="contactMeHead has-text-centered is-size-1 has-text-weight-bold">
        <i class="fa-solid fa-envelope fa-2xs"></i> Contact Me
      </h1>
      <div className="has-text-centered">
        <img
          className="contactPic"
          src={require("../../../src/assets/images/email-13781.png")}
          alt="profilePhoto"
          width="45%"
          height="45%"
        />
      </div>
      <div className="columns is-mobile has-text-centered" id="wrapper">
        <div className="column is-1"></div>
        <div className="column" id="wrapperContent">
          <form id="contact-form">
            <div>
              <label className="nameLabel" htmlFor="name">
                Name
              </label>
              <br />
              <input type="text" name="name" />
            </div>
            <div>
              <label className="emailLabel" htmlFor="email">
                Email Address
              </label>
              <br />
              <input type="email" name="email" />
            </div>
            <div>
              <label className="messageLabel" htmlFor="message">
                Message
              </label>
              <br />
              <textarea name="message" rows="5"></textarea>
            </div>
            <button className="contactButton" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="column is-1"></div>
      </div>
    </section>
  );
}

export default ContactPage;
