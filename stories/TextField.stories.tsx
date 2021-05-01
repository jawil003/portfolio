import {
  Meta,
  Story,
} from "@storybook/react/types-6-0";
import {
  State,
  Store,
} from "@sambego/storybook-state";
import {
  Textfield,
  Props as TextFieldProps,
} from "../components/shared/textfield/textfield";

export default {
  title: "Elements/TextField",
  component: Textfield,
} as Meta;

const store = new Store({
  value: "",
});

const TextFieldElement: Story<TextFieldProps> = (
  args,
) => (
  <State store={store}>
    {(state) => (
      <Textfield
        {...args}
        value={state.value}
        onChange={({
          target: { value },
        }) =>
          store.set({
            value,
          })
        }
      />
    )}
  </State>
);

export const Input = TextFieldElement.bind(
  {},
);
Input.args = {};
