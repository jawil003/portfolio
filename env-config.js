const prod = process.env.NODE_ENV === "production";
const isLocal = process.env.IS_LOCAL === "true";

module.exports = {
  "process.env.BACKEND_URL": prod && !isLocal ? "/Portfolio" : "",
};
