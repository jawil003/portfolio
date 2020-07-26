import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../themes/theme";
import withRouter, { WithRouterProps } from "next/dist/client/with-router";
class CustomApp extends App<WithRouterProps> {
  componentDidMount() {
    // TODO: Enable Language Detection Feature when Fix available
    let url = location.pathname;
    console.debug(`Url is ${url}`);
    const indexOf = url.indexOf("de");
    console.debug(`Index of 'de' is ${indexOf}`);

    if (indexOf !== -1) {
      url = url.substring(indexOf + 2);
      console.debug(`Transformed Url is ${url}`);
    }
    if (
      /*process.env.NODE_ENV === "production" &&*/
      navigator.language.slice(0, 2) === "de"
    ) {
      console.info(`Browser language is German`);
      console.debug(`Redirected to /de${url}`);
      this.props.router.push(`/de${url}`);
    } else {
      console.info(`Browser language is English or another Language`);
      if (url === "") this.props.router.push(`/`);
      else {
        console.debug(`${url}`);
        this.props.router.push(`${url}`);
      }
    }
    //FIXME: Issue here not react in correct Situation
    /*if (/\/{1}#{1}[a-zA-Zäöüß]+/.test(location.pathname)) {
      const url = location.pathname.replace(/\/{1}#{1}[a-zA-Zäöüß]+/, "");
      this.props.router.push(`${url}`);
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
