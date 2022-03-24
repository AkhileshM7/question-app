import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Form from './components/Form';
import Result from './components/Result';
import Questions from './components/Questions';

describe("test on Form component", () => {
  test("test to find existence of button", () => {
    render(
      <BrowserRouter>
        <Form></Form>
      </BrowserRouter>
    );
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });
});

describe("test on Form component", () => {
  test("finding placeHolder text inside Form component", () => {
    render(
      <BrowserRouter>
        <Form></Form>
      </BrowserRouter>
    );

    const text = screen.getByPlaceholderText(/Enter name/);
    expect(text).toBeInTheDocument();
  });
});

describe("test on form component", () => {
  test("test to find number of textbox element", () => {
    render(
      <BrowserRouter>
        <Form></Form>
      </BrowserRouter>
    );
    const elemet = screen.getAllByRole("textbox");
    expect(elemet.length).toBe(2);
  });
});

describe("test on question component", () => {
  test("test to find number of textbox element", () => {
    render(
      <BrowserRouter>
        <Questions></Questions>
      </BrowserRouter>
    );
    const elemet = screen.getAllByRole("textbox");
    expect(elemet.length).toBe(1);
  });
});

describe("test on Result component", () => {
  test("rendering result component", () => {
    render(
      <BrowserRouter>
        <Result></Result>
      </BrowserRouter>
    );
    screen.debug();
  });
});