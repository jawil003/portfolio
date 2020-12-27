import Head from "next/head";
import React, { useState } from "react";
import ContactMeDesign from "../components/designs/contactMe.design";
import Button from "../components/elements/generic/Button";
import Spacer from "../components/elements/generic/Spacer";
import TextField from "../components/elements/generic/TextField";
import useTheme from "../hooks/useTheme.hook";
import HeaderWithIcon from "../components/layout/HeaderWithIcon";
import NavigationBar from "../components/layout/NavigationBar";
import Footer from "../components/layout/Footer";
import Form from "src/components/elements/generic/Form";

interface Props {}

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
const Contact: React.FC<Props> = () => {
  const {
    palette: {
      color: { secondary },
    },
  } = useTheme();
  const [{ name, emailAdress, title, message }] = useState<UserMessage>({
    name: "",
    emailAdress: "",
    title: "",
    message: "",
  });

  return (
    <>
      <Head>
        <title>Jannik Will | Kontakt</title>
      </Head>
      <NavigationBar />
      <HeaderWithIcon
        fill
        first
        latest
        icon={<ContactMeDesign color={secondary} width="100%" />}
      >
        <Form>
          <TextField
            value={name}
            title="Name"
            placeholder="Maxine Musterfrau"
          />
          <Spacer height="20px" />
          <TextField
            value={emailAdress}
            title="Email Adresse"
            placeholder="maxine@musterfrau.de"
          />
          <Spacer height="20px" />
          <TextField
            value={title}
            title="Betreff"
            placeholder="Musterbetreff"
          />
          <Spacer height="20px" />
          <TextField
            value={message}
            title="Nachricht"
            placeholder="Bitte Nachricht eingeben"
            area
            rows={4}
          />
          <Spacer height="25px" />
          <Button text="Absenden" />
        </Form>
      </HeaderWithIcon>
      <Footer />
    </>
  );
};

export default Contact;
