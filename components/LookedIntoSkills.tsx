import IndexItem from "./IndexItem";
import SkillItem from "./SkillItem";
import SwiftIcon from "./icons/swift.icon";
import { CPlusPlusIcon } from "./icons/cplusplus.icon";
import { PythonLogo } from "./icons/python.icon";
import { TensorflowIcon } from "./icons/tensorflow.icon";
import { useTranslation } from "next-translate";

const LookedIntoSkills: React.FC = () => {
  const { t } = useTranslation();
  return (
    <IndexItem title={t("common:skills3")}>
      <SkillItem
        href="https://swift.org/"
        icon={<SwiftIcon fontSize="large" />}
      >
        Swift
      </SkillItem>
      <SkillItem
        href="https://docs.microsoft.com/de-de/cpp/?view=vs-2019"
        icon={<CPlusPlusIcon fontSize="large" />}
      >
        C++
      </SkillItem>
      <SkillItem
        href="https://docs.microsoft.com/de-de/cpp/?view=vs-2019"
        icon={<PythonLogo fontSize="large" />}
      >
        Python
      </SkillItem>
      <SkillItem
        href="https://www.tensorflow.org/"
        icon={<TensorflowIcon fontSize="large" />}
      >
        TensorFlow
      </SkillItem>
    </IndexItem>
  );
};
export default LookedIntoSkills;
