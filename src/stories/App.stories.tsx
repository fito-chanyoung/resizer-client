import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { App } from "../App";

export default {
  title: "Example/App",
  component: App,
};

export const app = () => <App />;
