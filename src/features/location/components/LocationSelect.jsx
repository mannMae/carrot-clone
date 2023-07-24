import { useEffect, useRef, useState } from 'react';
import { Box, Button } from 'components/Elements';
import { Description, Header, Tip, Wrapper } from './LocationSelect.style';

import XIcon from 'assets/icons/x.svg';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useBottomSheet } from 'hooks/useBottomSheet';

import LocationIcon from 'assets/icons/location-filled-primary.svg';

export const LocationSelect = ({ getValue }) => {
  const { close } = useBottomSheet();
  const { open } = useBottomSheet(1);
  const [userPosition, setUserPosition] = useState({ lat: 0, lng: 0 });
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  const mapRef = useRef();

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

  const handleCenterChange = (e) => {
    setCenter({
      lat: mapRef.current.getCenter().getLat(),
      lng: mapRef.current.getCenter().getLng(),
    });
  };

  return (
    <Wrapper>
      <Header>
        <Button
          startIcon={XIcon}
          size="xlarge"
          padding="0"
          backgroundColor="transparent"
          onClick={() => close()}
        />
        <Box gap="15px">
          <Description>
            {'이웃과 만나서\n거래하고 싶은 장소를 선택해주세요.'}
          </Description>
          <Tip>만나서 거래할 때는 누구나 찾기 쉬운 공공장소가 좋아요.</Tip>
        </Box>
      </Header>
      <Map
        ref={mapRef}
        center={{ lat: userPosition?.lat, lng: userPosition?.lng }}
        style={{ width: '100%', height: '100%' }}
        onCenterChanged={handleCenterChange}
      >
        <MapMarker
          position={{ lat: userPosition.lat, lng: userPosition.lng }}
        ></MapMarker>
        <MapMarker
          position={{ lat: center.lat, lng: center.lng }}
          image={{
            src: LocationIcon,
            size: {
              width: 50,
              height: 50,
            },
          }}
        ></MapMarker>
      </Map>
      <Button
        position="fixed"
        bottom="2%"
        left="50%"
        zIndex="300"
        width="90%"
        borderRadius="5px"
        padding="10px"
        size="large"
        transform="translateX(-50%)"
        onClick={(e) => {
          e.stopPropagation();
          open({
            type: 'content',
          });
        }}
      >
        선택 완료
      </Button>
    </Wrapper>
  );
};
