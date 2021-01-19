import Head from "next/head";
import React, { useState } from "react";
import ContactMeDesign from "../components/designs/contactMe.design";
import Button from "../components/elements/generic/Button";
import Spacer from "../components/elements/generic/Spacer";
import TextField from "../components/elements/generic/TextField";
import NavigationBar from "../components/layout/DesktopNavigationBar";
import Form from "src/components/elements/generic/Form";
import HeaderWithSpacer from "src/components/layout/HeaderWithSpacer";
import BackgroundWrapper from "src/components/layout/BackgroundWrapper";
import useBreakpoint, {
  breakpoints,
} from "src/hooks/useBreakpoints.hook";
import { generateIndividualTags } from "src/services/meta.service";
import ContactRequestService from "src/services/backend/contactRequest.service";
import { title as appTitle } from "../../package.json";
import designSystem from "@style/designSystem";

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
  const { width } = useBreakpoint();
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
            style={{
              marginLeft:
                width >= breakpoints.lg
                  ? "50%"
                  : undefined,
              width:
                width >= breakpoints.lg
                  ? "50%"
                  : "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              opacity:
                width >= breakpoints.lg
                  ? 1
                  : 0.3,
            }}
          >
            <ContactMeDesign
              color={designSystem.brand(
                "secondary",
              )}
              width="100%"
            />
          </div>
        }
      >
        <HeaderWithSpacer first>
          <Form>
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
