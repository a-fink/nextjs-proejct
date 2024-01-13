import { useState, useEffect, FormEvent } from "react";
import { Container, Main } from "./styles";
import { useRouter } from "next/router";

interface FormValues {
  name: string;
  email: string;
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
    router.push({ pathname: "/result", query: { name, email } });
  };

  return (
    <Container>
      <Main>
        <div className="card">
          <h2 className="header">Title</h2>
          <p>Description</p>
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <label htmlFor="name">Full Name:</label>
              <input
                id="name"
                type="text"
                value={values.name}
                onChange={handleNameChange}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div className="form-input">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="text"
                value={values.email}
                onChange={handleEmailChange}
              />
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
