// @flow
import React, { PureComponent } from 'react';
import GoogleMapReact from 'google-map-react';
import { LocalPizza } from '@material-ui/icons';

import Container from './GoogleMapComponent.style';

type Props = {};

const CustomMarker = () => (
  <div>
    <LocalPizza />
  </div>
);

class GoogleMapComponent extends PureComponent<Props> {
  render() {
    const mapConfig = {
      center: [48.866667, 2.333333],
      zoom: 12,
    };
    return (
      <Container>
        <GoogleMapReact
          defaultCenter={mapConfig.center}
          defaultZoom={mapConfig.zoom}
          bootstrapURLKeys={{
            key: 'AIzaSyBn_IapwfD1dVWHE2Obaiv4wTGdTn9j-uc',
            language: 'fr',
          }}
        >
          <CustomMarker text="best Work" lat={48.88269010222478} lng={2.322352724022835} />
          <CustomMarker lat={48.85307261102394} lng={2.370698876548431} />
        </GoogleMapReact>
      </Container>
    );
  }
}

export default GoogleMapComponent;
