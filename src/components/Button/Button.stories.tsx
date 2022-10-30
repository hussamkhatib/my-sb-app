import { ComponentMeta } from "@storybook/react";
import Button from ".";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default = () => <Button />;
export const Size = () => <div className="space-x-4"><Button size="sm" /><Button size="md" /><Button size="lg" /></div>;export const Variant = () => <div className="space-x-4"><Button variant="primary" /><Button variant="secondary" /></div>;