import { Button } from "@material-ui/core";
import React from "react";
import theme from "themes/theme";
import PhoneDesign from "./designs/Phone";
import PhoneMockup from "./PhoneMoockup";

const Showcase: React.FC = () => {
  return (
    <div>
      <div
        style={{
          height: "70px",
          position: "relative",
          display: "grid",
          justifyContent: "start",
          alignContent: "center",
          padding: "30px 20px",
          marginBottom: "10px",
        }}
      >
        <p
          style={{
            color: theme.palette.primary.main,
            fontWeight: "bold",
            fontSize: "1.6em",
          }}
        >
          <span style={{}}>Local</span>
          <span
            style={{
              color: "#000",
              position: "relative",
              top: "25px",
              right: "30px",
            }}
          >
            Track
          </span>
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          height: "calc(100vh - 80px)",
          padding: "10px 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <p style={{ textAlign: "center" }}>
            <span
              style={{
                display: "block",
                fontWeight: "bold",
                fontSize: "2em",
                marginBottom: "10px",
              }}
            >
              Nachverfolgung einfach gemacht
            </span>
            <span style={{ display: "block" }}>
              Nimmt Ihnen die lästige Zettelarbeit und
              sie behalten trotzdem die volle Kontrolle
              über die Daten ihrer Kunden
            </span>
          </p>
          <div
            style={{
              marginTop: "20px",
              display: "grid",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <Button color="primary" variant="outlined">
              Play Store
            </Button>
          </div>
        </div>
        <PhoneMockup style={{ bottom: "80px" }}>
          <div
            style={{
              height: "100%",
              display: "grid",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#000",
              }}
            />
          </div>
        </PhoneMockup>
      </div>
    </div>
  );
};
export default Showcase;
