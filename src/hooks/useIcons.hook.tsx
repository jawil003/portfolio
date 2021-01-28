import dynamic from "next/dynamic";
import React from "react";

const AdobeXdIcon = dynamic(
  () =>
    import(
      "../components/icons/adobeXd.icon"
    ),
);
const ElectronIcon = dynamic(
  () =>
    import(
      "../components/icons/electron.icon"
    ),
);
const TypescriptIcon = dynamic(
  () =>
    import(
      "../components/icons/typescript.icon"
    ),
);
const ReactIcon = dynamic(
  () =>
    import(
      "../components/icons/react.icon"
    ),
);
const NodeIcon = dynamic(
  () =>
    import(
      "../components/icons/nodejs.icon"
    ),
);
const JavaIcon = dynamic(
  () =>
    import(
      "../components/icons/java.icon"
    ),
);
const AndroidIcon = dynamic(
  () =>
    import(
      "../components/icons/android.icon"
    ),
);
const SettingsPageDesign = dynamic(
  () =>
    import(
      "../components/designs/settingsPage.design"
    ),
);
const PrototypeDesign = dynamic(
  () =>
    import(
      "../components/designs/prototype.design"
    ),
);
const AffinityDesignerIcon = dynamic(
  () =>
    import(
      "../components/icons/affinityDesigner.icon"
    ),
);
const AffinityPhotoIcon = dynamic(
  () =>
    import(
      "../components/icons/affinityPhoto.icon"
    ),
);

const FlaskDesign = dynamic(
  () =>
    import(
      "../components/designs/flask.design"
    ),
);

const AtHomeDesign = dynamic(
  () =>
    import(
      "../components/designs/atHome.design"
    ),
);
const BlobDesktopDesign = dynamic(
  () =>
    import(
      "../components/designs/blobDesktop.design"
    ),
);
const ContactMeDesign = dynamic(
  () =>
    import(
      "../components/designs/contactMe.design"
    ),
);
const DesigningDesign = dynamic(
  () =>
    import(
      "../components/designs/designing.design"
    ),
);
const KnowledgeDesign = dynamic(
  () =>
    import(
      "../components/designs/knowledge.design"
    ),
);
const ReactDesign = dynamic(
  () =>
    import(
      "../components/designs/react.design"
    ),
);
const SienceDesign = dynamic(
  () =>
    import(
      "../components/designs/science.design"
    ),
);
/*const BookIcon = dynamic(
  () =>
    import(
      "../components/icons/book.icon"
    ),
);
const DatabaseIcon = dynamic(
  () =>
    import(
      "../components/icons/database.icon"
    ),
);
const DesktopIcon = dynamic(
  () =>
    import(
      "../components/icons/desktop.icon"
    ),
);
const DeveloperIcon = dynamic(
  () =>
    import(
      "../components/icons/developer.icon"
    ),
);
const DisplayAndWebpageIcon = dynamic(
  () =>
    import(
      "../components/icons/displayAndWebpage.icon"
    ),
);*/
const DribbbleIcon = dynamic(
  () =>
    import(
      "../components/icons/dribble.icon"
    ),
);
/*const DropIcon = dynamic(
  () =>
    import(
      "../components/icons/drop.icon"
    ),
);
const HamburgerMenuIcon = dynamic(
  () =>
    import(
      "../components/icons/hamburgerMenu.icon"
    ),
);*/
const TwitterIcon = dynamic(
  () =>
    import(
      "../components/icons/twitter.icon"
    ),
);
const LinkedInIcon = dynamic(
  () =>
    import(
      "../components/icons/linkedin.icon"
    ),
);
const GitHubIcon = dynamic(
  () =>
    import(
      "../components/icons/github.icon"
    ),
);
const MailIcon = dynamic(
  () =>
    import(
      "@material-ui/icons/MailRounded"
    ),
);
const WorldWideIcon = dynamic(
  () =>
    import(
      "@material-ui/icons/PublicRounded"
    ),
);
const LocalLibraryRoundedIcon = dynamic(
  () =>
    import(
      "@material-ui/icons/LocalLibraryRounded"
    ),
);
const EmailRoundedIcon = dynamic(
  () =>
    import(
      "@material-ui/icons/EmailRounded"
    ),
);
const EmojiObjectsRoundedIcon = dynamic(
  () =>
    import(
      "@material-ui/icons/EmojiObjectsRounded"
    ),
);
const HomeRoundedIcon = dynamic(
  () =>
    import(
      "@material-ui/icons/HomeRounded"
    ),
);

const AddPhotoAlteredIcon = dynamic(
  () =>
    import(
      "@material-ui/icons/AddPhotoAlternateRounded"
    ),
);

const DescriptionRoundedIcon = dynamic(
  () =>
    import(
      "@material-ui/icons/DescriptionRounded"
    ),
);

const InfoRoundedIcon = dynamic(
  () =>
    import(
      "@material-ui/icons/InfoRounded"
    ),
);

const FigmaIcon = dynamic(
  () =>
    import(
      "../components/icons/figma.icon"
    ),
);

const BubbleChartIcon = dynamic(
  () =>
    import(
      "@material-ui/icons/BubbleChart"
    ),
);

export const useKnowledgeIcons = () => {
  return (data: {
    name: string;
    width?: string;
    height?: string;
  }) => {
    const {
      name,
      width,
      height,
    } = data;
    switch (name) {
      case "AdobeXdIcon": {
        return (
          <AdobeXdIcon
            height={height}
            width={width}
          />
        );
      }
      case "FigmaIcon": {
        return (
          <FigmaIcon
            height={height}
            width={width}
          />
        );
      }
      case "TypescriptIcon": {
        return (
          <TypescriptIcon
            height={height}
            width={width}
          />
        );
      }
      case "ReactIcon": {
        return (
          <ReactIcon
            height={height}
            width={width}
          />
        );
      }
      case "NodeIcon": {
        return (
          <NodeIcon
            height={height}
            width={width}
          />
        );
      }
      case "JavaIcon": {
        return (
          <JavaIcon
            height={height}
            width={width}
          />
        );
      }
      case "AndroidIcon": {
        return (
          <AndroidIcon
            height={height}
            width={width}
          />
        );
      }
      case "ElectronIcon": {
        return (
          <ElectronIcon
            height={height}
            width={width}
          />
        );
      }
      case "SettingsPageDesign": {
        return (
          <SettingsPageDesign
            height={height}
            width={width}
          />
        );
      }
      case "PrototypeDesign": {
        return (
          <PrototypeDesign
            height={height}
            width={width}
          />
        );
      }
      case "AffinityDesignerIcon": {
        return (
          <AffinityDesignerIcon
            height={height}
            width={width}
          />
        );
      }
      case "AffinityPhotoIcon": {
        return (
          <AffinityPhotoIcon
            height={height}
            width={width}
          />
        );
      }
      default: {
        return (
          <FlaskDesign
            height={height}
            width={width}
          />
        );
      }
    }
  };
};

export const useNavigationIcons = () => {
  return (data: { name: string }) => {
    const { name } = data;
    switch (name) {
      case "WorldWideIcon": {
        return <WorldWideIcon />;
      }

      case "MailIcon": {
        return <MailIcon />;
      }
      case "LocalLibraryRoundedIcon": {
        return (
          <LocalLibraryRoundedIcon />
        );
      }
      case "BubbleChartIcon": {
        return <BubbleChartIcon />;
      }
      case "HomeRoundedIcon": {
        return <HomeRoundedIcon />;
      }
      case "DescriptionRoundedIcon": {
        return (
          <DescriptionRoundedIcon />
        );
      }
      case "EmojiObjectsRoundedIcon": {
        return (
          <EmojiObjectsRoundedIcon />
        );
      }
      case "EmailRoundedIcon": {
        return <EmailRoundedIcon />;
      }
      case "InfoRoundedIcon": {
        return <InfoRoundedIcon />;
      }
      default: {
        return <AddPhotoAlteredIcon />;
      }
    }
  };
};

export const useSocialLogos = () => {
  return (data: {
    name: string;
    width?: string;
    height?: string;
  }) => {
    const {
      name,
      width,
      height,
    } = data;
    switch (name) {
      case "GitHubIcon": {
        return (
          <GitHubIcon
            width={width}
            height={height}
          />
        );
      }
      case "LinkedInIcon": {
        return (
          <LinkedInIcon
            width={width}
            height={height}
          />
        );
      }
      case "TwitterIcon": {
        return (
          <TwitterIcon
            width={width}
            height={height}
          />
        );
      }
      case "DribbbleIcon": {
        return (
          <DribbbleIcon
            width={width}
            height={height}
          />
        );
      }
    }
  };
};

export const useHeaderDesign = () => {
  return (data: {
    name: string;
    width?: string;
    height?: string;
  }) => {
    const {
      name,
      width,
      height,
    } = data;
    switch (name) {
      case "FlaskDesign": {
        return (
          <FlaskDesign
            height={height}
            width={width}
          />
        );
      }
      case "AtHomeDesign": {
        return (
          <AtHomeDesign
            height={height}
            width={width}
          />
        );
      }
      case "BlobDesktopDesign": {
        return (
          <BlobDesktopDesign
            height={height}
            width={width}
          />
        );
      }
      case "ContactMeDesign": {
        return (
          <ContactMeDesign
            height={height}
            width={width}
          />
        );
      }
      case "DesigningDesign": {
        return (
          <DesigningDesign
            height={height}
            width={width}
          />
        );
      }
      case "KnowledgeDesign": {
        return (
          <KnowledgeDesign
            height={height}
            width={width}
          />
        );
      }
      case "ReactDesign": {
        return (
          <ReactDesign
            height={height}
            width={width}
          />
        );
      }
      case "SienceDesign": {
        return (
          <SienceDesign
            height={height}
            width={width}
          />
        );
      }
    }
  };
};
