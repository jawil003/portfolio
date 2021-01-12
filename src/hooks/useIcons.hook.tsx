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
      "../components/icons/mail.icon"
    ),
);
const WorldWideIcon = dynamic(
  () =>
    import(
      "../components/icons/worldwide.icon"
    ),
);

const useIcons = () => {
  return (
    name: string,
    height?: string,
    width?: string,
  ) => {
    switch (name) {
      case "ElectronIcon": {
        return (
          <ElectronIcon
            height={height}
            width={width}
          />
        );
      }
      case "AdobeXdIcon": {
        return (
          <AdobeXdIcon
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
          <NodeIcon height="100%" />
        );
      }
      case "JavaIcon": {
        return (
          <JavaIcon height="100%" />
        );
      }
      case "AndroidIcon": {
        return (
          <AndroidIcon height="100%" />
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
      case "BookIcon": {
        return (
          <BookIcon
            height={height}
            width={width}
          />
        );
      }
      case "DatabaseIcon": {
        return (
          <DatabaseIcon
            height={height}
            width={width}
          />
        );
      }
      case "DesktopIcon": {
        return (
          <DesktopIcon
            height={height}
            width={width}
          />
        );
      }
      case "DeveloperIcon": {
        return (
          <DeveloperIcon
            height={height}
            width={width}
          />
        );
      }
      case "DisplayAndWebpageIcon": {
        return (
          <DisplayAndWebpageIcon
            height={height}
            width={width}
          />
        );
      }
      case "DribbbleIcon": {
        return (
          <DribbbleIcon
            height={height}
            width={width}
          />
        );
      }
      case "DropIcon": {
        return (
          <DropIcon
            height={height}
            width={width}
          />
        );
      }
      case "HamburgerMenuIcon": {
        return (
          <HamburgerMenuIcon
            height={height}
            width={width}
          />
        );
      }
      case "WorldWideIcon": {
        return (
          <WorldWideIcon
            height={height}
            width={width}
          />
        );
      }
      case "GitHubIcon": {
        return (
          <GitHubIcon
            height={height}
            width={width}
          />
        );
      }
      case "TwitterIcon": {
        return (
          <TwitterIcon
            height={height}
            width={width}
          />
        );
      }
      case "LinkedInIcon": {
        return (
          <LinkedInIcon
            height={height}
            width={width}
          />
        );
      }
      case "MailIcon": {
        return (
          <MailIcon
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

export default useIcons;
