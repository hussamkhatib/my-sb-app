import { ComponentMeta } from "@storybook/react";
import Alert from ".";

export default {
  title: "Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

export const Default = () => <Alert />;
export const Severity = () => (
  <div className="space-x-4">
    <Alert severity="error" />
    <Alert severity="warning" />
    <Alert severity="info" />
    <Alert severity="success" />
  </div>
);
