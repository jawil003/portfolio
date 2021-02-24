import React from "react";

interface Props {
  basePath: string;
  src: string;
  srcSet: string[];
  sizes: string;
  width: string;
  height: string;
  alt: string;
}

/**
 * An ResponsiveImage React Component.
 * @author Jannik Will
 * @version 0.1
 */
const ResponsiveImage: React.FC<Props> = ({
  basePath,
  width,
  height,
  src,
  srcSet,
  sizes,
  alt,
}) => {
  return (
    <picture>
      <img
        src={basePath + src}
        srcSet={srcSet
          .map((s) => basePath + s)
          .join(", ")}
        sizes={sizes}
        width={width}
        height={height}
        alt={alt}
      />
    </picture>
  );
};

export default ResponsiveImage;
