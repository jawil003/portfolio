import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../themes/theme";
import withRouter, { WithRouterProps } from "next/dist/client/with-router";
class CustomApp extends App<WithRouterProps> {
  componentDidMount() {
    // FIXME: Just test and see is there are any Bugs left
    /*let prefix = location.pathname.match(/^(\/[a-zA-Z]+)?(\/de)?/)[0];
    const suffix = location.pathname.replace(prefix, "").replace(/\/$/, "");
    console.debug(`Url Prefix is ${prefix} and Suffix is ${suffix}`);
    const urlIsGerman = prefix.indexOf("de") !== -1;
    prefix = prefix.replace("/de", "");
    console.debug(
      urlIsGerman
        ? "Url is German Language"
        : "Url is English or another Language"
    );
    if (
      /*process.env.NODE_ENV === "production" &&
      navigator.language.slice(0, 2) === "de" &&
      !urlIsGerman
    ) {
      console.info(`Browser language is German`);
      console.debug(`Redirected to ${prefix}/de${suffix}`);
      this.props.router.push(`${prefix}/de${suffix}`);
    } else if (urlIsGerman && navigator.language.slice(0, 2) !== "de") {
      console.info(`Browser language is English or another Language`);
      if (prefix === "" && suffix === "") this.props.router.push("/");
      else this.props.router.push(prefix + suffix);
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
        <Head>
          <title>Portfolio</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default withRouter(CustomApp);
