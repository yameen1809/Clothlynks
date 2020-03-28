import React, { Component } from "react";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from "./error-boundary.styles";
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false
    };
  }
  static getDerivedStateFromError() {
    //process the error
    return {
      hasErrored: true
    };
  }
  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/lKJiT77.png" />
          <ErrorImageText>ERROR 404! A Dog Ate This Page!</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
