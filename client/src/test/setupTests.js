import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import fetchMock from "jest-fetch-mock";

global.React = React;
global.render = render;
global.userEvent = userEvent;
fetchMock.enableMocks();

//consider msw next time for more robust mock response testing
