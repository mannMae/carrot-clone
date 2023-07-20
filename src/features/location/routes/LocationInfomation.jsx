import { useParams } from 'react-router-dom';
import { BoxContent, BoxTitle, Wrapper } from './LocationInfomation.style';
import { Box } from 'components/Elements';
import { locationData } from './Location';

export const LocationInfomation = () => {
  const param = useParams();
  const location = decodeURI(decodeURIComponent(param.location));
  console.log(param);
  console.log(location);
  return (
    <Wrapper>
      <Box gap="20px">
        <BoxTitle>가까운 동네</BoxTitle>
        <BoxContent>
          {locationData[location]['around'][0].join(', ')}
        </BoxContent>
      </Box>
      <Box gap="20px">
        <BoxTitle>조금 가까운 동네</BoxTitle>
        <BoxContent>
          {locationData[location]['around'][1].join(', ')}
        </BoxContent>
      </Box>
      <Box gap="20px">
        <BoxTitle>조금 먼 동네</BoxTitle>
        <BoxContent>
          {locationData[location]['around'][2].join(', ')}
        </BoxContent>
      </Box>
      <Box gap="20px">
        <BoxTitle>먼 동네</BoxTitle>
        <BoxContent>
          {locationData[location]['around'][3].join(', ')}
        </BoxContent>
      </Box>
    </Wrapper>
  );
};
