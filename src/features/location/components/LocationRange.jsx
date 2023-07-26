import { Box, Button, SlideControl } from 'components/Elements';
import {
  Description,
  Header,
  Infomation,
  Title,
  Wrapper,
} from './LocationRange.style';

import XIcon from 'assets/icons/x.svg';
import { useBottomSheet } from 'hooks/useBottomSheet';
import { useState } from 'react';
import { locationData, locations } from '../routes/Location';
import { Map } from '.';
import { Link } from 'react-router-dom';

export const LocationRagne = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [locationLevel, setLocationLevel] = useState(0);

  const { close } = useBottomSheet();
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
        <Title>보여줄 동네 설정</Title>
        <Button backgroundColor="transparent" />
      </Header>
      <Map
        locationLevel={locationLevel}
        defaultCenter={locationData[selectedLocation].position}
      />
      <Box alignItems="center" gap="30px" padding="30px 10px">
        <Link
          to={`./infomation/${encodeURI(encodeURIComponent(selectedLocation))}
            `}
        >
          <Infomation>{`${selectedLocation}과 근처 동네 ${locationData[selectedLocation]?.count[locationLevel]}개`}</Infomation>
        </Link>
        <Description>가까운 동네의 이웃들이 게시글을 볼 수 있어요.</Description>
        <SlideControl
          points={3}
          defaultValue={locationLevel}
          getValue={setLocationLevel}
        />
      </Box>
    </Wrapper>
  );
};
