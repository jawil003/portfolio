export default class MetaService {
  public static generateGeneralTags(
      webApp?: boolean
  ) {
    return [
      <meta charSet="UTF-8" />,
      <meta
        http-equiv="X-UA-Compatible"
        content="IE=edge"
      />,
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />,
     webApp ? <meta name="apple-mobile-web-app-capable" content="yes"/> : undefined
    ];
  }
  public static generateIndividualTags(
    accentColor?: string,
    title?: string,
    description?: string, /* Max 160 Characters */
    keywords?: string[],
    author?:string,
    indexPage?: boolean,
    crawlHyperlinks?: boolean,
    cache?: boolean,
    expiresIn?: number

  ) {
    return [
      <meta
        name="theme-color"
        content={accentColor}
      />,
      <title>{title}</title>,
      <meta name="apple-mobile-web-app-title" content={title}/>,
      <meta
        name="description"
        content={description}
      />,
      <meta
        name="keywords"
        content={keywords?.join()}
      />,
      <meta
        name="author"
        content={author}
      />,
      <meta
        name="copyright"
        content={author}
      />,
      <meta
        name="robots"
        content={
          indexPage
            ? "index"
            : "noindex"
        }
      />,
      <meta
        name="robots"
        content={
          crawlHyperlinks
            ? "follow"
            : "nofollow"
        }
      />,
      cache ? undefined : (
        <meta
          http-equiv="cache-control"
          content="no-cache"
        />
      ),
      <meta
        http-equiv="expires"
        content={String(expiresIn)}
      />,
    ];
  }
  private static provideImages(iosImages: {
      default: string, 
      iPad: {"2x": string, "3x": string},
      iPadPro: {"2x": string, "3x": string}, 
      iPhone: {"1x": string, "2x": string, "3x": string}, 
      launch: string
  }){
      return [
        <link
          rel="apple-touch-icon"
          href={iosImages.default}
        />,
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href={iosImages.iPhone["1x"]}
        />,
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={iosImages.iPad["2x"]}
        />,
        <link
          rel="apple-touch-icon"
          sizes="83.5x83.5"
          href={iosImages.iPadPro["2x"]}
        />,
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={iosImages.iPhone["2x"]}
        />,
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={iosImages.iPad["3x"]}
        />,

        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href={iosImages.iPadPro["3x"]}
        />,
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={iosImages.iPhone["3x"]}
        />,
      ];
  }
}

export const generateTags = MetaService.generateTags;