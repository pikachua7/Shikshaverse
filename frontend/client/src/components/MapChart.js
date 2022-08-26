import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";

import india from '../topojsons/india.json';


const MapChart = ({ setTooltipContent, setStateName, setShowDistrict }) => {
    return (
      <>
        <ComposableMap  data-tip="" projection="geoMercator" width={100} height={100} projectionConfig={{ scale: 100 }}>
          
          <ZoomableGroup zoom={1} center={[80,12]}>
            <Geographies geography={india}>
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography  
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { ST_NM } = geo.properties;
                      setTooltipContent(`${ST_NM}`);
                    }}
                    onMouseLeave={() => {
                      setTooltipContent("");
                    }}
                    onClick = {() => {
                      const { ST_NM } = geo.properties;
                      setStateName(`${ST_NM}`);
                      setShowDistrict(true);
                    }}
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        outline: "none"
                      },
                      hover: {
                        fill: "#5e95ed",
                        outline: "none"
                      },
                      pressed: {
                        fill: "#232a59",
                        outline: "none"
                      }
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </>
    );
};

export default MapChart;