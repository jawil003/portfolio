/* eslint-disable react/jsx-key */
import { title as appTitle } from "../../package.json";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

class MetaService {
  public static generateGeneralTags(
    webApp?: boolean,
  ) {
    return [
      <meta charSet="UTF-8" />,
      <meta
        httpEquiv="X-UA-Compatible"
        content="IE=edge"
      />,
      webApp ? (
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />
      ) : undefined,
      <link
        href="./manifest.json"
        rel="manifest"
      />,
      <meta
        name="google-site-verification"
        content="MUDZxZGALZQh7TZBbItP-Hd-lJCot4Uuakc2eivcKPs"
      />,
    ];
  }
  public static generateIndividualTags(
    data: {
      accentColor?: string;
      title?: string;
      description?: string;
      keywords?: string[];
      author?: string;
      language?: string;
      robots?: {
        indexPage?: boolean;
        indexImage?: boolean;
        crawlLinks?: boolean;
        archivePage?: boolean;
        snipPage?: boolean;
        translate?: boolean;
        caya?: boolean;
      };
      revisedTime?: string;
      cache?: boolean;
      expiresIn?: number;
    } = {},
  ) {
    const {
      accentColor: defaultAccentColor,
      title: defaultTitle,
      description: defaultDescription,
      keywords: defaultKeywords,
      author: defaultAuthor,
      robots: defaultRobots,
      cache: defaultCache,
      expiresIn: defaultExpiresIn,
      language: defaultLanguage,
      revisedTime: defaultRevisedTime,
    } = {
      accentColor: "#fffff",
      title: appTitle,
      description:
        "Dies ist meine Portfolio Seite. Hier erfährst du wie ich dir bei deinem nächsten Projekt helfen kann." /* Max 160 Characters */,
      keywords: [
        "portfolio",
        "web design",
        "web development",
        "programming",
        "java",
        "css",
        "html",
        "javascript",
        "typescript",
        "electron",
        "adobe xd",
        "figma",
        "affinity designer",
        "affinity photo",
      ],
      author: "Jannik Will",
      language: "de",
      robots: {
        indexPage: true,
        crawlHyperlinks: true,
        archivePage: true,
        snipPage: true,
        translate: true,
        caya: true,
      },
      cache: true,
      expiresIn: undefined,
      revisedTime: dayjs().format(),
    };
    const {
      accentColor = defaultAccentColor,
      title = defaultTitle,
      description = defaultDescription,
      keywords = defaultKeywords,
      author = defaultAuthor,
      robots = defaultRobots,
      cache = defaultCache,
      expiresIn = defaultExpiresIn,
      language = defaultLanguage,
      revisedTime = defaultRevisedTime,
    } = data;

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
      title ? (
        <meta
          name="subject"
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
      language ? (
        <meta
          name="language"
          content={language}
        />
      ) : undefined,
      robots ? (
        <meta
          name="robots"
          content={Object.values({
            ...defaultRobots,
            ...robots,
          }).join()}
        />
      ) : undefined,
      cache ? undefined : (
        <meta
          httpEquiv="cache-control"
          content="no-cache"
        />
      ),
      revisedTime ? (
        <meta
          name="revised"
          content={revisedTime}
        />
      ) : undefined,
      expiresIn ? (
        <meta
          httpEquiv="expires"
          content={String(expiresIn)}
        />
      ) : undefined,
    ];
  }
  public static provideImages(
    basePath: string,
    iconName: string,
  ) {
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
