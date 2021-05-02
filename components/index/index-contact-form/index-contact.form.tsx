import { css } from "@emotion/react";
import { Form, Formik } from "formik";
import React from "react";
import { Button } from "../../shared/button";
import { FlexContainer } from "../../shared/flexcontainer";
import { Spacer } from "../../shared/spacer/spacer";
import { Textfield } from "../../shared/textfield";
import { Typography } from "../../shared/typography/typography";

export interface Props {}

/**
 * An IndexContactForm React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const IndexContactForm: React.FC<Props> = () => {
  return (
    <FlexContainer direction="column">
      <Typography
        variant="h4"
        component="h2"
      >
        Kontakt
      </Typography>
      <Spacer height="20px" />
      <Formik
        initialValues={{
          email: "",
          title: "",
          name: "",
          message: "",
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        {() => (
          <Form
            noValidate
            css={css`
              & {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
              }
              && > * {
                --indexContactFormRowGap: 0.425em;
                margin: var(
                    --indexContactFormRowGap
                  )
                  0;
              }
              && > * {
                width: 100%;
                max-width: 400px;
              }
            `}
          >
            <Textfield
              type="email"
              title="Email Adresse"
              name="email"
              placeholder="maxine@musterfrau.de"
            />
            <Textfield
              title="Name"
              name="name"
              placeholder="Maxine Musterfrau"
            />
            <Textfield
              title="Titel"
              name="title"
              placeholder="Bitte Titel eingeben"
            />
            <Textfield
              title="Nachricht"
              name="message"
              placeholder="Bitte Nachricht eingeben"
            />
            <Spacer height="var(--indexContactFormRowGap)" />

            <Button
              css={css`
                && {
                  width: 50%;
                }
              `}
            >
              Absenden
            </Button>
          </Form>
        )}
      </Formik>
    </FlexContainer>
  );
};
