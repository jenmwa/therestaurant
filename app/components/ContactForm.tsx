import { ChangeEvent, FormEvent, useState } from "react";
import { SubmitButton } from "./styled/Buttons";
import { Form } from "./styled/Forms";
import { Label, StyledInput, Textarea } from "./styled/Inputs";
import Link from "next/link";

interface IContactForm {
  name: string;
  email: string;
  message: string;
}

const isInputNotEmpty = (inputValue: string) => {
  return inputValue !== "";
};

export const ContactForm = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [isConfirmedContact, setIsConfirmedContact] = useState(false);
  const [contactInput, setContactInput] = useState<IContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleContactForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(name);
    setContactInput({ ...contactInput, [name]: value });

    const allInputsValid =
      isInputNotEmpty(contactInput.name) &&
      isInputNotEmpty(contactInput.email) &&
      isInputNotEmpty(contactInput.message);

    setIsFormValid(allInputsValid);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("submitting message: ", contactInput);
    setIsConfirmedContact(true);
    setContactInput({ name: "", email: "", message: "" });
  };

  return (
    <>
      {!isConfirmedContact ? (
        <Form onSubmit={handleSubmit}>
          <Label>
            Your Name:
            <StyledInput
              type="text"
              placeholder="Jane Doe"
              value={contactInput.name}
              onChange={handleContactForm}
              name="name"
            ></StyledInput>
          </Label>
          <Label>
            Your Email:
            <StyledInput
              type="email"
              placeholder="youremail@mail.com"
              value={contactInput.email}
              onChange={handleContactForm}
              name="email"
            ></StyledInput>
          </Label>
          <Label>
            Your Message:
            <Textarea
              value={contactInput.message}
              onChange={handleContactForm}
              name="message"
            ></Textarea>
          </Label>
          <span>
            By contacting us you agree to our{" "}
            <Link href="/privacyPolicy">Privacy Policy.</Link>
          </span>
          <SubmitButton disabled={!isFormValid}>
            Submit the Message
          </SubmitButton>
        </Form>
      ) : (
        <div>
          <p>Thank you for contacting us {contactInput.name}</p>
        </div>
      )}
    </>
  );
};
