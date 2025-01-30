import React from "react";
import Invoice from "./Invoice"; // Ensure this is the correct relative path

export default {
  title: "Components/invoice1/Invoice",
  component: Invoice,
};

const Template = (args) => <Invoice {...args} />;

export const Default = Template.bind({});
Default.args = {};
