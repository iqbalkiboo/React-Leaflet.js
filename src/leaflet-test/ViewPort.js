import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";

const DEFAULT_VIEWPORT = {
  center: [-6.861768, 107.592712],
  zoom: 13
};

export default class ViewportExample extends Component {
  state = {
    viewport: DEFAULT_VIEWPORT
  };

  onClickReset = () => {
    this.setState({ viewport: DEFAULT_VIEWPORT });
  };

  onViewportChanged = viewport => {
    this.setState({ viewport });
  };

  render() {
    return (
      <Map
        onClick={this.onClickReset}
        onViewportChanged={this.onViewportChanged}
        viewport={this.state.viewport}
      >
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    );
  }
}
