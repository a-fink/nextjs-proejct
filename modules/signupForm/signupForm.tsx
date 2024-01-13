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

const cleanWhitespace = (str: string) => str.trim().replace(/\s\s+/g, " ");

const SignupForm = () => {
  const [values, setValues] = useState<FormValues>({ name: "", email: "" });
  const [touched, setTouched] = useState(false);
  const [errors, setErrors] = useState<Errors>({ name: "", email: "" });
  const router = useRouter();

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

  const handleNameChange = (e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.value;
    setValues((prev) => {
      return { ...prev, name: name };
    });
  };

  const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
    const email = e.currentTarget.value;
    setValues((prev) => {
      return { ...prev, email: email };
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

    setTouched(true);

    const { name, email } = values;
    const nameErrors = getNameError(name);
    const emailErrors = getEmailError(email);
    if (nameErrors || emailErrors) return;

    console.log(values);
    router.push({
      pathname: "/result",
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
                type="email"
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
