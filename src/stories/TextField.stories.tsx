import {
  Meta,
  Story,
} from "@storybook/react/types-6-0";
import TextField, {
  Props as TextFieldProps,
} from "../components/elements/generic/TextField";
import {
  State,
  Store,
} from "@sambego/storybook-state";

export default {
  title: "Elements/TextField",
  component: TextField,
} as Meta;

const store = new Store({
  value: "",
});

const TextFieldElement: Story<TextFieldProps> = (
  args,
) => (
  <State store={store}>
    {(state) => (
      <TextField
        {...args}
        value={state.value}
        onChange={({
          target: { value },
        }) => store.set({ value })}
      />
    )}
  </State>
);

export const Input = TextFieldElement.bind(
  {},
);
Input.args = {};

export const Area = TextFieldElement.bind(
  {},
);
Area.args = {
  area: true,
  rows: 5,
};
