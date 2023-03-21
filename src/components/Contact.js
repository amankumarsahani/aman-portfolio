import React from "react";
import { contact } from "../data";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content:contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact Me
          </h2>
          <p className="subtitle">
            Lorem32Lorem32Lorem32Lorem32Lorem32Lorem32Lorem3
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row ">
          <ContactDetails contact={contact}/>

          <ContactForm/>
        </div>
      </div>
    </section>
  );
}

export default Contact;
