import { useState, ChangeEvent, FormEvent } from "react";
import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  /**
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    console.log(form);
  };
     */
  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form behavior

    try {
      const response = await fetch("http://18.222.165.111/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form), // Convert the formData object to a JSON string
      });

      if (response.ok) {
        console.log("submitted");
        const result = await response.json(); // Assuming the API returns a JSON response
        alert("Form submitted successfully!" + JSON.stringify(result));
        setResponseMessage("Form submitted successfully!");
      } else {
        throw new Error("Something went wrong. Please try again.");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unknown error occurred.");
      }
    }
  };

  return (
    <Container className="my-5">
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={3}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
        {responseMessage && <p>{responseMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
      </Form>
    </Container>
  );
}

export default Contact;
