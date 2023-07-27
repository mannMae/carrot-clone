import { Box, Button, SlideControl } from 'components/Elements';
import { Description, Infomation, Title, Wrapper } from './TownRange.style';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { locationData, locations } from '../routes/Location';

export const TownRange = ({ defaultLevel = 3, close }) => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [locationLevel, setLocationLevel] = useState(defaultLevel);

  return (
    <Wrapper>
      <Box alignItems="start" gap="20px" padding="30px 10px">
        <Title>동네 범위</Title>
        <Link
          to={`location/infomation/${encodeURI(
            encodeURIComponent(selectedLocation)
          )}
            `}
        >
          <Infomation>{`${selectedLocation}과 근처 동네 ${locationData[selectedLocation]?.count[locationLevel]}개`}</Infomation>
        </Link>
        <SlideControl
          points={3}
          defaultValue={locationLevel}
          getValue={setLocationLevel}
        />
        <Box flexDirection="row" justifyContent="center" width="100%">
          <Button
            variant="blackLightGray"
            size="large"
            borderRadius="5px"
            padding="10px 20px"
            onClick={() => {
              setLocationLevel(defaultLevel);
              close();
            }}
          >
            초기화
          </Button>
          <Button
            size="large"
            borderRadius="5px"
            padding="10px 60px"
            onClick={() => {
              close();
            }}
          >
            적용하기
          </Button>
        </Box>
      </Box>
    </Wrapper>
  );
};
