import { useState, ChangeEvent, FormEvent } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Send</button>
      {responseMessage && <p>{responseMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}

export default Contact;
