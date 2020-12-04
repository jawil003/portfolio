import { motion, useSpring, useTransform } from "framer-motion";
import React, { forwardRef, PropsWithChildren, useEffect } from "react";
import flyFromTop from "../../variants/flyFromTop";
import ResponsiveImage from "../elements/generic/ResponsiveImage";

const getHeightForSection = (first?: boolean, latest?: boolean) => {
  if (first && latest) {
    return "calc(100vh - calc(70px + 100px))";
  } else if (first) {
    return "calc(100vh - 100px)";
  } else if (latest) {
    return "calc(100vh - 70px)";
  }
  return "100vh";
};

interface Props {
  align?: "left" | "right";
  basePath: string;
  image: string;
  imageSet: string[];
  sizes: string;
  alt: string;
  first?: boolean;
  latest?: boolean;
}

/**
 * An Grid React Component.
 * @author
 * @version 0.1
 */
const HeaderWithImage = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  (
    { children, imageSet, latest, image, sizes, alt, basePath, align, first },
    ref
  ) => {
    const x = useSpring(200);
    const opacity = useTransform(x, [200, 0], [0, 1]);
    const handleImageLoaded = () => x.set(0);
    useEffect(() => {
      handleImageLoaded();
    }, []);
    return (
      <header
        ref={ref}
        style={{
          flex: 1,
          width: "100%",
          height: getHeightForSection(first, latest),
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gridTemplateRows: "100%",
        }}
      >
        <motion.div
          variants={flyFromTop}
          initial="initial"
          animate="animate"
          style={{
            flex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "105px",
          }}
        >
          {align === "right" ? (
            children
          ) : (
            <ResponsiveImage
              basePath={basePath}
              src={image}
              srcSet={imageSet}
              sizes={sizes}
              width="100%"
              height="auto"
              alt={alt}
            />
          )}
        </motion.div>
        <motion.div
          style={{
            flex: 1,
            x,
            opacity,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10%",
          }}
        >
          {align === "left" ? (
            children
          ) : (
            <ResponsiveImage
              basePath={basePath}
              src={image}
              srcSet={imageSet}
              sizes={sizes}
              width="100%"
              height="auto"
              alt={alt}
            />
          )}
        </motion.div>
      </header>
    );
  }
);

HeaderWithImage.defaultProps = { latest: false, align: "right", first: false };

export default HeaderWithImage;
