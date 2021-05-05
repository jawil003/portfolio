import { css } from "@emotion/react";
import { Form, Formik } from "formik";
import {
  motion,
  useAnimation,
} from "framer-motion";
import React, {
  useEffect,
  useState,
} from "react";
import { useInView } from "react-intersection-observer";
import * as Yup from "yup";
import {
  EmailOutlined,
  Person,
  Title,
} from "@material-ui/icons";
import { Button } from "../../shared/button";
import { FlexContainer } from "../../shared/flexcontainer";
import { Spacer } from "../../shared/spacer/spacer";
import { Textarea } from "../../shared/textarea/textarea";
import { Textfield } from "../../shared/textfield";
import { Typography } from "../../shared/typography/typography";
import ContactRequestService from "../../../services/backend/contactRequest.service";
import { IndexContactFormSuccessDialog } from "./index-contact-form-success.dialog";
import { ololog } from "../../../config/logger";
import { DialogWrapper } from "../../shared/dialog-wrapper";

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
    name: Yup.string().required(
      "Bitte einen Vor und Nachnamen eingeben",
    ),
    message: Yup.string().required(
      "Bitte eine Nachricht eingeben",
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
  const [
    dialogProps,
    setDialogProps,
  ] = useState<{
    show: boolean;
    mode: "success" | "error";
  }>({ show: false, mode: "success" });
  return (
    <>
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
            hidden: "",
          }}
          isInitialValid={false}
          validationSchema={
            validationSchema
          }
          onSubmit={async (
            values,
            actions,
          ) => {
            try {
              if (values?.hidden)
                throw new Error();

              await ContactRequestService.do(
                values,
              );
              setDialogProps({
                show: true,
                mode: "success",
              });
              ololog.info(
                "Send email with",
                values,
              );
            } catch (err) {
              ololog.error(
                "Something went wrong",
                err,
              );
              setDialogProps({
                show: true,
                mode: "error",
              });
              throw err;
            } finally {
              window.setTimeout(() => {
                setDialogProps(
                  (props) => ({
                    ...props,
                    show: false,
                  }),
                );
              }, 1500);
            }

            actions.resetForm();
            ololog.debug(
              "Reset form to initial state",
            );
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
                data-testid="index-contact-form-email-input"
                required
                type="email"
                title="Email Adresse"
                name="email"
                placeholder="maxine@musterfrau.de"
                icon={{
                  align: "right",
                  value: (
                    <EmailOutlined />
                  ),
                }}
              />
              <Textfield
                data-testid="index-contact-form-name-input"
                required
                title="Name"
                name="name"
                placeholder="Maxine Musterfrau"
                icon={{
                  align: "right",
                  value: <Person />,
                }}
              />
              <Textfield
                data-testid="index-contact-form-title-input"
                required
                title="Titel"
                name="title"
                placeholder="Bitte Titel eingeben"
                icon={{
                  align: "right",
                  value: <Title />,
                }}
              />
              <Textarea
                data-testid="index-contact-form-message-textarea"
                required
                rows={6}
                title="Nachricht"
                name="message"
                placeholder="Bitte Nachricht eingeben"
              />
              <Textfield
                title="Hidden"
                name="hidden"
                css={css`
                  & {
                    display: none;
                  }
                `}
              />
              <Spacer height="var(--indexContactFormRowGap)" />

              <Button
                data-testid="index-contact-form-submit-button"
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

      <DialogWrapper
        show={dialogProps.show}
      >
        <div>
          <IndexContactFormSuccessDialog
            mode={dialogProps.mode}
          />
        </div>
      </DialogWrapper>
    </>
  );
};
