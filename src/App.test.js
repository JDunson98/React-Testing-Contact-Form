import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm';

test("renders App without crashing", () => {
  render(<App />);
});

test("Form can sumbit", () => {
  render(<ContactForm />);

  const firstNameInput  = screen.getByTestId(/firstName/i)
  const lastNameInput = screen.getByTestId(/lastName/i)
  const emailInput = screen.getByTestId(/email/i)
  const messageInput = screen.getByTestId(/message/i)

  fireEvent.change(firstNameInput, {
    target: {value: "First"}
  });
  fireEvent.change(lastNameInput, {
    target: {value: "Last"}
  });
  fireEvent.change(emailInput, {
    target: {value: "email@email.com"}
  });
  fireEvent.change(messageInput, {
    target: {value: "hello"}
  });
})