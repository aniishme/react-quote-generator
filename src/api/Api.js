import React from "react";
import axios from "axios";
class Api extends React.Component {
  componentDidMount() {
    axios.get("https://type.fit/api/quotes").then((res) => {
      this.props.getApi(res.data);
    });
  }

  render() {
    return null;
  }
}

export default Api;
