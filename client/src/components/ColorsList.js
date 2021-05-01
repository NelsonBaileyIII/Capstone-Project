import React, { Component } from "react";
import { connect } from "react-redux";
import { analyzeImage } from "../actions";
import { sendColorInfo } from "../actions/colorInfoActions";
import { sendPositionInfo } from "../actions/colorInfoActions";
import { sendSelectedColor } from "../actions/colorInfoActions";
import { clearRecieved } from "../actions/colorInfoActions";
import { Dimmer, Loader, Grid, Icon } from "semantic-ui-react";

class ColorsList extends Component {
  componentDidMount() {
    // only make new api call if initally no colors
    if (this.props.colors.length <= 1) {
      this.props.clearRecieved();
      this.props.analyzeImage(this.props.url);
    }
  }

  // Make API call each time the URL changes
  componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url) {
      this.props.analyzeImage(this.props.url);
    }

    if (this.props.status === "recieved") {
      // send the first square color info once information sent
      // back from API
      let hexColor = this.props.colors[0].hexColor;
      let index = this.props.position;
      let alpha = 1;
      this.handleOnClickSquare(hexColor, index, alpha);
      this.props.clearRecieved();
    }
  }

  handleOnClickSquare(color, index, alpha) {
    this.props.sendSelectedColor(color);
    this.props.sendColorInfo(color, alpha);
    this.props.sendPositionInfo(index);
  }

  renderColor(color, alpha) {
    return {
      backgroundColor: color,
      opacity: alpha,
      cursor: "pointer"
    };
  }

  renderCarot(index) {
    if (index === this.props.position) {
      return {
        color: "black"
      };
    } else {
      return {
        color: "white"
      };
    }
  }

  colorsRender() {
    // if there is no error in request and colors data is returned
    if (this.props.colors.length >= 1) {
      const ColorsList = this.props.colors.map((color, index) => (
        <div
          // add index in case there are of same color
          key={color.hexColor + index}
          className="color-square-container"
        >
          <div
            className="color-square"
            style={this.renderColor(color.hexColor, color.alpha)}
            onClick={() =>
              this.handleOnClickSquare(color.hexColor, index, color.alpha)
            }
          />
          <div style={this.renderCarot(index)} className="carot-container">
            <Icon size="big" name="caret up" />
          </div>
        </div>
      ));
      return ColorsList;
    }
  }

  // Load a initial height before colors are recieved
  renderLoaderHeight() {
    if (this.props.colors.length === 0) {
      return { height: 60 };
    }
  }
  renderLoader() {
    if (this.props.loader === "show") {
      return (
        <div style={this.renderLoaderHeight()}>
          <Dimmer active inverted>
            <Loader size="large" inverted>
              Loading Colors
            </Loader>
          </Dimmer>
        </div>
      );
    }
  }

  render() {
    return (
      <Grid.Column width={16}>
        {this.colorsRender()}
        {this.renderLoader()}
      </Grid.Column>
    );
  }
}

const mapStateToProps = state => {
  return {
    colors: state.colors.colors,
    selectedColor: state.colorInfo.selectedColor,
    position: state.colorInfo.position,
    url: state.url.url,
    error: state.error,
    status: state.colors.status,
    token: state.auth.token,
    loader: state.colors.loader
  };
};

export default connect(
  mapStateToProps,
  {
    analyzeImage,
    sendColorInfo,
    sendPositionInfo,
    sendSelectedColor,
    clearRecieved
  }
)(ColorsList);
