import React from "react";
import KnowledgeDesign from "./designs/knowledge.design";
import Typography from "./elements/Typography";

interface Props {}

/**
 * An HowCanIHelpYouHeader React Component.
 * @author Jannik Will
 * @version 0.1
 */
const HowCanIHelpYouHeader: React.FC<Props> = () => {
  return (
    <div
      style={{
        height: "calc(100vh - 100px)",
        display: "grid",
        gridTemplateColumns: "50% 50%",
        gridTemplateRows: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">Wie kann ich dir helfen?</Typography>
        <Typography>
          Vielleicht sagt dir ja eines meiner Fachgebiete zu, dann kontaktiere
          mich gerne
        </Typography>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <KnowledgeDesign width="100%" />
      </div>
    </div>
  );
};

export default HowCanIHelpYouHeader;
