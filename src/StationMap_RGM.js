import * as React from 'react';
import { Map, useMap } from 'rgm';
import { useGoogleApiLoader } from './dev-src/hooks';
import { Ratio } from './dev-src/controls';
// https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
const MAP_OPTIONS = {
  zoom: 9,
  center: {
    lat: 59.936,
    lng: 30.314,
  },
};

export const GoogleMarker = ({ lat, lng }) => {
  const { api, map } = useMap();
  React.useEffect(() => {
    if (api) {
      const marker = new api.Marker({
        map,
        position: {
          lat,
          lng,
        },
      });
      return () => {
        marker.setMap(null);
      };
    }
  }, [api, map, lat, lng]);
  return null;
};

export default function GoogleMarkerPage() {
  const api = 'AIzaSyBBGJ2ZMqdWgLcrRuMc2U4zeOwGrH1bPFE';
  return (
    <Ratio value={3 / 4}>
      {api && (
        <Map api={api} options={MAP_OPTIONS}>
          <GoogleMarker
            lat={MAP_OPTIONS.center.lat}
            lng={MAP_OPTIONS.center.lng}
          />
        </Map>
      )}
    </Ratio>
  );
}
