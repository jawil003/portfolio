import { Button } from "@material-ui/core";
import React from "react";
import theme from "themes/theme";
import NewContact from "./designs/NewContact";
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
            <span
              style={{
                display: "block",
                color: "darkgrey",
              }}
            >
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
          <NewContact />
        </PhoneMockup>
      </div>
      <div>
        <h3
          style={{
            textAlign: "center",
            fontSize: "2em",
            fontWeight: "bold",
          }}
        >
          How the App Works
        </h3>
        <div style={{ display: "flex" }}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Showcase;
