import Head from "next/head";
import React, { useState } from "react";
import ContactMeDesign from "../components/designs/contactMe.design";
import Button from "../components/elements/Button";
import Spacer from "../components/elements/Spacer";
import TextField from "../components/elements/TextField";
import NavigationBar from "../components/elements/DesktopNavigationBar";
import Form from "components/elements/Form";
import HeaderWithSpacer from "components/elements/HeaderWithSpacer";
import BackgroundWrapper from "components/elements/BackgroundWrapper";
import { generateIndividualTags } from "services/meta.service";
import ContactRequestService from "services/backend/contactRequest.service";
import { title as appTitle } from "../package.json";
import designSystem from "@style/designSystem";
import { css } from "@emotion/react";
import Typography from "components/elements/Typography";

interface UserMessage {
  name: string;
  message: string;
  emailAdress: string;
  title: string;
}

/**
 * An Contact React Component.
 * @author Jannik Will
 * @version 0.1
 */
const Contact: React.FC = () => {
  const [
    {
      name,
      emailAdress,
      title,
      message,
    },
    setFormState,
  ] = useState<UserMessage>({
    name: "",
    emailAdress: "",
    title: "",
    message: "",
  });

  return (
    <>
      <Head>
        {generateIndividualTags({
          title: `${appTitle} | Kontakt`,
          description:
            "Kontaktiere mich gerne für Hilfe bei deinem Entwicklungsprojekt.",
        })}
      </Head>
      <NavigationBar />
      <BackgroundWrapper
        background={
          <div
            css={css`
              & {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
              }
              @media (min-width: ${designSystem
                  .breakpoints
                  .tabletPortraitUp}) {
                & {
                  margin-left: 50%;
                  width: 50%;
                  opacity: 1;
                }
              }
              @media (max-width: ${designSystem
                  .breakpoints
                  .tabletPortraitUp}) {
                & {
                  width: 100%;
                  opacity: 0.3;
                }
              }
            `}
          >
            <ContactMeDesign
              color={
                designSystem.colors
                  .brand.secondary
              }
              width="100%"
            />
          </div>
        }
      >
        <HeaderWithSpacer first>
          <Form>
            <Typography variant="h3">
              Kontakt
            </Typography>
            <TextField
              value={name}
              title="Name"
              placeholder="Maxine Musterfrau"
              onChange={({
                target: { value },
              }) =>
                setFormState(
                  (prev) => ({
                    ...prev,
                    name: value,
                  }),
                )
              }
            />
            <Spacer height="20px" />
            <TextField
              value={emailAdress}
              title="Email Adresse"
              placeholder="maxine@musterfrau.de"
              onChange={({
                target: { value },
              }) =>
                setFormState(
                  (prev) => ({
                    ...prev,
                    emailAdress: value,
                  }),
                )
              }
            />
            <Spacer height="20px" />
            <TextField
              value={title}
              title="Betreff"
              placeholder="Musterbetreff"
              onChange={({
                target: { value },
              }) =>
                setFormState(
                  (prev) => ({
                    ...prev,
                    title: value,
                  }),
                )
              }
            />
            <Spacer height="20px" />
            <TextField
              value={message}
              onChange={({
                target: { value },
              }) =>
                setFormState(
                  (prev) => ({
                    ...prev,
                    message: value,
                  }),
                )
              }
              title="Nachricht"
              placeholder="Bitte Nachricht eingeben"
              area
              rows={4}
            />
            <Spacer height="25px" />
            <Button
              text="Absenden"
              onClick={async () => {
                await ContactRequestService.do(
                  {
                    name,
                    emailAdress,
                    title,
                    description: message,
                  },
                );
                setFormState({
                  name: "",
                  emailAdress: "",
                  message: "",
                  title: "",
                });
              }}
            />
          </Form>
        </HeaderWithSpacer>
      </BackgroundWrapper>
    </>
  );
};

export default Contact;
