import { Head } from 'components/Head';
import {
  Description,
  Infomation,
  SectionTitle,
  Wrapper,
} from './Location.style';
import { Map } from '../components';
import { Box, Button, SlideControl } from 'components/Elements';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Location = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [locationLevel, setLocationLevel] = useState(0);
  return (
    <>
      <Head title="내 동네 설정" />
      <Wrapper>
        <Map
          locationLevel={locationLevel}
          defaultCenter={locationData[selectedLocation].position}
        />
        <Box padding="30px 15px" gap="15px">
          <SectionTitle>내 동네</SectionTitle>
          <Box flexDirection="row">
            {locations.map((location, i) => (
              <Button
                width="250px"
                contentWidth="100%"
                padding="15px"
                borderRadius="10px"
                key={i}
                onClick={() => setSelectedLocation(location)}
                fontWeight="600"
                color={selectedLocation !== location && 'black'}
                backgroundColor={selectedLocation !== location && 'lightGray'}
              >
                {location}
                <Button
                  backgroundColor="transparent"
                  color={selectedLocation !== location && 'black'}
                >
                  ✕
                </Button>
              </Button>
            ))}
          </Box>
          <Link
            to={`./infomation/${encodeURI(encodeURIComponent(selectedLocation))}
            `}
          >
            <Infomation>{`${selectedLocation}과 근처 동네 ${locationData[selectedLocation]?.count[locationLevel]}개`}</Infomation>
          </Link>
          <SlideControl
            points={3}
            defaultValue={locationLevel}
            getValue={setLocationLevel}
          />
          <Description>
            🥕 홈에서 <strong>가까운 동네</strong> 중고거래 게시글을 볼 수
            있어요.
          </Description>
        </Box>
      </Wrapper>
    </>
  );
};

export const locations = ['역삼동', '노량진동'];

export const locationData = {
  역삼동: {
    position: { lat: 37.5013187, lng: 127.0420784 },
    count: [3, 16, 28, 39],
    around: [
      ['역삼1동', '역삼2동', '역삼동'],
      [
        '서초1동',
        '서초2동',
        '서초4동',
        '논현1동',
        '논현2동',
        '삼성2동',
        '대치1동',
        '대치4동',
        '도곡1동',
        '도곡2동',
        '논현동',
        '도곡동',
        '삼성동',
      ],
      [
        '서초3동',
        '반포본동',
        '반포1동',
        '반포2동',
        '반포4동',
        '삼성1동',
        '대치2동',
        '개포3동',
        '대치동',
        '반포동',
        '서초동',
        '양재동',
      ],
      [
        '잠원동',
        '반포3동',
        '양재1동',
        '양재2동',
        '신사동',
        '압구정동',
        '청담동',
        '개포1동',
        '개포2동',
        '개포4동',
        '개포동',
        '우면동',
      ],
    ],
  },
  노량진동: {
    position: { lat: 37.5133187, lng: 126.9460784 },
    count: [3, 12, 19, 78],
    around: [
      ['노량진제1동', '노량진제2동', '노량진동'],
      [
        '여의동',
        '상도제1동',
        '상도제2동',
        '상도제3동',
        '상도제4동',
        '대방동',
        '본동',
        '상도1동',
        '상도동',
      ],
      [
        '영등포본동',
        '신길제1동',
        '신길제3동',
        '신길제4동',
        '신길제6동',
        '흑석동',
        '여의도동',
      ],
      [
        '이촌제1동',
        '영등포동',
        '당산제2동',
        '도림동',
        '문래동',
        '신길제5동',
        '신길제7동',
        '대림제1동',
        '대림제2동',
        '대림제3동',
        '사당제1동',
        '사당제2동',
        '사당제3동',
        '사당제4동',
        '사당제5동',
        '신대방제1동',
        '신대방제2동',
        '보라매동',
        '청림동',
        '성현동',
        '행운동',
        '낙성대동',
        '청룡동',
        '은천동',
        '중앙동',
        '인헌동',
        '서원동',
        '신원동',
        '서림동',
        '신사동',
        '신림동',
        '난향동',
        '조원동',
        '대학동',
        '삼성동',
        '미성동',
        '난곡동',
        '반포본동',
        '반포1동',
        '반포2동',
        '반포4동',
        '봉천동',
        '동작동',
        '사당동',
        '신대방동',
        '반포동',
        '당산동',
        '당산동6가',
        '대림동',
        '문래동1가',
        '문래동3가',
        '신길동',
        '영등포동1가',
        '영등포동2가',
        '영등포동3가',
        '영등포동4가',
        '영등포동5가',
        '영등포동6가',
        '영등포동7가',
        '영등포동8가',
      ],
    ],
  },
};
