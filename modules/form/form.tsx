import { useState } from "react";
import { Container, Main } from "./styles";

interface FormValues {
  name: string;
  email: string;
}

interface Touched {
  name: boolean;
  email: boolean;
}

interface Errors {
  name: string;
  email: string;
}

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const getNameError = (name: string) => {
  if (!name) {
    return "Name is required";
  }

  if (name.length > 100) {
    return "Maximum 100 characters";
  }

  const firstName = name.split(" ")[0];
  const lastName = name.split(" ").slice(1).join(" ");
  if (!firstName || !lastName) {
    return "Please enter a first and last name";
  }

  return "";
};

const getEmailError = (email: string) => {
  if (!email) {
    return "Email is required";
  }

  if (email.length > 255) {
    return "Maximum 255 characters";
  }

  if (!email.match(emailRegex)) {
    return "Please enter a valid email";
  }

  return "";
};

const Form = () => {
  const [values, setValues] = useState<FormValues>({ name: "", email: "" });
  const [touched, setTouched] = useState<Touched>({
    name: false,
    email: false,
  });
  const [errors, setErrors] = useState<Errors>({ name: "", email: "" });

  const validateName = () => {
    const nameError = getNameError(values.name);
    setErrors((prev) => {
      return { ...prev, name: nameError };
    });
  };

  const validateEmail = () => {
    const emailError = getEmailError(values.email);
    setErrors((prev) => {
      return { ...prev, email: emailError };
    });
  };

  return (
    <Container>
      <Main>
        <div className="card">
          <h2 className="header">Title</h2>
          <p>Description</p>
          <form>
            <div className="form-input">
              <label htmlFor="name">Full Name:</label>
              <input id="name" type="text" />
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div className="form-input">
              <label htmlFor="email">Email:</label>
              <input id="email" type="text" />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </Main>
    </Container>
  );
};

export default Form;
