export default interface UploadedFile {
  name: string;
  alternativeText?: string;
  width?: number;
  height?: number;
  hash: string;
  mime: string;
  url: string;
}
