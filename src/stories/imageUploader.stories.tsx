/* eslint-disable import/no-anonymous-default-export */
import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { ImageUploader, ImageUploaderProps } from "../components/imageUploader";

export default {
  title: "Example/ImageUploader",
  component: ImageUploader,
  argTypes: {
    images: {
      control: {
        type: "array",
      },
    },
  },
};

export const imageUploader = (args) => <ImageUploader {...args} />;
