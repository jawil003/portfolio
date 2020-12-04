import { useContext } from "react";
import { BodyContext } from "../components/BodyContextProvider";

const useSnapScroll = () => {
  const { setSnapScroll, snapScroll } = useContext(BodyContext);
  return { snapScroll, setSnapScroll };
};
export default useSnapScroll;
