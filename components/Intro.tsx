import React, { useState } from "react";
import {
  Typography,
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";
import Link from "next-translate/Link";
import Typist from "react-typist";
import UtilService from "../services/util.service";
import GermanFlag from "./icons/german_flag.icon";
import USAFlag from "./icons/usa_flag.icon";
import { useTranslation } from "next-translate";
const useStyles = makeStyles({
  gridContainer: {
    height: "100%",
    gap: "10px",
  },
  copyright: {
    position: "absolute",
    left: "16px",
    top: "16px",
    color: "rgba(255,255,255,0.3)",
  },
  button: {
    color: "white",
  },
  typist: {
    textAlign: "center",
    overflowWrap: "break-word",
    wordWrap: "break-word",
    padding: "0px 10px",
    width: "100vw",
  },
});
const Intro: React.FC = () => {
  const { t } = useTranslation();
  const description1 = t("intro:description1");
  const description2 = t("intro:description2");
  const description3 = t("intro:description3");
  const utilService: UtilService = new UtilService();
  const [state, setState] = useState({ typing: true });
  const done = () => {
    setTimeout(() => {
      setState((prev) => ({ typing: !prev.typing }));
    }, 2000);
  };
  const {
    copyright,
    gridContainer,
    typist,
  } = useStyles();

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <picture>
        <source
          sizes="(max-width: 1920px) 40vw, 1920px"
          srcSet="/pictures/background-dortmund/webp/background_dortmund-min_bccrvs_ar_16_9,c_fill,g_auto__c_scale,w_1920.webp 1920w"
          type="image/avif"
        />
        <source
          sizes="(max-width: 1920px) 100vw, 100vh"
          srcSet="/pictures/background-dortmund/webp/background_dortmund-min_bccrvs_ar_16_9,c_fill,g_auto__c_scale,w_200.webp 200w,
            /pictures/background-dortmund/webp/background_dortmund-min_bccrvs_ar_16_9,c_fill,g_auto__c_scale,w_424.webp 424w,
            /pictures/background-dortmund/webp/background_dortmund-min_bccrvs_ar_16_9,c_fill,g_auto__c_scale,w_586.webp 586w,
            /pictures/background-dortmund/webp/background_dortmund-min_bccrvs_ar_16_9,c_fill,g_auto__c_scale,w_722.webp 722w,
            /pictures/background-dortmund/webp/background_dortmund-min_bccrvs_ar_16_9,c_fill,g_auto__c_scale,w_836.webp 836w,
            /pictures/background-dortmund/webp/background_dortmund-min_bccrvs_ar_16_9,c_fill,g_auto__c_scale,w_952.webp 952w,
            /pictures/background-dortmund/webp/background_dortmund-min_bccrvs_ar_16_9,c_fill,g_auto__c_scale,w_1075.webp 1075w,
            /pictures/background-dortmund/webp/background_dortmund-min_bccrvs_ar_16_9,c_fill,g_auto__c_scale,w_1153.webp 1153w,
            /pictures/background-dortmund/webp/background_dortmund-min_bccrvs_ar_16_9,c_fill,g_auto__c_scale,w_1249.webp 1249w,
            /pictures/background-dortmund/webp/background_dortmund-min_bccrvs_ar_16_9,c_fill,g_auto__c_scale,w_1333.webp 1333w,
            /pictures/background-dortmund/webp/background_dortmund-min_bccrvs_ar_16_9,c_fill,g_auto__c_scale,w_1416.webp 1416w,
            /pictures/background-dortmund/webp/background_dortmund-min_bccrvs_ar_16_9,c_fill,g_auto__c_scale,w_1508.webp 1508w,
            /pictures/background-dortmund/webp/background_dortmund-min_bccrvs_ar_16_9,c_fill,g_auto__c_scale,w_1592.webp 1592w,
            /pictures/background-dortmund/webp/background_dortmund-min_bccrvs_ar_16_9,c_fill,g_auto__c_scale,w_1676.webp 1676w,
            /pictures/background-dortmund/webp/background_dortmund-min_bccrvs_ar_16_9,c_fill,g_auto__c_scale,w_1791.webp 1791w,
            /pictures/background-dortmund/webp/background_dortmund-min_bccrvs_ar_16_9,c_fill,g_auto__c_scale,w_1870.webp 1870w,
            /pictures/background-dortmund/webp/background_dortmund-min_bccrvs_ar_16_9,c_fill,g_auto__c_scale,w_1913.webp 1913w,
            /pictures/background-dortmund/webp/background_dortmund-min_bccrvs_ar_16_9,c_fill,g_auto__c_scale,w_1920.webp 1920w"
          type="image/webp"
        />
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          sizes="(max-width: 1920px) 100vw, 100vh"
          srcSet="
            /pictures/background-dortmund/jpg/background_dortmund-min_ux38tg_ar_16_9,c_fill,g_auto__c_scale,w_200.jpg 200w,
            /pictures/background-dortmund/jpg/background_dortmund-min_ux38tg_ar_16_9,c_fill,g_auto__c_scale,w_410.jpg 410w,
            /pictures/background-dortmund/jpg/background_dortmund-min_ux38tg_ar_16_9,c_fill,g_auto__c_scale,w_558.jpg 558w,
            /pictures/background-dortmund/jpg/background_dortmund-min_ux38tg_ar_16_9,c_fill,g_auto__c_scale,w_682.jpg 682w,
            /pictures/background-dortmund/jpg/background_dortmund-min_ux38tg_ar_16_9,c_fill,g_auto__c_scale,w_796.jpg 796w,
            /pictures/background-dortmund/jpg/background_dortmund-min_ux38tg_ar_16_9,c_fill,g_auto__c_scale,w_893.jpg 893w,
            /pictures/background-dortmund/jpg/background_dortmund-min_ux38tg_ar_16_9,c_fill,g_auto__c_scale,w_985.jpg 985w,
            /pictures/background-dortmund/jpg/background_dortmund-min_ux38tg_ar_16_9,c_fill,g_auto__c_scale,w_1067.jpg 1067w,
            /pictures/background-dortmund/jpg/background_dortmund-min_ux38tg_ar_16_9,c_fill,g_auto__c_scale,w_1147.jpg 1147w,
            /pictures/background-dortmund/jpg/background_dortmund-min_ux38tg_ar_16_9,c_fill,g_auto__c_scale,w_1226.jpg 1226w,
            /pictures/background-dortmund/jpg/background_dortmund-min_ux38tg_ar_16_9,c_fill,g_auto__c_scale,w_1302.jpg 1302w,
            /pictures/background-dortmund/jpg/background_dortmund-min_ux38tg_ar_16_9,c_fill,g_auto__c_scale,w_1374.jpg 1374w,
            /pictures/background-dortmund/jpg/background_dortmund-min_ux38tg_ar_16_9,c_fill,g_auto__c_scale,w_1447.jpg 1447w,
            /pictures/background-dortmund/jpg/background_dortmund-min_ux38tg_ar_16_9,c_fill,g_auto__c_scale,w_1516.jpg 1516w,
            /pictures/background-dortmund/jpg/background_dortmund-min_ux38tg_ar_16_9,c_fill,g_auto__c_scale,w_1582.jpg 1582w,
            /pictures/background-dortmund/jpg/background_dortmund-min_ux38tg_ar_16_9,c_fill,g_auto__c_scale,w_1652.jpg 1652w,
            /pictures/background-dortmund/jpg/background_dortmund-min_ux38tg_ar_16_9,c_fill,g_auto__c_scale,w_1724.jpg 1724w,
            /pictures/background-dortmund/jpg/background_dortmund-min_ux38tg_ar_16_9,c_fill,g_auto__c_scale,w_1790.jpg 1790w,
            /pictures/background-dortmund/jpg/background_dortmund-min_ux38tg_ar_16_9,c_fill,g_auto__c_scale,w_1855.jpg 1855w,
            /pictures/background-dortmund/jpg/background_dortmund-min_ux38tg_ar_16_9,c_fill,g_auto__c_scale,w_1920.jpg 1920w"
          src="/pictures/background-dortmund/jpg/background_dortmund-min_ux38tg_ar_16_9,c_fill,g_auto__c_scale,w_1920.jpg"
          alt="Dortmunder Union"
        ></img>
      </picture>
      <div
        style={{
          position: "absolute",
          top: "0px",
          height: "100%",
          background: "rgba(0,0,0,0.3)",
        }}
      >
        <Grid
          key={0}
          container
          direction="column"
          alignContent="center"
          alignItems="center"
          justify="center"
          classes={{
            root: gridContainer,
          }}
        >
          <Grid key={1} item>
            <Typography
              key={5 + Number(state.typing)}
              variant="h3"
              component="h3"
            >
              <Typist
                key={4}
                className={typist}
                onTypingDone={done}
                cursor={{}}
              >
                <span
                  style={{
                    color: "white",
                    textShadow: "3px 3px 4px #777",
                  }}
                >
                  {description1}
                </span>
                <Typist.Backspace
                  key={2}
                  count={utilService.getDifferenceFromEnd(
                    description1,
                    description2
                  )}
                  delay={2000}
                />
                <span
                  style={{
                    color: "white",
                    textShadow: "3px 3px 4px #777",
                  }}
                >
                  {utilService.removeDuplicate(
                    description2,
                    description1
                  )}
                </span>
                <Typist.Backspace
                  key={3}
                  count={utilService.getDifferenceFromEnd(
                    description2,
                    description3
                  )}
                  delay={2000}
                />
                <span
                  style={{
                    color: "white",
                    textShadow: "3px 3px 4px #777",
                  }}
                >
                  {utilService.removeDuplicate(
                    description3,
                    description2
                  )}
                </span>
              </Typist>
            </Typography>
          </Grid>
          <Grid key={7} item>
            <Button
              key={6}
              onClick={(ent) => {
                ent.preventDefault();
                document
                  .querySelector("#navigation")
                  .scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              variant="contained"
              color="primary"
            >
              {t("intro:buttontext")}
            </Button>
          </Grid>
        </Grid>

        <a
          href="https://pixabay.com/de/photos/dortmund-dortmunder-u-u-turm-602962/"
          rel="noreferrer"
          target="_blank"
          className={`${copyright}`}
        >
          {t("intro:copyright", {
            person: "sxxs",
          })}
        </a>
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            padding: "16px",
            color: "white",
            display: "flex",
            gap: "20px",
          }}
        >
          {process.env.NODE_ENV !== "production"
            ? [
                <Link key="/de" href="/" lang="de">
                  <a>
                    <GermanFlag fontSize="large" />
                  </a>
                </Link>,
                <Link key="/" href="/" noLang>
                  <a>
                    <USAFlag fontSize="large" />
                  </a>
                </Link>,
              ]
            : undefined}
        </div>
      </div>
    </div>
  );
};

export default Intro;
