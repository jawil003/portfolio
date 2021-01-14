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
const BookIcon = dynamic(
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
);
const DribbbleIcon = dynamic(
  () =>
    import(
      "../components/icons/dribble.icon"
    ),
);
const DropIcon = dynamic(
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
);
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

const LinkRoundedIcon = dynamic(
  () =>
    import(
      "@material-ui/icons/LinkRounded"
    ),
);

const useIcons = () => {
  return (data: {
    name: string;
    height?: string;
    width?: string;
    color?: string;
  }) => {
    const {
      name,
      width,
      height,
      color,
    } = data;
    switch (name) {
      case "ElectronIcon": {
        return (
          <ElectronIcon
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "AdobeXdIcon": {
        return (
          <AdobeXdIcon
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "TypescriptIcon": {
        return (
          <TypescriptIcon
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "ReactIcon": {
        return (
          <ReactIcon
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "NodeIcon": {
        return (
          <NodeIcon
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "JavaIcon": {
        return (
          <JavaIcon
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "AndroidIcon": {
        return (
          <AndroidIcon
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "SettingsPageDesign": {
        return (
          <SettingsPageDesign
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "PrototypeDesign": {
        return (
          <PrototypeDesign
            height={height}
            width={width}
            color={color}
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
            color={color}
          />
        );
      }
      case "FlaskDesign": {
        return (
          <FlaskDesign
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "AtHomeDesign": {
        return (
          <AtHomeDesign
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "BlobDesktopDesign": {
        return (
          <BlobDesktopDesign
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "ContactMeDesign": {
        return (
          <ContactMeDesign
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "DesigningDesign": {
        return (
          <DesigningDesign
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "KnowledgeDesign": {
        return (
          <KnowledgeDesign
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "ReactDesign": {
        return (
          <ReactDesign
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "SienceDesign": {
        return (
          <SienceDesign
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "BookIcon": {
        return (
          <BookIcon
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "DatabaseIcon": {
        return (
          <DatabaseIcon
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "DesktopIcon": {
        return (
          <DesktopIcon
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "DeveloperIcon": {
        return (
          <DeveloperIcon
            height={height}
            color={color}
            width={width}
          />
        );
      }
      case "DisplayAndWebpageIcon": {
        return (
          <DisplayAndWebpageIcon
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "DribbbleIcon": {
        return (
          <DribbbleIcon
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "DropIcon": {
        return (
          <DropIcon
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "HamburgerMenuIcon": {
        return (
          <HamburgerMenuIcon
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "WorldWideIcon": {
        return <WorldWideIcon />;
      }
      case "GitHubIcon": {
        return <GitHubIcon />;
      }
      case "TwitterIcon": {
        return (
          <TwitterIcon
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "LinkedInIcon": {
        return (
          <LinkedInIcon
            height={height}
            width={width}
            color={color}
          />
        );
      }
      case "MailIcon": {
        return <MailIcon />;
      }
      case "LocalLibraryRoundedIcon": {
        return (
          <LocalLibraryRoundedIcon />
        );
      }
      case "LinkRoundedIcon": {
        return <LinkRoundedIcon />;
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
        return (
          <AddPhotoAlteredIcon
            height={height}
            width={width}
          />
        );
      }
    }
  };
};

export default useIcons;
