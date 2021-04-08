import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Uploader } from "../pages/upload";

export default {
  title: "Example/Uploader",
  component: Uploader,
};

export const uploader = (args) => <Uploader {...args} />;
uploader.args = {
  images: [],
};
