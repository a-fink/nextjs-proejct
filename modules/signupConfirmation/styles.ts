import styled from "styled-components";

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
  gap: 1.5rem;

  @media (max-width: 500px) {
    padding: 1.5rem 1.75rem;
  }

  h2 {
    border-bottom: 1px solid #eaeaea;
    font-size: 1.5rem;
  }

  p {
    text-align: left;
    margin: 0;
    line-height: 1.5;
    font-size: 1.1rem;
  }
`;

export const ConfirmationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const ConfirmationField = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  p:first-child {
    font-weight: 500;
  }

  p:last-child {
    padding-left: 0.75rem;
    word-break: break-all;
  }
`;

export const ErrorCard = styled.div`
  width: 60%;
  max-width: 400px;
  min-width: 250px;
  padding: 1.5rem 3rem;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  text-align: center;

  @media (max-width: 500px) {
    padding: 1.5rem 1.75rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    padding: 0 1rem;
  }
`;

export const Button = styled.button`
  width: 50%;
  padding: 0.75rem 2rem;
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
