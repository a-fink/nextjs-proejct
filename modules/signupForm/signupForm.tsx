import { useState, useEffect, FormEvent } from "react";
import { Container, Main, Card, Form, FormField, Button } from "./styles";
import { useRouter } from "next/router";

interface FormValues {
  name: string;
  email: string;
}

interface Errors {
  name: string;
  email: string;
}

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;
const nameRegex = /^[ a-zA-Z0-9.,'-]+$/;

const getNameError = (name: string) => {
  const nameErrors: string[] = [];

  if (!name) nameErrors.push("Name is required");
  if (name.length > 100) nameErrors.push("Maximum 100 characters");
  if (!name.match(nameRegex))
    nameErrors.push("Only special characters ' , . or - are allowed");

  const firstName = name.split(" ")[0];
  const lastName = name.split(" ").slice(1).join(" ");
  if (!firstName || !lastName)
    nameErrors.push("Please enter a first and last name");

  return nameErrors[0] || "";
};

const getEmailError = (email: string) => {
  const emailErrors: string[] = [];

  if (!email) emailErrors.push("Email is required");
  if (email.length > 255) emailErrors.push("Maximum 255 characters");
  if (!email.match(emailRegex)) emailErrors.push("Please enter a valid email");

  return emailErrors[0] || "";
};

const cleanWhitespace = (str: string) => str.trim().replace(/\s\s+/g, " ");

const SignupForm = () => {
  const [values, setValues] = useState<FormValues>({ name: "", email: "" });
  const [touched, setTouched] = useState(false);
  const [errors, setErrors] = useState<Errors>({ name: "", email: "" });
  const router = useRouter();

  const validateName = () => {
    setErrors((prev) => {
      return { ...prev, name: getNameError(values.name) };
    });
  };

  const validateEmail = () => {
    setErrors((prev) => {
      return { ...prev, email: getEmailError(values.email) };
    });
  };

  const handleNameChange = (e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.value;
    setValues((prev) => {
      return { ...prev, name };
    });
  };

  const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
    const email = e.currentTarget.value;
    setValues((prev) => {
      return { ...prev, email };
    });
  };

  useEffect(() => {
    if (!touched) return;

    validateName();
    validateEmail();
  }, [touched, values.name, values.email]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (errors.name || errors.email) return;

    if (!touched) setTouched(true);

    const { name, email } = values;
    if (getNameError(name) || getEmailError(email)) return;

    router.push({
      pathname: "/confirmation",
      query: { name: cleanWhitespace(name), email: cleanWhitespace(email) },
    });
  };

  return (
    <Container>
      <Main>
        <h1>
          Welcome to <a href="https://relevantequityworks.com/">Relevant</a>
        </h1>
        <Card>
          <p>Want to learn more? Fill in the form below to request a demo.</p>
          <Form onSubmit={handleSubmit}>
            <FormField $hasError={!!errors.name}>
              <label htmlFor="name">Full Name:</label>
              <input
                id="name"
                type="text"
                value={values.name}
                onChange={handleNameChange}
              />
              {errors.name && <p>{errors.name}</p>}
            </FormField>
            <FormField $hasError={!!errors.email}>
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="text"
                value={values.email}
                onChange={handleEmailChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </FormField>
            <Button type="submit">Submit</Button>
          </Form>
        </Card>
      </Main>
    </Container>
  );
};

export default SignupForm;
