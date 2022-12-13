import React from "react";
import { graphql } from "gatsby";

import Page from "../templates/Page";
import GlobalStyle from "../atoms/GlobalStyle";
import GoogleMapReact from "google-map-react";

export default function Dives({ data }) {
  const {
    allDiveNode: { group },
  } = data;

  const locations = group.map(({ nodes }) => nodes[0].location);

  function renderMarkers(map, maps) {
    locations.forEach(loc => {
      new maps.Marker({
        position: { lng: Number(loc.lng), lat: Number(loc.lat) },
        map,
        title: loc.site,
      });
    });
  }

  return (
    <>
      <GlobalStyle />
      <Page title="dives" back="/">
        <div style={{ height: "75vh", width: "100%" }}>
          <GoogleMapReact
            yesIWantToUseGoogleMapApiInternals
            bootstrapURLKeys={{ key: process.env.GATSBY_GA_MAPS_KEY }}
            defaultCenter={{
              lat: 43.51,
              lng: 8.9,
            }}
            defaultZoom={7}
            onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
          ></GoogleMapReact>
        </div>
      </Page>
    </>
  );
}

export const pageQuery = graphql`
  query {
    allDiveNode(filter: { location: { lat: { ne: "" } } }) {
      group(field: { location: { site: SELECT } }) {
        nodes {
          location {
            lat
            lng
            place
            country
            site
          }
        }
      }
    }
  }
`;
