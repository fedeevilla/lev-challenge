import React, { Component } from "react";
import "./styles.scss";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  render() {
    const { children } = this.props;
    if (this.state.error) {
      return (
        <div className="error-boundary-container">
          <h1>Ups, something went wrong!</h1>
          <h3>Please reload the page.</h3>
        </div>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
