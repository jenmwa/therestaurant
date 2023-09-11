import { SubmitButton } from "./styled/Buttons";
import { Form } from "./styled/Forms";
import { Label, StyledInput, Textarea } from "./styled/Inputs";

export const ContactForm = () => {
  return (
    <>
      <Form>
        <Label>
          Your Name:
          <StyledInput type="text" placeholder="Jane Doe"></StyledInput>
        </Label>
        <Label>
          Your Email:
          <StyledInput
            type="email"
            placeholder="youremail@mail.com"
          ></StyledInput>
        </Label>
        <Label>
          Your Message:
          <Textarea></Textarea>
        </Label>
        <SubmitButton>Submit the Message</SubmitButton>
      </Form>
    </>
  );
};
