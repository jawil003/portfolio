import App from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../themes/theme";
import withRouter, {
  WithRouterProps,
} from "next/dist/client/with-router";
class CustomApp extends App<WithRouterProps> {
  componentDidMount() {
    if (
      window &&
      process.env.NODE_ENV === "production" &&
      "serviceWorker" in navigator
    ) {
      window.addEventListener("load", function () {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then(() => {
            console.log(
              "service worker registration successful"
            );
          })
          .catch((err) => {
            console.warn(
              "service worker registration failed",
              err.message
            );
          });
      });
    }
    /*const path = location.pathname;
    const prefix = path.match(/(\/de)?/)[0];
    const suffix = path.replace(prefix, "");

    console.debug(
      `Url Path is '${path}', Url Prefix is '${prefix}' and Suffix is '${suffix}'`
    );
    const urlIsGerman = prefix === "/de";
    console.debug(
      urlIsGerman
        ? "Url is German Language"
        : "Url is English or another Language"
    );
    if (
      navigator.language.slice(0, 2) === "de" &&
      !urlIsGerman
    ) {
      console.info(`Browser language is German`);
      console.debug(
        `Redirected to ${prefix}/de${suffix}`
      );
      this.props.router.push(`/de${suffix}`);
    } else if (
      urlIsGerman &&
      navigator.language.slice(0, 2) !== "de"
    ) {
      console.info(
        `Browser language is English or another Language`
      );
      this.props.router.push(suffix);
    }*/
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error);
    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default withRouter(CustomApp);
