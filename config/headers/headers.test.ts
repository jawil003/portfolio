import toBeType from "jest-tobetype";
import {
  indexHeader,
  errorHeader,
} from "./headers";

expect.extend(toBeType);

const variants = [
  {
    name: "indexHeader",
    data: indexHeader,
  },
  {
    name: "errorHeader",
    data: errorHeader,
  },
];
describe("Headers", () => {
  test.each(variants)(
    "Validate Structure of indexHeader",
    ({ data }) => {
      expect(data).toBeInstanceOf(
        Object,
      );
      expect(data.title).toBeDefined();
      (expect(
        data.title,
      ) as any).toBeType("string");
      expect(
        data.subtitle,
      ).toBeDefined();
      (expect(
        data.subtitle,
      ) as any).toBeType("string");
    },
  );
});
