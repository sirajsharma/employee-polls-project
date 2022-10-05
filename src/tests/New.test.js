import React from "react";
import { MemoryRouter } from "react-router";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

import { New } from "../views";

import rootReducer from "../reducers";
import middleware from "../middleware";

const store = createStore(rootReducer, middleware);

describe("New", () => {
  it("will matches the snapshot", () => {
    expect(
      render(
        <MemoryRouter>
          <Provider store={store}>
            <New />
          </Provider>
        </MemoryRouter>
      )
    ).toMatchSnapshot();
  });

  it("will show error toast when submit button is clicked and no text is entered", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <New />
        </Provider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId("submit-button"));

    expect(screen.getByText("Please fill in all fields!")).toBeInTheDocument();
  });
});
