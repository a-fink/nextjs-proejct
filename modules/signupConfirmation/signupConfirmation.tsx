import { useRouter } from "next/router";
import {
  Container,
  Main,
  Card,
  ConfirmationField,
  ConfirmationContainer,
} from "./styles";

const SignupConfirmation = () => {
  const router = useRouter();
  const { name, email } = router.query;

  return (
    <Container>
      <Main>
        {name && email ? (
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
          <div>Error</div>
        )}
      </Main>
    </Container>
  );
};

export default SignupConfirmation;
