import App from "next/app";
import Head from "next/head";
import Router, { withRouter } from "next/router";
import NProgress from "nprogress";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../themes/theme";
import { WithRouterProps } from "next/dist/client/with-router";
class CustomApp extends App<WithRouterProps> {
  componentDidMount() {
    Router.events.on("routeChangeComplete", () => {
      NProgress.start();
    });

    Router.events.on("routeChangeComplete", () => NProgress.done());
    Router.events.on("routeChangeError", () => NProgress.done());

    if (navigator.language === "de") this.props.router.push("/de");
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error);
    super.componentDidCatch(error, errorInfo);
  }

  componentDidUpdate() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
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
