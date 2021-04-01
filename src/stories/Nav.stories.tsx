import * as React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Nav, navProps } from "../components/nav";
import { Story } from "@storybook/react";

export default {
  title: "Example/Nav",
  component: Nav,
};

const template: Story<navProps> = (args) => <Nav {...args} />;

export const LoggedIn = template.bind({});
LoggedIn.args = {
  isLogin: true,
};
/*
const Template: Story<PageProps> = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};

*/
