import React from "react";
import Typography from "../generic/Typography";

interface Props {
  heading: string;
  description: string;
}

/**
 * An HeaderWithSubtitle React Component.
 * @author
 * @version 0.1
 */
const HeaderWithSubtitle: React.FC<Props> = ({
  heading,
  description,
  children,
}) => {
  return (
    <div className="container">
      <style jsx>{`
        .container {
          display: inline-block;
        }
        .container
          > :global(*):not(:first) {
          width: 0;
          min-width: 100%;
        }
      `}</style>
      <Typography variant="h3">
        {heading}
      </Typography>
      <Typography
        italic
        wordSpacing={11}
      >
        {description}
      </Typography>
      {children}
    </div>
  );
};

export default HeaderWithSubtitle;
