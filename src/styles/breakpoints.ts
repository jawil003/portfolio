import designSystem from "./designSystem";
import facepaint from "facepaint";

const mq = facepaint([
  `@media (min-width: ${designSystem.bp(
    "phoneOnly",
  )})`,
  `@media (min-width: ${designSystem.bp(
    "tabletPortraitUp",
  )})`,
  `@media (min-width: ${designSystem.bp(
    "tabletLandscapeUp",
  )})`,
  `@media (min-width: ${designSystem.bp(
    "desktopUp",
  )})`,
  `@media (min-width: ${designSystem.bp(
    "bigDesktopUp",
  )})`,
]);

export default mq;
