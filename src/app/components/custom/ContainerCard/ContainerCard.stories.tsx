import { ContainerCard } from "./index";

export default {
  title: "components/customcomponents/containercard",
  component: ContainerCard,
  parameters: { status: { type: "beta" } },
};

export const Default = () => <ContainerCard />;
