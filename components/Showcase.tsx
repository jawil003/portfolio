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
import { useTranslation } from "next-translate";

const Showcase: React.FC = () => {
  const { t } = useTranslation();
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
              {t("localtrack:header")}
            </span>
            <span
              style={{
                display: "block",
                color: "darkgrey",
              }}
            >
              {t("localtrack:description")}
            </span>
          </p>
          <div
            style={{
              position: "relative",
              marginTop: "20px",
              display: "grid",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "grid",
                alignItems: "center",
                justifyItems: "center",
                rowGap: "5px",
              }}
            >
              <Button
                color="primary"
                variant="outlined"
                disabled
              >
                Play Store
              </Button>
              <div
                style={{
                  /*position: "absolute",*/
                  bottom: -10,
                  left: 20,
                  backgroundColor: "var(--red)",
                  padding: "5px 20px",
                  fontSize: "0.8em",
                  borderRadius: "10px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                {t("localtrack:lower-button")}
              </div>
            </div>
          </div>
        </div>
        <PhoneMockup
          className={styles.Device}
          style={{ bottom: "80px", width: "100%" }}
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
          {t("localtrack:app-header")}
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
            title={t("localtrack:newContact.title")}
            description={t(
              "localtrack:newContact.description"
            )}
          />
          <ShowcaseAppitem
            color="var(--orange)"
            icon={<LockIcon size="50%" />}
            title={t("localtrack:encryption.title")}
            description={t(
              "localtrack:encryption.description"
            )}
          />
          <ShowcaseAppitem
            color="var(--blue)"
            icon={<SdCardIcon size="50%" />}
            title={t("localtrack:export.title")}
            description={t(
              "localtrack:export.description"
            )}
          />
          <ShowcaseAppitem
            color="var(--green)"
            icon={<ListIcon size="50%" />}
            title={t("localtrack:date.title")}
            description={t(
              "localtrack:date.description"
            )}
          />
          <ShowcaseAppitem
            color="var(--yellow)"
            icon={<InfoIcon size="50%" />}
            title={t("localtrack:customer.title")}
            description={t(
              "localtrack:customer.description"
            )}
          />
        </div>
      </div>
    </div>
  );
};
export default Showcase;
