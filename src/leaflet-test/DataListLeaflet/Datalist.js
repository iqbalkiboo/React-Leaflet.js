import React from "react";
import ReactDOM from "react-dom";

class Datalist extends React {
  render() {
    var mymapBdg = {
      kota: "Bandung",
      latlng: "-6.914744 , 107.609810",
      value: 100
    };
    var mymapJkt = {
      kota: "Jakarta",
      latlng: "-6.121435, 106.774124",
      value: 50
    };
    var mymapTsm = {
      kota: "Tasikmalaya",
      latlng: "-7.319563, 108.202972",
      value: 10
    };
  }
}

ReactDOM.render(<Datalist Mymaps />, document.getElementById("App"));
