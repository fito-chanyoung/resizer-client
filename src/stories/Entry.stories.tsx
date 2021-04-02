/* eslint-disable import/no-anonymous-default-export */
import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { ImageEntryItems, EntryProps } from "../components/imageEntryItems";

export default {
  title: "Example/ImageEntryItems",
  component: ImageEntryItems,
};

export const imageEntryItems = (args) => <ImageEntryItems {...args} />;
