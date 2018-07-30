import React, { Component } from "react";
import "./App.css";
import {
  Circle,
  CircleMarker,
  // FeatureGroup,
  LayerGroup,
  Map,
  TileLayer,
  // Popup,
  Tooltip
} from "react-leaflet";
//import Datalist from "./leaflet-test/DataListLeaflet/Datalist";
// import Data from "./leaflet-test/DataListLeaflet/DataLeaflet.json";
// import ReactTooltip from "react-tooltip"
// import MultipleMarker from "./leaflet-test/MultipleMarker";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: -7.090911,
      lng: 107.668887,
      zoom: 9
      // clicked: 0,
    };
  }

  onClickCircle = () => {
    this.setState({ clicked: this.state.clicked + 1 });
  };

  // constructor(props) {
  //   super(props);

  //   //   this.state = {
  //   //     Data: []
  //   //   };
  //   // }

  //   // componentDidMount() {
  //   //   fetch(Data)
  //   //     .then(Response => Response.json())
  //   //     .then(data => this.setState({ data }));
  //   // }
  //   // Data = () => {
  //   //   this.Data({ clicked: this.state.DataLeaflet });
  // }

  //const center = [-0.789275, 113.921327]
  render() {
    const clickedText =
      this.state.clicked === 0
        ? "Click this Circle to change the tooltip text"
        : `Circle text : $ {this.state.clicked}`;

    const position = [this.state.lat, this.state.lng];
    // const Data = [this.state.DataLeaflet];
    return (
      // <Mymap kota={kota} latlng={latlng} value={value}>
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayerGroup>
          <Circle
            center={position}
            fillColor="blue"
            color="blue"
            onClick={this.onClickCircle}
            radius={200}
          >
            <Tooltip>{clickedText}</Tooltip>
          </Circle>
          <LayerGroup>
            <CircleMarker
              center={[-6.914744, 107.60981]}
              fillColor="red"
              color="red"
              onClick={this.onClickCircle}
              radius={this.props.value1bdg}
            >
              <Tooltip>
                {" "}
                {this.props.Kota1}, value: {this.props.value1bdg}{" "}
              </Tooltip>
            </CircleMarker>

            <CircleMarker
              center={[-6.17511, 106.865039]}
              fillColor="red"
              color="red"
              onClick={this.onClickCircle}
              radius={this.props.value2jkt}
            >
              <Tooltip>
                {" "}
                {this.props.Kota2}, value: {this.props.value2jkt}{" "}
              </Tooltip>
            </CircleMarker>

            <CircleMarker
              center={[-7.319563, 108.202972]}
              fillColor="red"
              color="red"
              onClick={this.onClickCircle}
              radius={this.props.value3Tsm}
            >
              <Tooltip>
                {" "}
                {this.props.Kota3}, value: {this.props.value3Tsm}{" "}
              </Tooltip>
            </CircleMarker>

            <CircleMarker
              center={[-6.110366, 106.163975]}
              fillColor="red"
              color="red"
              onClick={this.onClickCircle}
              radius={this.props.value4srng}
            >
              <Tooltip>
                {this.props.Kota4}, value: {this.props.value4srng}
              </Tooltip>
            </CircleMarker>
          </LayerGroup>
        </LayerGroup>
        {/* <FeatureGroup>
          <Popup>popup in FeatureGroup</Popup>
          <CircleMarker
            center={[-6.17511, 106.865039]}
            color="red"
            radius={60}
          />
          <Tooltip>Tooltip for CircleMarker</Tooltip>
          <CircleMarker
            center={[-6.597147, 106.806039]}
            color="red"
            radius={30}
          />
          <Tooltip>Tooltip for CircleMarker</Tooltip>
          <CircleMarker
            center={[-6.347289, 106.287521]}
            color="red"
            radius={15}
          />
          <Tooltip>Tooltip for CircleMarker</Tooltip>
        </FeatureGroup> */}
        {/* <ZoomControl position="topright" /> */}
      </Map>
      //</Mymap>
    );
  }
}

App.defaultProps = {
  Kota1: "Bandung",
  value1bdg: "100",
  Kota2: "Jakarta",
  value2jkt: "110",
  Kota3: "Tasikmalaya",
  value3Tsm: "15",
  Kota4: "Serang",
  value4srng: "15"
};
