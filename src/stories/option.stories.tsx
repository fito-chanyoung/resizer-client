import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Options } from "../components/options";

export default {
  title: "Example/Options",
  component: Options,
};

export const options = (args) => <Options {...args} />;
options.args = {
  option: {
    width: 0,
    height: 0,
    aspectRatio: true,
    doNotEnglare: false,
    manualPercentage: false,
    percentage: 50,
    multiple: false,
  },
  isPixel: true,
  optionHandler: (e: any) => {
    console.log(e);
  },
};
