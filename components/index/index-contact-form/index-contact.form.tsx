import { css } from "@emotion/react";
import { Form, Formik } from "formik";
import {
  motion,
  useAnimation,
} from "framer-motion";
import React, {
  useEffect,
} from "react";
import { useInView } from "react-intersection-observer";
import * as Yup from "yup";
import { Button } from "../../shared/button";
import { FlexContainer } from "../../shared/flexcontainer";
import { Spacer } from "../../shared/spacer/spacer";
import { Textfield } from "../../shared/textfield";
import { Typography } from "../../shared/typography/typography";

const AnimatedFlexContainer = motion(
  FlexContainer,
);

const validationSchema = Yup.object().shape(
  {
    email: Yup.string()
      .required(
        "Bitte eine Email Adresse eingeben",
      )
      .email(
        "Bitte eine gültige Email Adresse eingeben",
      ),
    title: Yup.string().required(
      "Bitte einen Titel eingeben",
    ),
    name: Yup.string()
      .required(
        "Bitte einen Vor und Nachnamen eingeben",
      )
      .matches(
        /^[a-z ,.'-]+$/,
        "Bitte gültigen Namen eingeben",
      ),
    message: Yup.string().required(
      "Bitte einen Vor und Nachnamen eingeben",
    ),
  },
);

export interface Props {}

/**
 * An IndexContactForm React Component.
 * @author Jannik Will
 * @version 0.1
 */
export const IndexContactForm: React.FC<Props> = () => {
  const {
    ref: observerRef,
    inView,
  } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView)
      animation.start(
        { opacity: 1 },
        { duration: 2 },
      );
    else
      animation.start({ opacity: 0 });
  }, [inView, animation]);
  return (
    <AnimatedFlexContainer
      initial={{ opacity: 0 }}
      animate={animation}
      transition={{ duration: 2 }}
      direction="column"
      ref={observerRef}
    >
      <Typography
        align="center"
        variant="h4"
        component="h2"
      >
        Kontaktiere mich gerne
      </Typography>
      <Spacer height="35px" />
      <Formik
        initialValues={{
          email: "",
          title: "",
          name: "",
          message: "",
        }}
        isInitialValid={false}
        validationSchema={
          validationSchema
        }
        onSubmit={(
          _values,
          actions,
        ) => {
          actions.resetForm();
        }}
      >
        {({ isValid }) => (
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
              required
              type="email"
              title="Email Adresse"
              name="email"
              placeholder="maxine@musterfrau.de"
            />
            <Textfield
              required
              title="Name"
              name="name"
              placeholder="Maxine Musterfrau"
            />
            <Textfield
              required
              title="Titel"
              name="title"
              placeholder="Bitte Titel eingeben"
            />
            <Textfield
              required
              title="Nachricht"
              name="message"
              placeholder="Bitte Nachricht eingeben"
            />
            <Spacer height="var(--indexContactFormRowGap)" />

            <Button
              disabled={!isValid}
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
    </AnimatedFlexContainer>
  );
};