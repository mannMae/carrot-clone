import { theme } from 'providers/theme';
import { useEffect, useState } from 'react';
import {
  Circle,
  Map as KakaoMap,
  MapMarker,
  MarkerClusterer,
} from 'react-kakao-maps-sdk';

export const Map = ({ locationLevel, defaultCenter = { lat: 0, lng: 0 } }) => {
  const [userPosition, setUserPosition] = useState({ lat: 0, lng: 0 });
  const [center, setCenter] = useState();
  const [level, setLevel] = useState(4);
  const [circleRadius, setCircleRadius] = useState(250);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (res) => {
        setUserPosition({
          lat: res.coords.latitude,
          lng: res.coords.longitude,
        });
      },
      (error) => console.error(error)
    );
  }, []);

  useEffect(() => {
    setCenter(defaultCenter);
  }, [center, defaultCenter]);

  useEffect(() => {
    if (locationLevel === 0) {
      setLevel(3);
      setCircleRadius(250);
    } else if (locationLevel === 1) {
      setLevel(6);
      setCircleRadius(2000);
    } else if (locationLevel === 2) {
      setLevel(7);
      setCircleRadius(2500);
    } else if (locationLevel === 3) {
      setLevel(7);
      setCircleRadius(3500);
    }
  }, [locationLevel]);

  return (
    <KakaoMap
      center={{ lat: center?.lat, lng: center?.lng }}
      style={{ width: '100%', height: '55vh' }}
      draggable={false}
      level={level}
    >
      <Circle
        center={{
          lat: center?.lat,
          lng: center?.lng,
        }}
        radius={circleRadius}
        strokeWeight={1.5}
        strokeOpacity={0.3}
        fillColor={theme.colors.primary} // 채우기 색깔입니다
        fillOpacity={0.4} // 채우기 불투명도 입니다
      />
      <MarkerClusterer averageCenter={true} minLevel={5}>
        <MapMarker
          position={{ lat: userPosition.lat, lng: userPosition.lng }}
        ></MapMarker>
      </MarkerClusterer>
    </KakaoMap>
  );
};
