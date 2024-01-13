import styled, { css } from "styled-components";

export const Container = styled.div`
  adding: 0 2rem;
`;

export const Main = styled.main`
  min-height: 100vh;
  width: 100%;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  h1 {
    margin: 0;
    padding: 0 10px;
    line-height: 1.15;
    font-size: 4rem;
    text-align: center;

    @media (max-width: 700px) {
      font-size: 3.5rem;
      width: 85%;
      max-width: 625px;
    }

    @media (max-width: 400px) {
      font-size: 2.5rem;
    }
  }

  a {
    color: #0070f3;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &:active {
      text-decoration: underline;
    }
    &: focus {
      text-decoration: underline;
    }
  }
`;

export const Card = styled.div`
  width: 85%;
  max-width: 625px;
  min-width: 250px;
  padding: 1.5rem 3rem;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 500px) {
    padding: 1.5rem 1.75rem;
  }

  p {
    text-align: left;
    margin: 0;
    line-height: 1.5;
    font-size: 1.6rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.2rem;
`;

export const FormField = styled.div<{ $hasError: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  label {
    color: ${(props) => (props.$hasError ? "#da1a32" : "black")};
    margin-bottom: 0.5rem;
  }

  input {
    padding: 10px 5px;
    border: 2px solid ${(props) => (props.$hasError ? "#da1a32" : "black")};
    border-radius: 5px;
  }

  p {
    font-size: 0.9rem;
    color: #da1a32;
  }
`;

export const Button = styled.button`
  padding: 0.75rem 2rem;
  margin: 1rem 0 0.5rem 0;
  border-radius: 5px;
  border: none;
  background-color: #1a90bf;
  color: white;
  font-size: 1rem;

  &:hover,
  &:focus {
    background-color: #1d9acc;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
