import React from "react";
import { MemoryRouter } from "react-router";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

import { SignIn } from "../views";

import rootReducer from "../reducers";
import middleware from "../middleware";

const store = createStore(rootReducer, middleware);

describe("SignIn", () => {
  it("render username field, password field, and login button", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SignIn />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByTestId("username")).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
    expect(screen.getByTestId("login-button")).toBeInTheDocument();
  });

  it("Store must contain username after successful login", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SignIn />
        </Provider>
      </MemoryRouter>
    );

    const username = screen.getByTestId("username");
    const password = screen.getByTestId("password");

    fireEvent.change(username, { target: { value: "sarahedo" } });
    fireEvent.change(password, {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByTestId("login-button"));

    setTimeout(() => {
      expect(store.getState().authdUser).toEqual("sarahedo");
    }, 2000);
  });

  it("will display error message if urername or password is empty", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SignIn />
        </Provider>
      </MemoryRouter>
    );

    const username = screen.getByTestId("username");
    const password = screen.getByTestId("password");

    fireEvent.change(username, { target: { value: "" } });
    fireEvent.change(password, { target: { value: "" } });
    fireEvent.click(screen.getByTestId("login-button"));
    expect(
      screen.getByText("Please enter a username and password.")
    ).toBeInTheDocument();
  });
});
