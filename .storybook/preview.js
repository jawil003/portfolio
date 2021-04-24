import "../public/index.css";
import globalStyles from "../styles/styles.tsx";

export const decorators = [
  (Story) => (
    <>
      {globalStyles}
      <Story />
    </>
  ),
];

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*",
  },
  layout: "centered",
};
