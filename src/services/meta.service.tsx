class MetaService {
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
     webApp ? <meta name="apple-mobile-web-app-capable" content="yes"/> : undefined,
     <link href="./manifest.json" rel="manifest"/>
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
      title ? (
        <title>{title}</title>
      ) : undefined,
      title ? (
        <meta
          name="apple-mobile-web-app-title"
          content={title}
        />
      ) : undefined,
      description ? (
        <meta
          name="description"
          content={description}
        />
      ) : undefined,
      keywords ? (
        <meta
          name="keywords"
          content={keywords?.join()}
        />
      ) : undefined,
      author
        ? [
            <meta
              name="author"
              content={author}
            />,
            <meta
              name="copyright"
              content={author}
            />,
          ]
        : undefined,
      indexPage !== undefined ? (
        <meta
          name="robots"
          content={
            indexPage
              ? "index"
              : "noindex"
          }
        />
      ) : undefined,
      crawlHyperlinks !== undefined ? (
        <meta
          name="robots"
          content={
            crawlHyperlinks
              ? "follow"
              : "nofollow"
          }
        />
      ) : undefined,
      cache ? undefined : (
        <meta
          http-equiv="cache-control"
          content="no-cache"
        />
      ),
      expiresIn ? <meta
        http-equiv="expires"
        content={String(expiresIn)}
      />: undefined,
    ];
  }
  public static provideImages(basePath: string,
      iconName: string){
      iconName = basePath + iconName;
      return [
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href={`${basePath}/favicon.png`}
        />,
        <link
          rel="apple-touch-icon"
          href={`${iconName}-512x512.png`}
        />,
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href={`${iconName}-60x60.png`}
        />,
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`${iconName}-76x76.png`}
        />,
        <link
          rel="apple-touch-icon"
          sizes="83.5x83.5"
          href={`${iconName}-83.5x83.5.png`}
        />,
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={`${iconName}-120x120.png`}
        />,
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={`${iconName}-152x152.png`}
        />,

        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href={`${iconName}-167x167.png`}
        />,
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${iconName}-180x180.png`}
        />,
      ];
  }
}

export const generateGeneralTags =
  MetaService.generateGeneralTags;
export const generateIndividualTags =
    MetaService.generateIndividualTags;
export const provideImages =
  MetaService.provideImages;