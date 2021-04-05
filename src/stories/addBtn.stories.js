import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { AddImageBtn, modalProps } from "../components/addImgBtn";

export default {
  title: "Example/AddImageBtn",
  component: AddImageBtn,
};

export const imageEntryItems = (args) => <AddImageBtn {...args} />;
imageEntryItems.args = {
  images: [],
};
