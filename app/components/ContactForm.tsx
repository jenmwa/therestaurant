import { ChangeEvent, FormEvent, useState } from "react";
import { SubmitButton } from "./styled/Buttons";
import { Form } from "./styled/Forms";
import { Label, StyledInput, Textarea } from "./styled/Inputs";

interface IContactForm {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const [contactInput, setContactInput] = useState<IContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleContactForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const nameInput = e.target.name;
    const value = e.target.value;
    console.log(nameInput);
    setContactInput({ ...contactInput, [nameInput]: value });

    console.log(contactInput);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("submitting message: ", contactInput);
    setContactInput({ name: "", email: "", message: "" });
  };

  return (
    <>
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
        <SubmitButton>Submit the Message</SubmitButton>
      </Form>
    </>
  );
};
