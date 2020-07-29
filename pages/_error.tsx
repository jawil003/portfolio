import React from "react";
import { FiveHundredError, FourZeroFour } from "../components/errors";

class Error extends React.PureComponent<{ statusCode: number }> {
  static async getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }
  render() {
    if (this.props.statusCode === 404) {
      return <FourZeroFour />;
    }
    return <FiveHundredError />;
  }
}

export default Error;
