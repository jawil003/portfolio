import designSystem from "@style/designSystem";
import {
  motion,
  MotionStyle,
} from "framer-motion";
import Link from "next/link";
import React from "react";
import Spacer from "./Spacer";
import Typography from "./Typography";

interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
  style?: MotionStyle;
  href?: string;
}

/**
 * An CategoryCard React Component.
 * @author Jannik Will
 * @version 0.1
 */
const CategoryCard: React.FC<Props> = ({
  icon,
  title,
  description,
  style,
  href,
}) => {
  return (
    <motion.div
      style={{
        ...style,
      }}
    >
      <div
        style={{
          width: "270px",
          height: "405px",
          backgroundColor:
            designSystem.colors.brand
              .primary,
          background:
            designSystem.colors.palette
              .grey.light,
          boxShadow:
            "0px 0px 2px 0px rgba(50, 50, 50, 0.25)",
          padding: "20%",
          display: "grid",
          gridTemplateRows:
            "35% auto 1fr",
          gridTemplateColumns: "auto",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "84px",
          }}
        >
          {icon}
        </div>
        <Spacer height="10px" />
        <div
          style={{
            display: "grid",
            flexDirection: "column",
            justifyContent:
              "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h5"
            align="center"
          >
            {title}
          </Typography>
          <Spacer height="10px" />
          <Typography
            italic
            align="center"
          >
            {description}
            {href
              ? [
                  <Spacer
                    key={
                      href + "-spacer"
                    }
                    height="10px"
                  />,
                  <Link
                    key={href + "-link"}
                    href="knowledge/testDrivenDevelopment"
                  >
                    <a
                      key={
                        href + "-anchor"
                      }
                    >
                      <Typography
                        key={
                          href + "-text"
                        }
                        align="center"
                        underline
                      >
                        Mehr erfahren
                      </Typography>
                    </a>
                  </Link>,
                ]
              : undefined}
          </Typography>
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
