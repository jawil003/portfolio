import { motion, useSpring } from "framer-motion";
import React, { forwardRef, PropsWithChildren, useEffect } from "react";
import flyFromTop from "../../variants/flyFromTop";
import ResponsiveImage from "../elements/generic/ResponsiveImage";
import styles from "./HeaderWithImage.module.css";

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
    const handleImageLoaded = () => x.set(0);
    useEffect(() => {
      handleImageLoaded();
    }, []);
    return (
      <header
        className={styles.header}
        ref={ref}
        style={{
          height: getHeightForSection(first, latest),
        }}
      >
        <motion.div variants={flyFromTop} initial="initial" animate="animate">
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
        <motion.div>
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
