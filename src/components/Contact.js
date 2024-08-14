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
          <p className="subtitle mb-12">
            LI’d love to hear from you! Whether you have a question, a project idea, or just want to connect, feel free to reach out. Please fill out the form below, or use the contact information provided.
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
