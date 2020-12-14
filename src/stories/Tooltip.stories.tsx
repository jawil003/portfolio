import { Story } from "@storybook/react/types-6-0";
import Tooltip, {
  Props as TooltipProps,
} from "../components/elements/generic/Tooltip";

export default { title: "Elements/Tooltip", component: Tooltip };

const TooltipElement: Story<TooltipProps> = (args) => (
  <div
    style={{
      width: "54px",
      height: "54px",
      position: "relative",
      backgroundColor: "#000",
    }}
  >
    <Tooltip {...args} />
  </div>
);

export const Left = TooltipElement.bind({});
Left.args = {
  orientation: "left",
};

export const Right = TooltipElement.bind({});
Right.args = { orientation: "right" };

export const Top = TooltipElement.bind({});
Top.args = { orientation: "top" };

export const Bottom = TooltipElement.bind({});
Bottom.args = { orientation: "bottom" };
