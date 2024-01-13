import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  Container,
  Main,
  Card,
  ConfirmationField,
  ConfirmationContainer,
  ErrorCard,
  Button,
} from "./styles";

const SignupConfirmation = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { name, email } = router.query;

    if (name && typeof name === "string") setName(name);
    if (email && typeof email === "string") setEmail(email);

    setLoading(false);
  }, [router.query]);

  return (
    <Container>
      <Main>
        {loading ? null : name && email ? (
          <Card>
            <h2>Interest Confirmed</h2>
            <p>
              Thank you for your interest. The below information has been
              submitted to our team and someone will be in touch shortly.
            </p>
            <ConfirmationContainer>
              <ConfirmationField>
                <p>Name:</p>
                <p>{router.query.name}</p>
              </ConfirmationField>
              <ConfirmationField>
                <p>Email:</p>
                <p>{router.query.email}</p>
              </ConfirmationField>
            </ConfirmationContainer>
          </Card>
        ) : (
          <ErrorCard>
            <h2>OOPS!</h2>
            <div>
              {/* credit lucide icons https://lucide.dev/ */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="125"
                height="125"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#da1a32"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
              </svg>
            </div>
            <p>
              You have reached this page in error. Please return to the sign up
              page to register for a demo.
            </p>
            <Button onClick={() => router.push("/signup")}>Return</Button>
          </ErrorCard>
        )}
      </Main>
    </Container>
  );
};

export default SignupConfirmation;
