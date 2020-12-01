import { motion, useSpring, useTransform } from "framer-motion";
import React, { forwardRef, PropsWithChildren, useEffect } from "react";
import flyFromTop from "../variants/flyFromTop";
import ResponsiveImage from "./elements/ResponsiveImage";

interface Props {
  basePath: string;
  image: string;
  imageSet: string[];
  sizes: string;
  alt: string;
  latest?: boolean;
}

/**
 * An Grid React Component.
 * @author
 * @version 0.1
 */
const HeaderWithImage = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  ({ children, imageSet, latest, image, sizes, alt, basePath }, ref) => {
    const x = useSpring(200);
    const opacity = useTransform(x, [200, 0], [0, 1]);
    const handleImageLoaded = () => x.set(0);
    useEffect(() => {
      handleImageLoaded();
    }, []);
    return (
      <div
        ref={ref}
        style={{
          width: "100%",
          height: latest
            ? "calc(100vh - calc(100px + 73px))"
            : "calc(100vh - 100px)",
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
          {children}
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
          <ResponsiveImage
            basePath={basePath}
            src={image}
            srcSet={imageSet}
            sizes={sizes}
            width="100%"
            height="auto"
            alt={alt}
          />
        </motion.div>
      </div>
    );
  }
);

HeaderWithImage.defaultProps = { latest: false };

export default HeaderWithImage;
