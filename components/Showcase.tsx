import { Button } from "@material-ui/core";
import React from "react";
import theme from "themes/theme";
import NewContact from "./designs/NewContact";
import InfoIcon from "./icons/info.icon";
import ListIcon from "./icons/list.icon";
import LockIcon from "./icons/lock.icon";
import SdCardIcon from "./icons/sdcard.icon";
import TwoPeopleIcon from "./icons/twoPeople.icon";
import PhoneMockup from "./PhoneMoockup";
import ShowcaseAppitem from "./ShowcaseAppitem";
import Spacer from "./Spacer";
import styles from "./Showcase.module.css";

const Showcase: React.FC = () => {
  return (
    <div style={{ paddingBottom: "20px" }}>
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
              Sie behalten trotzdem die volle Kontrolle
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
        <PhoneMockup
          className={styles.Device}
          style={{ bottom: "80px" }}
        >
          <NewContact />
        </PhoneMockup>
      </div>
      <Spacer height="50px" />
      <div>
        <div
          style={{
            margin: "auto",
            width: "100px",
            height: "10px",
            backgroundColor:
              theme.palette.primary.main,
            borderRadius: "20px",
          }}
        />
        <Spacer height="25px" />
        <h3
          style={{
            textAlign: "center",
            fontSize: "2em",
            fontWeight: "bold",
          }}
        >
          Wie die App funktioniert
        </h3>
        <Spacer height="30px" />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            alignItems: "baseline",
          }}
        >
          <ShowcaseAppitem
            color="var(--red)"
            icon={<TwoPeopleIcon size="60%" />}
            title="Neue Kontakte verwalten"
            description="Ob manuell oder per QR Code, geben Sie einfach die Daten des Kunden ein und die App sichert sie dann"
          />
          <ShowcaseAppitem
            color="var(--orange)"
            icon={<LockIcon size="50%" />}
            title="Automatische Verschlüsselung sensibler Daten"
            description="Die Daten deiner Kunden bedürfen besonderen Schutz, deswegen verschlüsselt LocalTrack standardmäßig alle personenbezogenen Daten"
          />
          <ShowcaseAppitem
            color="var(--blue)"
            icon={<SdCardIcon size="50%" />}
            title="Einfacher Export der Kontaktdaten"
            description="Daten lassen sich in dem von vielen Programmen genutzten CSV exportieren und dann beliebig versendet werden, indem nur ein Zeitraum gewählt wird"
          />
          <ShowcaseAppitem
            color="var(--green)"
            icon={<ListIcon size="50%" />}
            title="Einfaches Eintragen von Anfangs- und Enddaten"
            description="Daten lassen sich in dem von vielen Programmen genutzten CSV exportieren und dann beliebig versendet werden, indem nur ein Zeitraum gewählt wird"
          />
          <ShowcaseAppitem
            color="var(--yellow)"
            icon={<InfoIcon size="50%" />}
            title="Kundenapp für Generierung der Daten als QR Code"
            description="Kunde kann selbe App nutzen um sich einen QR Code zu generieren den er dann im Laden seiner Wahl"
          />
        </div>
      </div>
    </div>
  );
};
export default Showcase;
