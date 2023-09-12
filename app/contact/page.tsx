"use client";

import { ContactForm } from "../components/ContactForm";
import { H1 } from "../components/styled/Headings";
import { Section } from "../components/styled/Sections";

export function Contact() {
  return (
    <>
      <Section>
        <H1>Contact</H1>
        <ContactForm></ContactForm>
      </Section>
    </>
  );
}

export default Contact;
