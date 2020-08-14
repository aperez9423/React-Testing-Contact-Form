import React from "react";
import { render, fireEvent, getByText, waitFor } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm.js";
import { Simulate } from "react-dom/test-utils";

test("renders App without crashing", () => {
  render(<App />);
});

test("contains First Name input field that works", () => {
  const { getByTestId } = render(<ContactForm/>);
  //Act: query to find the First Name input field
  const input = getByTestId(/firstname/i);
  fireEvent.change(input, { target: { value: "Ann" } });
  expect(input.value).toBe("Ann");
});

test("contains Last Name input field that works", () => {
  const { getByTestId } = render(<ContactForm/>);
  //Act: query to find the Last Name input field
  const input = getByTestId(/lastname/i);
  fireEvent.change(input, { target: { value: "Hawk" } });
  expect(input.value).toBe("Hawk");
});

test("contains Email input field that works", () => {
  const { getByTestId } = render(<ContactForm/>);
  //Act: query to find the Email input field
  const input = getByTestId(/email/i);
  fireEvent.change(input, { target: { value: "annhawk123@gmail.com" } });
  expect(input.value).toBe("annhawk123@gmail.com");
});

test("contains Email input field that works", () => {
  const { getByTestId } = render(<ContactForm/>);
  //Act: query to find the Email input field
  const input = getByTestId(/message/i);
  fireEvent.change(input, { target: { value: "This is a message" } });
  expect(input.value).toBe("This is a message");
});

test("submit button functionality", () => {
  const { getByTestId, getByRole } = render(<ContactForm/>);
  const onSubmit = getByTestId(/submit/i);
  fireEvent.click(getByRole('submit'), onSubmit)
})

test("check maxlength on name", async () => {
  const { getByTestId, queryByText } = render(<ContactForm />);
  const firstName = getByTestId(/firstname/i);
  const lastName = getByTestId(/lastname/i);
  const error = queryByText(/looks/i)

  fireEvent.change(firstName, { target: {value: "Angelica"} });
  fireEvent.change(lastName, { target: {value: "Perez"} });

  await waitFor( () => {
    expect(queryByText(/looks/i));
  })
});